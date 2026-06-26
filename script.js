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
