/* ============================================================
   THEME.JS — Dark/Light Mode Management
   ============================================================ */

const themeToggleBtn = document.getElementById('theme-toggle');
const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check local storage or system preference
let currentTheme = localStorage.getItem('colosseum-theme');
if (!currentTheme) {
  currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('colosseum-theme', theme);
  
  const isDark = theme === 'dark';
  const iconSvg = isDark
    ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>' // Sun (switch to light)
    : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'; // Moon (switch to dark)
  
  if (themeIcon) themeIcon.innerHTML = iconSvg;
  
  // Update mobile icon as well
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconSvg}</svg>`;
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
}

// Initial application
applyTheme(currentTheme);
window.toggleTheme = toggleTheme;
