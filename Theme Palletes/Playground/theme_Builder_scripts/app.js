import { THEME_CONFIG } from './config.js';
import { initUI, updateTogglePosition, updateActiveButton, renderContent, renderThemeCard } from './ui.js';

const THEME_CSS_BASE_PATH = THEME_CONFIG.themeCssBasePath ?? './theme_builder_CSSs/themes';

function slugToCssFilePath(slug) {
  const fileName = `${slug.replace(/-/g, '_')}.css`;
  return `${THEME_CSS_BASE_PATH}/${fileName}`;
}

function normalizeColorValue(value) {
  if (!value) return value;
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  if (!trimmed) return trimmed;

  if (trimmed.includes('gradient(')) {
    return trimmed;
  }

  if (trimmed.startsWith('rgb')) {
    const match = trimmed.match(/rgba?\(([^)]+)\)/i);
    if (!match) return trimmed;
    const parts = match[1].split(',').map(part => part.trim());
    if (parts.length < 3) return trimmed;
    const [r, g, b] = parts;
    const alpha = parts[3];
    const toHex = (component) => {
      const valueNum = Math.max(0, Math.min(255, parseInt(component, 10)));
      return valueNum.toString(16).padStart(2, '0');
    };
    const baseHex = `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    if (alpha !== undefined) {
      const alphaNum = Math.max(0, Math.min(1, parseFloat(alpha)));
      const alphaHex = Math.round(alphaNum * 255).toString(16).padStart(2, '0').toUpperCase();
      return `${baseHex}${alphaHex}`;
    }
    return baseHex;
  }

  return trimmed;
}

function formatTokenProperty(prop, value) {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (prop.includes('color') || prop.includes('outline') || prop.includes('shadow')) {
    return `${prop}: ${normalizeColorValue(trimmed)}`;
  }
  return `${prop}: ${trimmed}`;
}

class ThemeApp {
  constructor() {
    this.currentMode = THEME_CONFIG.defaultMode;
    this.themes = [...THEME_CONFIG.themes];
    this.selectedThemeSlug = '';
    this.cssCache = new Map();
    this.copyScratchpad = null;
    this.initialize();
  }

  initialize() {
    // Initialize UI components
    initUI();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Initial render
    this.render();
  }

  setupEventListeners() {
    // Toggle buttons
    document.querySelectorAll(THEME_CONFIG.selectors.toggleButtons).forEach(button => {
      button.addEventListener('click', (e) => this.handleToggleClick(e));
    });
    
    // Theme selection (delegated event for dynamically added elements)
    document.addEventListener('change', (e) => {
      if (e.target.matches('.dropdown')) {
        this.handleThemeSelect(e);
      }
    });

    document.addEventListener('click', (e) => {
      const copyAllBtn = e.target.closest('.copy-all-btn');
      if (copyAllBtn) {
        this.handleCopyAllClick().catch(() => {});
        return;
      }

      const card = e.target.closest('.theme-card');
      if (card) {
        this.handleThemeCardClick(card).catch(() => {});
      }
    });
  }

  handleToggleClick(e) {
    const newMode = e.currentTarget.dataset.mode;
    if (newMode === this.currentMode) return;
    
    this.currentMode = newMode;
    this.render();
  }

  handleThemeSelect(e) {
    const selectedValue = e.target.value;
    if (!selectedValue) return;
    
    const selectedTheme = this.themes.find(
      t => t.toLowerCase().replace(/\s+/g, '-') === selectedValue
    );
    
    if (!selectedTheme) return;

    this.selectedThemeSlug = selectedValue;

    const selectedThemeEl = document.getElementById('selectedTheme');
    if (selectedThemeEl) {
      selectedThemeEl.textContent = `Selected: ${selectedTheme}`;
      selectedThemeEl.classList.add('fade-in');
    }

    const previewContainer = document.getElementById('themePreviewContainer');
    if (previewContainer) {
      previewContainer.innerHTML = this.buildThemeCard(selectedTheme);
    }
  }

  buildThemeCard(theme) {
    return renderThemeCard(theme);
  }

  async handleCopyAllClick() {
    const scratchpad = this.ensureScratchpad();
    const entries = [];

    for (let index = 0; index < this.themes.length; index += 1) {
      const themeName = this.themes[index];
      const slug = themeName.toLowerCase().replace(/\s+/g, '-');

      scratchpad.innerHTML = renderThemeCard(themeName);
      const card = scratchpad.querySelector('.theme-card');
      if (!card) continue;

      const schema = await this.generateSchemaFromCard(card);
      if (!schema) continue;
      entries.push(`${index + 1}. ${schema}`);
    }

    scratchpad.innerHTML = '';

    const combined = entries.join('\n\n');
    if (!combined) return;

    const copied = await this.writeToClipboard(combined);
    if (!copied) {
      this.fallbackCopy(combined);
    }
  }

  async handleThemeCardClick(card) {
    const schemaText = await this.generateSchemaFromCard(card);
    if (!schemaText) return;

    const copied = await this.writeToClipboard(schemaText);
    if (!copied) {
      this.fallbackCopy(schemaText);
    }

    card.classList.add('theme-card-copied');
    setTimeout(() => {
      card.classList.remove('theme-card-copied');
    }, 800);
  }

  ensureScratchpad() {
    if (this.copyScratchpad) {
      return this.copyScratchpad;
    }

    const pad = document.createElement('div');
    pad.setAttribute('aria-hidden', 'true');
    Object.assign(pad.style, {
      position: 'absolute',
      left: '-9999px',
      top: '0',
      height: '0',
      width: '0',
      overflow: 'hidden'
    });
    document.body.appendChild(pad);
    this.copyScratchpad = pad;
    return pad;
  }

  async generateSchemaFromCard(card) {
    if (!card) return '';
    const slug = card.dataset.theme;
    if (!slug) return '';

    const themeTitle = card.querySelector('.theme-card-title');
    const themeName = themeTitle ? themeTitle.textContent.trim() : slug;

    const iconDot = card.querySelector('[data-token="Icon Dot"]');
    let iconColor = '';
    if (iconDot) {
      const computed = window.getComputedStyle(iconDot);
      iconColor = normalizeColorValue(computed.getPropertyValue('background-color'));
    }

    const tokenLines = this.collectTokenLines(card);
    const cssText = await this.getThemeCssText(slug);

    const lines = [`Theme: ${themeName}`, `Slug: ${slug}`];
    if (iconColor) {
      lines.push(`icon_color: ${iconColor}`);
    }

    lines.push('');
    lines.push('CSS:');
    lines.push(cssText || '/* CSS file unavailable */');

    if (tokenLines.length) {
      lines.push('');
      lines.push('Token Snapshot:');
      tokenLines.forEach(line => lines.push(line));
    }

    return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  collectTokenLines(card) {
    const tokens = [];
    const nodes = card.querySelectorAll('[data-token]');
    nodes.forEach((node) => {
      const tokenName = node.dataset.token;
      if (!tokenName) return;
      const props = (node.dataset.tokenProperties || '').split(',').map(p => p.trim()).filter(Boolean);
      if (!props.length) return;

      const computed = window.getComputedStyle(node);
      const propertyLines = [];

      props.forEach((prop) => {
        const value = computed.getPropertyValue(prop);
        const formatted = formatTokenProperty(prop, value || '');
        if (formatted) {
          propertyLines.push(formatted);
        }
      });

      if (propertyLines.length) {
        tokens.push({
          name: tokenName,
          properties: propertyLines
        });
      }
    });

    const lines = [];
    tokens.forEach((token, index) => {
      lines.push(`${index + 1}. ${token.name}:`);
      token.properties.forEach(propLine => {
        lines.push(`   ${propLine}`);
      });
      lines.push('');
    });

    return lines;
  }

  async getThemeCssText(slug) {
    if (this.cssCache.has(slug)) {
      return this.cssCache.get(slug);
    }

    const cssPath = slugToCssFilePath(slug);

    try {
      const response = await fetch(cssPath, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Failed to fetch CSS for ${slug}`);
      }
      const text = await response.text();
      const trimmed = text.trim();
      this.cssCache.set(slug, trimmed);
      return trimmed;
    } catch (error) {
      if (THEME_CONFIG.schemas && THEME_CONFIG.schemas[slug]) {
        const fallback = THEME_CONFIG.schemas[slug];
        this.cssCache.set(slug, fallback);
        return fallback;
      }
      return '';
    }
  }

  async writeToClipboard(text) {
    if (!text) return false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (e) {
    }
    document.body.removeChild(textarea);
  }

  render() {
    // Update UI based on current mode
    updateActiveButton(this.currentMode);
    updateTogglePosition(this.currentMode);
    renderContent(this.currentMode, this.themes);
  }
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeApp();
});
