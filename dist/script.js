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

document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
