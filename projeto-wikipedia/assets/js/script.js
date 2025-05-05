const toggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

toggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', next);
  toggle.textContent = next === 'light' ? '🌙' : '☀️';
});
