const elements = document.querySelectorAll('.fade-in');

if (elements.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
  );
  elements.forEach((el) => observer.observe(el));
} else {
  elements.forEach((el) => el.classList.add('show'));
}

const demoFab = document.querySelector('.demo-guide-fab');
const demoPanel = document.querySelector('.demo-guide-panel');
const demoClose = document.querySelector('.demo-guide-close');

if (demoFab && demoPanel) {
  demoFab.addEventListener('click', () => {
    demoPanel.classList.add('open');
    demoPanel.setAttribute('aria-hidden', 'false');
  });

  demoClose?.addEventListener('click', () => {
    demoPanel.classList.remove('open');
    demoPanel.setAttribute('aria-hidden', 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      demoPanel.classList.remove('open');
      demoPanel.setAttribute('aria-hidden', 'true');
    }
  });
}
