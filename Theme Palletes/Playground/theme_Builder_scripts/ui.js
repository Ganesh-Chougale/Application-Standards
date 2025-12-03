import { THEME_CONFIG } from './config.js';

// Cache DOM elements
const elements = {
  contentBox: null,
  toggleHighlight: null,
  toggleButtons: []
};

// Initialize UI components
export function initUI() {
  // Cache DOM elements
  elements.contentBox = document.querySelector(THEME_CONFIG.selectors.content);
  elements.toggleHighlight = document.querySelector(THEME_CONFIG.selectors.highlight);
  elements.toggleButtons = document.querySelectorAll(THEME_CONFIG.selectors.toggleButtons);
  
  // Set initial toggle position
  updateTogglePosition(THEME_CONFIG.defaultMode);
}

// Update the toggle highlight position
export function updateTogglePosition(mode) {
  if (!elements.toggleButtons.length) return;
  
  const activeBtn = Array.from(elements.toggleButtons).find(
    btn => btn.dataset.mode === mode
  );
  
  if (activeBtn && elements.toggleHighlight) {
    const btnRect = activeBtn.getBoundingClientRect();
    const containerRect = activeBtn.parentElement.getBoundingClientRect();
    
    elements.toggleHighlight.style.width = `${btnRect.width}px`;
    elements.toggleHighlight.style.transform = `translateX(${btnRect.left - containerRect.left - 8}px)`;
  }
}

// Update active button state
export function updateActiveButton(mode) {
  elements.toggleButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

// Render content based on mode
export function renderContent(mode, themes) {
  if (!elements.contentBox) return;
  
  // Remove fade-in class for animation
  elements.contentBox.classList.remove('fade-in');
  
  // Small delay to allow fade out effect
  setTimeout(() => {
    elements.contentBox.innerHTML = mode === 'all' 
      ? renderAllThemes(themes) 
      : renderThemeSelector(themes);
    
    // Trigger reflow to enable animation
    void elements.contentBox.offsetWidth;
    elements.contentBox.classList.add('fade-in');
  }, THEME_CONFIG.animations.toggleTransition);
}

// Render all themes as preview cards
function renderAllThemes(themes) {
  return `
    <div class="themes-header">
      <h3>All Available Themes</h3>
      <button class="copy-all-btn" type="button" aria-label="Copy all themes" title="Copy all themes">
        <span class="copy-all-icon">⧉</span>
      </button>
    </div>
    <div class="theme-grid">
      ${themes.map(renderThemeCard).join('')}
    </div>`;
}

export function renderThemeCard(theme) {
  const slug = theme.toLowerCase().replace(/\s+/g, '-');
  return `
    <article class="theme-card theme-card--${slug} fade-in" data-theme="${slug}">
      <div class="theme-card-header">
        <div class="theme-card-title-group">
          <h4 class="theme-card-title">${theme}</h4>
          <span class="theme-card-subtitle">Theme Overview</span>
        </div>
        <span class="theme-card-tag">${slug}</span>
      </div>

      <div class="theme-card-section">
        <span class="theme-section-label">Main Surface</span>
        <div 
          class="theme-preview-main" 
          aria-label="Main surface preview"
          data-token="Main Surface"
          data-token-properties="background-color,background-image,border-color,box-shadow"
        ></div>
      </div>

      <div class="theme-card-section theme-card-stack">
        <span class="theme-section-label">Color Stack</span>
        <div class="theme-preview-stack" aria-label="Primary, card, and background swatches">
          <div 
            class="theme-swatch theme-swatch-primary"
            data-token="Primary Swatch"
            data-token-properties="background-color,border-color,outline,box-shadow"
          >
            <span class="theme-swatch-label">Primary</span>
          </div>
          <div 
            class="theme-swatch theme-swatch-card"
            data-token="Card Swatch"
            data-token-properties="background-color,border-color,outline,box-shadow"
          >
            <span class="theme-swatch-label">Card</span>
          </div>
          <div 
            class="theme-swatch theme-swatch-surface"
            data-token="Surface Swatch"
            data-token-properties="background-color,border-color,outline,box-shadow"
          >
            <span class="theme-swatch-label">Surface</span>
          </div>
        </div>
      </div>

      <div class="theme-card-section theme-card-demo">
        <span class="theme-section-label">Components</span>
        <div class="theme-demo-item">
          <span class="theme-demo-label">Button</span>
          <button 
            class="theme-demo-button" 
            type="button"
            data-token="Primary Button"
            data-token-properties="background-color,color,border-color,box-shadow"
          >Primary Button</button>
        </div>
        <div class="theme-demo-item">
          <span class="theme-demo-label">Background Tag</span>
          <div 
            class="theme-demo-bg"
            data-token="Background Tag"
            data-token-properties="background-color,color,border-color,box-shadow"
          >Background</div>
        </div>
        <div class="theme-demo-item">
          <span class="theme-demo-label">Accent Line</span>
          <div 
            class="theme-demo-anim"
            data-token="Accent Line"
            data-token-properties="background-color,background-image"
          ></div>
        </div>
        <div class="theme-demo-item">
          <span class="theme-demo-label">Icon Sample</span>
          <div 
            class="theme-demo-icon" 
            aria-label="Icon sample"
            data-token="Icon Container"
            data-token-properties="background-color,border-color,box-shadow"
          >
            <span 
              class="theme-demo-icon-dot"
              data-token="Icon Dot"
              data-token-properties="background-color,box-shadow"
            ></span>
          </div>
        </div>
      </div>

      <div class="theme-card-section theme-card-meta">
        <span class="theme-section-label">Tokens</span>
        <div class="theme-meta-grid">
          <span class="theme-meta-pill">Primary</span>
          <span class="theme-meta-pill">Surface</span>
          <span class="theme-meta-pill">Card</span>
          <span class="theme-meta-pill">Icon</span>
        </div>
        <button class="theme-meta-copy theme-meta-pill-accent" type="button">Click to copy schema</button>
      </div>
    </article>`;
}

// Render theme selector dropdown
function renderThemeSelector(themes) {
  return `
    <h3>Choose a Theme</h3>
    <div class="dropdown-wrapper">
      <select class="dropdown fade-in">
        <option value="" disabled selected>Select a theme...</option>
        ${themes.map(theme => `
          <option value="${theme.toLowerCase().replace(/\s+/g, '-')}">${theme}</option>
        `).join('')}
      </select>
    </div>
    <div class="selected-theme" id="selectedTheme"></div>
    <div class="theme-grid theme-grid-single" id="themePreviewContainer"></div>`;
}
