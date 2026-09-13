/* ============================================================
   COMPARISON.JS — Before/After Image Slider
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('comparison-container');
  const divider = document.getElementById('comp-divider');
  const afterImage = document.getElementById('comp-after');

  if (!container || !divider || !afterImage) return;

  let isDragging = false;

  // Initial state - 50%
  updateDivider(50);

  // Mouse events
  divider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    container.classList.add('dragging');
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.classList.remove('dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handleMove(e.pageX);
  });

  // Touch events
  divider.addEventListener('touchstart', (e) => {
    isDragging = true;
    container.classList.add('dragging');
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
    container.classList.remove('dragging');
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].pageX);
  }, { passive: true });

  // Click on container to jump to position
  container.addEventListener('click', (e) => {
    if (e.target === divider || divider.contains(e.target)) return;
    handleMove(e.pageX);
  });

  function handleMove(pageX) {
    const rect = container.getBoundingClientRect();
    // Calculate relative x position accounting for page scroll
    let x = pageX - (rect.left + window.pageXOffset);
    
    // Bounds checking
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    
    // Calculate percentage
    const percent = (x / rect.width) * 100;
    updateDivider(percent);
  }

  function updateDivider(percent) {
    divider.style.left = `${percent}%`;
    // Clip the after image (modern colosseum) so the before image (ancient) shows underneath
    // Note: The structure is <div before> beneath <div after>.
    // So 'after' needs to be clipped. 
    // clip-path: polygon(X% 0, 100% 0, 100% 100%, X% 100%) hides the left part of the top image.
    afterImage.style.clipPath = `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)`;
  }
});
