/* ============================================================
   TIMELINE.JS — Interactive Horizontal Timeline
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const timelineTrack = document.getElementById('timeline-track');
  const timelineEvents = document.querySelectorAll('.timeline-event');
  const detailYear = document.getElementById('tl-detail-year');
  const detailTitle = document.getElementById('tl-detail-title');
  const detailText = document.getElementById('tl-detail-text');

  if (!timelineTrack || timelineEvents.length === 0) return;

  // Set initial active state to first event
  updateDetailPanel(timelineEvents[0]);

  // Click handling
  timelineEvents.forEach(event => {
    event.addEventListener('click', () => {
      updateDetailPanel(event);
      
      // Scroll track to center the clicked event
      const containerWidth = timelineTrack.parentElement.clientWidth;
      const eventRect = event.getBoundingClientRect();
      const trackRect = timelineTrack.getBoundingClientRect();
      
      // Calculate relative position within the track
      const eventCenterOffset = (eventRect.left - trackRect.left) + (eventRect.width / 2);
      const targetScrollLeft = eventCenterOffset - (containerWidth / 2);
      
      timelineTrack.parentElement.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    });

    // Keyboard accessibility
    event.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        event.click();
      }
    });
  });

  function updateDetailPanel(eventElement) {
    // Remove active from all
    timelineEvents.forEach(e => e.classList.remove('active'));
    // Add to current
    eventElement.classList.add('active');

    // Get data
    const year = eventElement.getAttribute('data-year');
    
    // Check for translated data via language system
    const titleKey = eventElement.getAttribute('data-title-key');
    const textKey = eventElement.getAttribute('data-text-key');
    const lang = window.currentLang ? window.currentLang() : 'en';
    
    let title = eventElement.getAttribute('data-title');
    let text = eventElement.getAttribute('data-text');

    if (window.translations && window.translations[lang]) {
      if (titleKey && window.translations[lang][titleKey]) {
        title = window.translations[lang][titleKey];
      }
      if (textKey && window.translations[lang][textKey]) {
        text = window.translations[lang][textKey];
      }
    }

    // Animate detail panel out and in
    const detailPanel = document.getElementById('timeline-detail');
    detailPanel.style.opacity = '0';
    detailPanel.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      detailYear.textContent = year;
      detailTitle.textContent = title;
      detailText.textContent = text;
      
      detailPanel.style.opacity = '1';
      detailPanel.style.transform = 'translateY(0)';
    }, 300);
  }

  // Allow mouse wheel scrolling horizontally on the track
  const timelineContainer = timelineTrack.parentElement;
  timelineContainer.addEventListener('wheel', (e) => {
    // Only scroll horizontally if deltaY is significant and deltaX is not
    // This prevents blocking vertical page scroll completely
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      // Check if we're at the edges to allow normal vertical scrolling
      const atStart = timelineContainer.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = timelineContainer.scrollLeft >= (timelineContainer.scrollWidth - timelineContainer.clientWidth) && e.deltaY > 0;
      
      if (!atStart && !atEnd) {
        e.preventDefault();
        timelineContainer.scrollLeft += e.deltaY;
      }
    }
  });
});
