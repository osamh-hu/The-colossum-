/* ============================================================
   MAIN.JS — Core Functionality
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* --- Loading Screen --- */
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBar = document.getElementById('loading-bar');
  const loadingPercent = document.getElementById('loading-percent');
  
  let progress = 0;
  const loadingInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress > 100) progress = 100;
    
    loadingBar.style.width = `${progress}%`;
    loadingPercent.textContent = `${progress}%`;
    
    if (progress === 100) {
      clearInterval(loadingInterval);
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          document.body.classList.add('loaded');
          // Trigger initial hero animation manually if needed
        }, 800);
      }, 500);
    }
  }, 150);

  /* --- Custom Cursor --- */
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorLabel = document.getElementById('cursor-label');
  
  // Only enable custom cursor on non-touch devices
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      // Add slight delay to ring
      requestAnimationFrame(() => {
        cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorLabel.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    });

    // Handle interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .arch-hotspot, .gallery-item, .myth-card, .timeline-event');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovering');
        
        // Check for custom label
        const labelText = el.getAttribute('data-cursor-label');
        if (labelText) {
          cursorLabel.textContent = labelText;
          cursorLabel.classList.add('visible');
        }
      });
      
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovering');
        cursorLabel.classList.remove('visible');
      });
    });
  } else {
    // Hide custom cursor elements on mobile
    cursorDot.style.display = 'none';
    cursorRing.style.display = 'none';
    cursorLabel.style.display = 'none';
  }

  /* --- Navigation & Scroll Progress --- */
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const navHamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = mobileNav.querySelectorAll('a');

  // Mobile menu toggle
  navHamburger.addEventListener('click', () => {
    const isExpanded = navHamburger.getAttribute('aria-expanded') === 'true';
    navHamburger.setAttribute('aria-expanded', !isExpanded);
    navHamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = isExpanded ? '' : 'hidden'; // Prevent scrolling when menu open
  });

  // Close mobile menu on link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      navHamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      navHamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('scroll', () => {
    // Navbar background
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";
    scrollProgress.setAttribute('aria-valuenow', Math.round(scrolled));
  });

  /* --- Smooth Scrolling for Anchor Links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* --- Hero Particles --- */
  const particlesContainer = document.getElementById('hero-particles');
  if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      // Random size
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      // Random animation delay and duration
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particlesContainer.appendChild(particle);
    }
  }

  /* --- Number Counter Animation (Intersection Observer fallback) --- */
  const statValues = document.querySelectorAll('.stat-value[data-count-to]');
  const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetNum = parseInt(el.getAttribute('data-count-to'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        
        let startNum = 0;
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = targetNum / steps;
        
        const timer = setInterval(() => {
          startNum += increment;
          if (startNum >= targetNum) {
            el.textContent = prefix + targetNum.toLocaleString() + suffix;
            clearInterval(timer);
          } else {
            el.textContent = prefix + Math.floor(startNum).toLocaleString() + suffix;
          }
        }, stepTime);
        
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  statValues.forEach(val => statObserver.observe(val));

  /* --- Architecture Diagram Interactivity --- */
  const hotspots = document.querySelectorAll('.arch-hotspot');
  const infoTitle = document.getElementById('arch-detail-title');
  const infoText = document.getElementById('arch-detail-text');
  const detailContent = document.getElementById('arch-detail-content');
  const defaultMsg = document.getElementById('arch-default-msg');

  hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
      // Remove active state from all
      hotspots.forEach(h => h.classList.remove('active'));
      // Add to clicked
      hotspot.classList.add('active');
      
      // Update text
      const title = hotspot.getAttribute('data-title');
      const text = hotspot.getAttribute('data-info');
      
      infoTitle.textContent = title;
      infoText.textContent = text;
      
      // Toggle visibility
      defaultMsg.style.display = 'none';
      detailContent.style.display = 'block';
    });
  });

  /* --- Hypogeum Toggle --- */
  const hypoBtns = document.querySelectorAll('.hypo-toggle-btn');
  const hypoViews = document.querySelectorAll('.hypogeum-view');

  hypoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      
      // Update buttons
      hypoBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update views
      hypoViews.forEach(view => {
        if (view.id === `hypo-${targetView}-view`) {
          view.classList.add('active');
          // Add small animation
          view.style.animation = 'none';
          view.offsetHeight; /* trigger reflow */
          view.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          view.classList.remove('active');
        }
      });
    });
  });
});
