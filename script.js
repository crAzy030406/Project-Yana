// Subtle Micro-Animations & Scroll Reveal
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for graceful scroll fade-up reveals
  const revealElements = document.querySelectorAll('.fade-up');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // Smooth mouse tilt effect on hero banner
  const heroCard = document.querySelector('.hero-visual-wrapper');
  if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const tiltX = (y / rect.height) * -8;
      const tiltY = (x / rect.width) * 8;
      
      heroCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      heroCard.style.transition = 'transform 0.5s ease';
    });

    heroCard.addEventListener('mouseenter', () => {
      heroCard.style.transition = 'none';
    });
  }
});
