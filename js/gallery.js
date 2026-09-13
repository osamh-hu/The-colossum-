/* ============================================================
   GALLERY.JS — Filtering and Lightbox
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* --- Filtering --- */
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Filter items
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
          item.style.display = 'block';
          // Small animation to reappear smoothly
          item.style.animation = 'none';
          item.offsetHeight; // trigger reflow
          item.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* --- Lightbox --- */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');

  let currentItemIndex = 0;
  // Store visible items array to navigate only filtered items
  let visibleItems = [];

  function openLightbox(index) {
    const item = visibleItems[index];
    if (!item) return;
    
    // Extract bg image url
    const bgElement = item.querySelector('.gallery-item-bg');
    const bgStyle = window.getComputedStyle(bgElement);
    const bgUrlMatch = bgStyle.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
    
    if (bgUrlMatch && bgUrlMatch[1]) {
      lbImg.src = bgUrlMatch[1];
    } else {
      // Fallback for non-image items (like emojis)
      lbImg.src = '';
      lbImg.alt = 'Image not available';
    }

    // Set caption based on translated span if available
    const captionSpan = item.querySelector('.gallery-item-caption');
    lbCaption.innerHTML = captionSpan ? captionSpan.innerHTML : item.getAttribute('data-caption');
    
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    currentItemIndex = index;
    
    // Focus management for accessibility
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function nextImage() {
    currentItemIndex = (currentItemIndex + 1) % visibleItems.length;
    openLightbox(currentItemIndex);
  }

  function prevImage() {
    currentItemIndex = (currentItemIndex - 1 + visibleItems.length) % visibleItems.length;
    openLightbox(currentItemIndex);
  }

  // Attach click events to gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Update visible items array based on current filter
      visibleItems = Array.from(galleryItems).filter(el => el.style.display !== 'none');
      const index = visibleItems.indexOf(item);
      openLightbox(index);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  // Lightbox controls
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbNext) lbNext.addEventListener('click', nextImage);
  if (lbPrev) lbPrev.addEventListener('click', prevImage);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Click outside image to close
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-inner')) {
        closeLightbox();
      }
    });
  }
});
