document.addEventListener('DOMContentLoaded', () => {
  // Setup Intersection Observer for scroll-triggered animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target elements to animate
  const animatedElements = document.querySelectorAll('.scroll-reveal');
  animatedElements.forEach(el => observer.observe(el));
  
  // Sticky button interaction
  const notifyBtn = document.querySelector('.sticky-notify');
  if (notifyBtn) {
    notifyBtn.addEventListener('click', () => {
      notifyBtn.textContent = 'YOU ARE ON THE LIST';
      notifyBtn.style.backgroundColor = '#FFFFFF';
      notifyBtn.style.color = '#050505';
      
      setTimeout(() => {
        notifyBtn.textContent = 'NOTIFY ME';
        notifyBtn.style.backgroundColor = '';
        notifyBtn.style.color = '';
      }, 3000);
    });
  }
});
