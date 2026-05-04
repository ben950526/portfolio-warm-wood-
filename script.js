const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}

// 滑動時
window.addEventListener('scroll', showOnScroll);

// ⭐ 一進頁面就執行一次
window.addEventListener('load', showOnScroll);

