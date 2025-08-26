// اختيار الزر
const backToTopBtn = document.querySelector('.back-to-top');

// إظهار الزر لما المستخدم ينزل 200px
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.visibility = 'visible';
  } else {
    backToTopBtn.style.visibility = 'hidden';
  }
});

// عند الضغط على الزر، نرجع الصفحة للأعلى بسلاسة
backToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});