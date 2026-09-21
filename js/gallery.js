/* ============================================================
   GALLERY.JS — Filtering, Lightbox & Touch Navigation
   The Colosseum — The Eternal Arena
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbDesc = document.getElementById('lightbox-desc');
  const lbCounter = document.getElementById('lightbox-counter');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');

  let currentIdx = 0;
  let activeItems = Array.from(galleryItems);

  /* --- Filtering System --- */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-filter');
        const matches = (filter === 'all' || itemCat === filter);

        if (matches) {
          item.style.display = '';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          requestAnimationFrame(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          });
        } else {
          item.style.display = 'none';
        }
      });

      // Update visible items array for lightbox sequence
      activeItems = Array.from(galleryItems).filter(el => el.style.display !== 'none');
    });
  });

  /* --- Lightbox Functionality --- */
  function openLightbox(index) {
    if (!activeItems || activeItems.length === 0) return;
    currentIdx = (index + activeItems.length) % activeItems.length;
    const item = activeItems[currentIdx];
    if (!item) return;

    // Get image src
    let imgSrc = item.getAttribute('data-image');
    if (!imgSrc) {
      const imgTag = item.querySelector('img');
      if (imgTag) imgSrc = imgTag.src;
    }
    if (!imgSrc) {
      const bg = item.querySelector('.gallery-item-bg');
      if (bg) {
        const style = window.getComputedStyle(bg);
        const match = style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
        if (match) imgSrc = match[1];
      }
    }

    lbImg.src = imgSrc || '';
    lbImg.alt = item.getAttribute('data-caption') || 'Colosseum Gallery Image';

    // Captions with bilingual lookup
    const captionEl = item.querySelector('.gallery-item-caption');
    const descEl = item.querySelector('.gallery-item-sub');
    
    if (lbCaption) {
      lbCaption.innerHTML = captionEl ? captionEl.innerHTML : (item.getAttribute('data-caption') || '');
    }
    if (lbDesc) {
      lbDesc.innerHTML = descEl ? descEl.innerHTML : (item.getAttribute('data-desc') || '');
    }
    if (lbCounter) {
      lbCounter.textContent = `${currentIdx + 1} / ${activeItems.length}`;
    }

    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (lbClose) lbClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function nextImage() {
    openLightbox(currentIdx + 1);
  }

  function prevImage() {
    openLightbox(currentIdx - 1);
  }

  // Click & keyboard handlers on gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      activeItems = Array.from(galleryItems).filter(el => el.style.display !== 'none');
      const idx = activeItems.indexOf(item);
      openLightbox(idx);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  // Controls
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbNext) lbNext.addEventListener('click', nextImage);
  if (lbPrev) lbPrev.addEventListener('click', prevImage);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Click outside to close
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });
  }

  // Touch swipe support for lightbox
  let touchStartX = 0;
  let touchEndX = 0;
  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextImage(); // Swipe left
      } else if (touchEndX - touchStartX > 50) {
        prevImage(); // Swipe right
      }
    }, { passive: true });
  }
});
