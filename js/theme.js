// Theme toggle logic (FR-8.*, DS-4)

const THEME_KEY = 'theme';
const prefersDark = window.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')
  : null;

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Ignore storage failures
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
}

function initTheme() {
  const stored = getStoredTheme();
  let theme = stored;

  if (!theme) {
    if (prefersDark && prefersDark.matches) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  }

  applyTheme(theme);

  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const icon = toggle.querySelector('.theme-toggle__icon');

  function updateIcon(currentTheme) {
    if (!icon) return;
    icon.textContent = currentTheme === 'dark' ? '☾' : '☼';
  }

  updateIcon(theme);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    storeTheme(next);
    updateIcon(next);
  });
}

document.addEventListener('DOMContentLoaded', initTheme);

