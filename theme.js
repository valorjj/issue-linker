// Applies the saved theme before the first paint, so a dark page never flashes white. A file, not an inline script:
// the CSP allows same-origin scripts only. Mirrors src/lib/theme.ts (key, values, dark unless `light` is saved).
;(function () {
  var theme = 'dark'
  try {
    if (JSON.parse(localStorage.getItem('llm-serving.theme.v1')) === 'light') theme = 'light'
  } catch {
    // storage unavailable: dark
  }
  document.documentElement.dataset.theme = theme
  // The browser's (and an installed app's) bar color: --bg of that theme in main.css.
  var bar = document.querySelector('meta[name="theme-color"]')
  if (bar) bar.setAttribute('content', theme === 'light' ? '#f4f5fb' : '#0c0e16')
})()
