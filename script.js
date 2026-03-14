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
  
  // Countdown Timer Logic
  const countdownEl = document.getElementById('countdown-timer');
  if (countdownEl) {
    // Set target exactly 24 hours from page load so it starts at 23:59:59
    const targetDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        countdownEl.textContent = 'DROP IS LIVE';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdownEl.textContent = `00:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
  }

  // Mobile Hamburger Menu Logic
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-wa');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    }

    // Close drawer when a link is clicked
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }
});
