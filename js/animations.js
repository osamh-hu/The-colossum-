/* ============================================================
   ANIMATIONS.JS — GSAP and Reveal Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // Basic Intersection Observer for reveal animations
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing once revealed
        // observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });
  
  revealElements.forEach(el => revealObserver.observe(el));

  // Parallax effect on hero background
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos < window.innerHeight) {
        // Move background slightly slower than scroll (parallax)
        heroBg.style.transform = `translateY(${scrollPos * 0.4}px) scale(1.05)`;
      }
    });
  }

  // Gallery Item Parallax (subtle image movement on hover)
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    const bg = item.querySelector('.gallery-item-bg');
    if (!bg) return;
    
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      // Calculate mouse position relative to center of element (-1 to 1)
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      // Move background opposite to mouse
      bg.style.transform = `scale(1.1) translate(${x * -5}px, ${y * -5}px)`;
    });
    
    item.addEventListener('mouseleave', () => {
      bg.style.transform = 'scale(1) translate(0, 0)';
    });
  });
});

/* --- Myth vs Fact Flip Function --- */
function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}
window.flipCard = flipCard;
