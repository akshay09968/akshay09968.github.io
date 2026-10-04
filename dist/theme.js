(() => {
  const storageKey = 'akshay-portfolio-theme';
  const root = document.documentElement;

  function readPreference() {
    try {
      return localStorage.getItem(storageKey) === 'dark' ? 'dark' : 'light';
    } catch {
      return root.dataset.theme || 'light';
    }
  }

  function applyTheme(theme, save = false) {
    root.dataset.theme = theme;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#18191b' : '#ffffff');
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
      button.title = `Switch to ${nextTheme} mode`;
    });
    if (save) {
      try { localStorage.setItem(storageKey, theme); } catch { /* The toggle still works when storage is unavailable. */ }
    }
  }

  // Restore the explicit choice before the stylesheets load. New visitors get white.
  applyTheme(readPreference());

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(root.dataset.theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.hidden = false;
      button.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
    });
  });

  // History navigation can restore an old document without rerunning this script.
  window.addEventListener('pageshow', () => applyTheme(readPreference()));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') applyTheme(readPreference());
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) applyTheme(readPreference());
  });
})();
