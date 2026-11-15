(() => {
  const box = document.getElementById('lightbox');
  const image = box.querySelector('img');
  const close = () => { box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); image.src = ''; };
  document.querySelectorAll('[data-full]').forEach((button) => {
    button.addEventListener('click', () => {
      image.src = button.dataset.full;
      box.classList.add('open');
      box.setAttribute('aria-hidden', 'false');
    });
  });
  box.querySelector('.lightbox-close').addEventListener('click', close);
  box.addEventListener('click', (event) => { if (event.target === box) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
