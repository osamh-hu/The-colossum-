/* ============================================================
   COMPARISON.JS — Before/After Image Slider with LTR/RTL Support
   The Colosseum — The Eternal Arena
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('comparison-container');
  const divider = document.getElementById('comp-divider');
  const afterImage = document.getElementById('comp-after');

  if (!container || !divider || !afterImage) return;

  let isDragging = false;
  let currentPercent = 50;

  function updatePosition(percent) {
    percent = Math.max(0, Math.min(100, percent));
    currentPercent = percent;

    divider.style.left = `${percent}%`;
    afterImage.style.clipPath = `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)`;
    divider.setAttribute('aria-valuenow', Math.round(percent));
  }

  function handleMove(pageX) {
    const rect = container.getBoundingClientRect();
    const x = pageX - (rect.left + window.pageXOffset);
    const percent = (x / rect.width) * 100;
    updatePosition(percent);
  }

  // Mouse events
  divider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    container.classList.add('dragging');
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      container.classList.remove('dragging');
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handleMove(e.pageX);
  });

  // Touch events
  divider.addEventListener('touchstart', () => {
    isDragging = true;
    container.classList.add('dragging');
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      container.classList.remove('dragging');
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].pageX);
  }, { passive: true });

  // Click on container jumps to position
  container.addEventListener('click', (e) => {
    if (e.target === divider || divider.contains(e.target)) return;
    handleMove(e.pageX);
  });

  // Keyboard accessibility
  divider.setAttribute('tabindex', '0');
  divider.setAttribute('role', 'slider');
  divider.setAttribute('aria-label', 'Image comparison slider');
  divider.setAttribute('aria-valuemin', '0');
  divider.setAttribute('aria-valuemax', '100');

  divider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      updatePosition(currentPercent - 5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      updatePosition(currentPercent + 5);
    } else if (e.key === 'Home') {
      e.preventDefault();
      updatePosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      updatePosition(100);
    }
  });

  // Initial set
  updatePosition(50);
});
