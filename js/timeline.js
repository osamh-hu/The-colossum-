/* ============================================================
   TIMELINE.JS — Interactive Horizontal Timeline with Live Translations
   The Colosseum — The Eternal Arena
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
    if (!eventElement) return;

    // Update active class
    timelineEvents.forEach(e => e.classList.remove('active'));
    eventElement.classList.add('active');

    const year = eventElement.getAttribute('data-year');
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

    const detailPanel = document.getElementById('timeline-detail');
    if (detailPanel) {
      detailPanel.style.opacity = '0';
      detailPanel.style.transform = 'translateY(8px)';

      setTimeout(() => {
        if (detailYear) detailYear.textContent = year;
        if (detailTitle) detailTitle.textContent = title;
        if (detailText) detailText.textContent = text;

        detailPanel.style.opacity = '1';
        detailPanel.style.transform = 'translateY(0)';
      }, 150);
    }
  }

  // Update on language switch
  window.addEventListener('colosseum-lang-change', () => {
    const activeEvent = document.querySelector('.timeline-event.active') || timelineEvents[0];
    if (activeEvent) updateDetailPanel(activeEvent);
  });

  // Mouse wheel horizontal scroll on track
  const timelineContainer = timelineTrack.parentElement;
  if (timelineContainer) {
    timelineContainer.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const atStart = timelineContainer.scrollLeft <= 0 && e.deltaY < 0;
        const atEnd = timelineContainer.scrollLeft >= (timelineContainer.scrollWidth - timelineContainer.clientWidth - 5) && e.deltaY > 0;

        if (!atStart && !atEnd) {
          e.preventDefault();
          timelineContainer.scrollLeft += e.deltaY;
        }
      }
    }, { passive: false });
  }
});
