const email = 'akshaydesh360@gmail.com';
const copyButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('.copy-status');
let feedbackTimer;

copyButton?.addEventListener('click', async () => {
  clearTimeout(feedbackTimer);
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(email);
    copyButton.querySelector('span').textContent = 'Copied';
    copyStatus.textContent = 'Email address copied.';
  } catch {
    copyStatus.textContent = 'Select the email address to copy it, or click it to open your email app.';
  }
  feedbackTimer = setTimeout(() => {
    copyButton.querySelector('span').textContent = 'Copy email';
    copyStatus.textContent = '';
  }, 5000);
});

const indexLinks = [...document.querySelectorAll('.page-index a')];
const sections = indexLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
let scrollQueued = false;
function updateIndex() {
  const readingLine = window.innerHeight * 0.3;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= readingLine) current = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = sections.at(-1);
  for (const link of indexLinks) {
    const active = link.hash === `#${current?.id}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) {
    scrollQueued = true;
    requestAnimationFrame(updateIndex);
  }
}, { passive: true });
window.addEventListener('resize', updateIndex);
updateIndex();
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
