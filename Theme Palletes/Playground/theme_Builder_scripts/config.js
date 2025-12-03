// Theme configuration and constants
export const THEME_CONFIG = {
  // Available themes
  themes: ["Default", "Dark", "Soothing", "Ocean Blue", "Sunset Orange", "Forest Green", "Neon Purple", "Glass"],
  
  // Default mode
  defaultMode: "all",
  
  // Animation timings
  animations: {
    fadeIn: 300, // ms
    toggleTransition: 150 // ms
  },
  
  // Selectors
  selectors: {
    toggle: '#themeToggle',
    highlight: '#toggleHighlight',
    content: '#contentBox',
    toggleButtons: '.toggle-btn'
  },

  schemas: {
    'default': `Theme: Default
Slug: default
icon_color: #4a6bff

CSS:
/* Default Theme */
:root {
  /* Color System */
  --primary-color: #4a6bff;
  --primary-light: #eef1ff;
  --text-color: #2d3748;
  --text-secondary: #718096;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  
  /* Spacing */
  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  
  /* Transitions */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.theme-card--default {
  --primary-color: #4a6bff;
  --primary-light: #eef1ff;
  --text-color: #2d3748;
  --text-secondary: #718096;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}`,

    'dark': `Theme: Dark
Slug: dark
icon_color: #5b7cff

CSS:
/* Dark Theme */
:root {
  /* Color System */
  --primary-color: #5b7cff;
  --primary-light: rgba(91, 124, 255, 0.1);
  --text-color: #f7fafc;
  --text-secondary: #a0aec0;
  --bg-color: #1a202c;
  --card-bg: #2d3748;
  
  /* Spacing */
  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  
  /* Transitions */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Shadows */
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.25);
}

.theme-card--dark {
  --primary-color: #5b7cff;
  --primary-light: rgba(91, 124, 255, 0.1);
  --text-color: #f7fafc;
  --text-secondary: #a0aec0;
  --bg-color: #1a202c;
  --card-bg: #2d3748;
  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.25);
}`,

    'soothing': `Theme: Soothing
Slug: soothing
icon_color: #4299e1

CSS:
/* Soothing Theme */
:root {
  /* Color System */
  --primary-color: #4299e1;
  --primary-light: #ebf8ff;
  --text-color: #2d3748;
  --text-secondary: #718096;
  --bg-color: #f0f9ff;
  --card-bg: #ffffff;
  
  /* Spacing */
  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  
  /* Transitions */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(66, 153, 225, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(66, 153, 225, 0.1), 0 2px 4px -1px rgba(66, 153, 225, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(66, 153, 225, 0.1), 0 4px 6px -2px rgba(66, 153, 225, 0.05);
}

.theme-card--soothing {
  --primary-color: #4299e1;
  --primary-light: #ebf8ff;
  --text-color: #2d3748;
  --text-secondary: #718096;
  --bg-color: #f0f9ff;
  --card-bg: #ffffff;
  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-sm: 0 1px 2px 0 rgba(66, 153, 225, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(66, 153, 225, 0.1), 0 2px 4px -1px rgba(66, 153, 225, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(66, 153, 225, 0.1), 0 4px 6px -2px rgba(66, 153, 225, 0.05);
}`,

    'ocean-blue': `Theme: Ocean Blue
Slug: ocean-blue
icon_color: #0ea5e9

CSS:
:root {
  --primary-color: #0ea5e9;
  --primary-light: #e0f2fe;
  --text-color: #0f172a;
  --text-secondary: #64748b;
  --bg-color: #f0f9ff;
  --card-bg: #ffffff;

  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(14, 165, 233, 0.15);
  --shadow-md: 0 4px 6px -1px rgba(14, 165, 233, 0.18), 0 2px 4px -1px rgba(15, 118, 210, 0.15);
  --shadow-lg: 0 10px 15px -3px rgba(15, 118, 210, 0.22), 0 4px 6px -2px rgba(14, 165, 233, 0.2);
}

.theme-card--ocean-blue {
  --primary-color: #0ea5e9;
  --primary-light: #e0f2fe;
  --text-color: #0f172a;
  --text-secondary: #64748b;
  --bg-color: #f0f9ff;
  --card-bg: #ffffff;

  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(14, 165, 233, 0.15);
  --shadow-md: 0 4px 6px -1px rgba(14, 165, 233, 0.18), 0 2px 4px -1px rgba(15, 118, 210, 0.15);
  --shadow-lg: 0 10px 15px -3px rgba(15, 118, 210, 0.22), 0 4px 6px -2px rgba(14, 165, 233, 0.2);
}`,

    'sunset-orange': `Theme: Sunset Orange
Slug: sunset-orange
icon_color: #f97316

CSS:
:root {
  --primary-color: #f97316;
  --primary-light: #ffedd5;
  --text-color: #1f2933;
  --text-secondary: #6b7280;
  --bg-color: #fff7ed;
  --card-bg: #ffffff;

  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(249, 115, 22, 0.18);
  --shadow-md: 0 4px 6px -1px rgba(249, 115, 22, 0.2), 0 2px 4px -1px rgba(194, 65, 12, 0.18);
  --shadow-lg: 0 10px 15px -3px rgba(194, 65, 12, 0.25), 0 4px 6px -2px rgba(249, 115, 22, 0.22);
}

.theme-card--sunset-orange {
  --primary-color: #f97316;
  --primary-light: #ffedd5;
  --text-color: #1f2933;
  --text-secondary: #6b7280;
  --bg-color: #fff7ed;
  --card-bg: #ffffff;

  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(249, 115, 22, 0.18);
  --shadow-md: 0 4px 6px -1px rgba(249, 115, 22, 0.2), 0 2px 4px -1px rgba(194, 65, 12, 0.18);
  --shadow-lg: 0 10px 15px -3px rgba(194, 65, 12, 0.25), 0 4px 6px -2px rgba(249, 115, 22, 0.22);
}`,

    'forest-green': `Theme: Forest Green
Slug: forest-green
icon_color: #16a34a

CSS:
:root {
  --primary-color: #16a34a;
  --primary-light: #bbf7d0;
  --text-color: #052e16;
  --text-secondary: #4b5563;
  --bg-color: #f0fdf4;
  --card-bg: #ffffff;

  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(22, 163, 74, 0.16);
  --shadow-md: 0 4px 6px -1px rgba(22, 163, 74, 0.2), 0 2px 4px -1px rgba(22, 101, 52, 0.18);
  --shadow-lg: 0 10px 15px -3px rgba(22, 101, 52, 0.26), 0 4px 6px -2px rgba(22, 163, 74, 0.22);
}

.theme-card--forest-green {
  --primary-color: #16a34a;
  --primary-light: #bbf7d0;
  --text-color: #052e16;
  --text-secondary: #4b5563;
  --bg-color: #f0fdf4;
  --card-bg: #ffffff;

  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(22, 163, 74, 0.16);
  --shadow-md: 0 4px 6px -1px rgba(22, 163, 74, 0.2), 0 2px 4px -1px rgba(22, 101, 52, 0.18);
  --shadow-lg: 0 10px 15px -3px rgba(22, 101, 52, 0.26), 0 4px 6px -2px rgba(22, 163, 74, 0.22);
}`,

    'neon-purple': `Theme: Neon Purple
Slug: neon-purple
icon_color: #a855f7

CSS:
:root {
  --primary-color: #a855f7;
  --primary-light: #f3e8ff;
  --text-color: #0f172a;
  --text-secondary: #6b7280;
  --bg-color: #faf5ff;
  --card-bg: #ffffff;

  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(168, 85, 247, 0.2);
  --shadow-md: 0 4px 6px -1px rgba(168, 85, 247, 0.24), 0 2px 4px -1px rgba(126, 34, 206, 0.2);
  --shadow-lg: 0 10px 15px -3px rgba(126, 34, 206, 0.3), 0 4px 6px -2px rgba(168, 85, 247, 0.26);
}

.theme-card--neon-purple {
  --primary-color: #a855f7;
  --primary-light: #f3e8ff;
  --text-color: #0f172a;
  --text-secondary: #6b7280;
  --bg-color: #faf5ff;
  --card-bg: #ffffff;

  --spacing-unit: 0.5rem;
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(168, 85, 247, 0.2);
  --shadow-md: 0 4px 6px -1px rgba(168, 85, 247, 0.24), 0 2px 4px -1px rgba(126, 34, 206, 0.2);
  --shadow-lg: 0 10px 15px -3px rgba(126, 34, 206, 0.3), 0 4px 6px -2px rgba(168, 85, 247, 0.26);
}`,

    'glass': `Theme: Glass
Slug: glass
icon_color: #38bdf8

CSS:
:root {
  --primary-color: #38bdf8;
  --primary-light: rgba(56, 189, 248, 0.3);
  --text-color: #e5f0ff;
  --text-secondary: #cbd5f5;
  --bg-color: rgba(15, 23, 42, 0.85);
  --card-bg: rgba(15, 23, 42, 0.7);

  --spacing-unit: 0.5rem;
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.4);
  --shadow-md: 0 4px 10px -2px rgba(15, 23, 42, 0.55);
  --shadow-lg: 0 18px 30px -6px rgba(15, 23, 42, 0.75);
}

.theme-card--glass {
  --primary-color: #38bdf8;
  --primary-light: rgba(56, 189, 248, 0.3);
  --text-color: #e5f0ff;
  --text-secondary: #cbd5f5;
  --bg-color: rgba(15, 23, 42, 0.85);
  --card-bg: rgba(15, 23, 42, 0.7);

  --spacing-unit: 0.5rem;
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.4);
  --shadow-md: 0 4px 10px -2px rgba(15, 23, 42, 0.55);
  --shadow-lg: 0 18px 30px -6px rgba(15, 23, 42, 0.75);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(15, 23, 42, 0.7));
  box-shadow: 0 4px 30px rgba(15, 23, 42, 0.8);
}`
  }
};
