/* ============================================================
   MAIN.JS — Core Functionality, Audio Engine, Ticket Calculator,
   Interactive Quiz, Quick Search & UI Interactivity
   The Colosseum — The Eternal Arena
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. LOADING SCREEN
     ============================================================ */
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBar = document.getElementById('loading-bar');
  const loadingPercent = document.getElementById('loading-percent');

  if (loadingScreen && loadingBar) {
    let progress = 0;
    const loadTimer = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(loadTimer);
        loadingBar.style.width = '100%';
        if (loadingPercent) loadingPercent.textContent = '100%';

        setTimeout(() => {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.classList.add('loaded');
          }, 500);
        }, 300);
      } else {
        loadingBar.style.width = `${progress}%`;
        if (loadingPercent) loadingPercent.textContent = `${progress}%`;
      }
    }, 60);
  }

  /* ============================================================
     2. CUSTOM CURSOR (Desktop Non-Touch)
     ============================================================ */
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorLabel = document.getElementById('cursor-label');

  if (cursorDot && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      if (cursorRing) cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      if (cursorLabel) cursorLabel.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Interactive elements hovering
    const hoverTargets = 'a, button, .arch-hotspot, .gallery-item, .gladiator-card, .myth-card, .timeline-event, input, select';
    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursorRing) cursorRing.classList.add('hovering');
        const customText = el.getAttribute('data-cursor-label');
        if (customText && cursorLabel) {
          cursorLabel.textContent = customText;
          cursorLabel.classList.add('visible');
        }
      });
      el.addEventListener('mouseleave', () => {
        if (cursorRing) cursorRing.classList.remove('hovering');
        if (cursorLabel) cursorLabel.classList.remove('visible');
      });
    });
  } else {
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorRing) cursorRing.style.display = 'none';
    if (cursorLabel) cursorLabel.style.display = 'none';
  }

  /* ============================================================
     3. NAVBAR & SCROLL PROGRESS
     ============================================================ */
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const navHamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 40);
    }

    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgress.style.transform = `scaleX(${pct / 100})`;
      scrollProgress.setAttribute('aria-valuenow', Math.round(pct));
    }
  }, { passive: true });

  // Mobile Hamburger Toggle
  if (navHamburger && mobileNav) {
    navHamburger.addEventListener('click', () => {
      const open = navHamburger.classList.toggle('active');
      mobileNav.classList.toggle('active', open);
      navHamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navHamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        navHamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ============================================================
     4. HERO PARTICLES (Floating Golden Embers)
     ============================================================ */
  const particlesContainer = document.getElementById('hero-particles');
  if (particlesContainer) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 2.5 + 1;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.animationDelay = `${Math.random() * 6}s`;
      p.style.animationDuration = `${Math.random() * 8 + 8}s`;
      fragment.appendChild(p);
    }
    particlesContainer.appendChild(fragment);
  }

  /* ============================================================
     5. STATS COUNTER ANIMATION
     ============================================================ */
  const stats = document.querySelectorAll('.stat-value[data-count-to]');
  const statObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseInt(el.getAttribute('data-count-to'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';

        let currentVal = 0;
        const duration = 1800;
        const startTime = performance.now();

        function updateNumber(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out quad
          const easeOut = 1 - (1 - progress) * (1 - progress);
          currentVal = Math.floor(easeOut * targetVal);

          el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(updateNumber);
          } else {
            el.textContent = `${prefix}${targetVal.toLocaleString()}${suffix}`;
          }
        }
        requestAnimationFrame(updateNumber);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  stats.forEach(s => statObserver.observe(s));

  /* ============================================================
     6. ARCHITECTURE HOTSPOTS
     ============================================================ */
  const hotspots = document.querySelectorAll('.arch-hotspot');
  const infoTitle = document.getElementById('arch-detail-title');
  const infoText = document.getElementById('arch-detail-text');
  const detailContent = document.getElementById('arch-detail-content');
  const defaultMsg = document.getElementById('arch-default-msg');

  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      hotspots.forEach(h => h.classList.remove('active'));
      spot.classList.add('active');

      const title = spot.getAttribute('data-title');
      const info = spot.getAttribute('data-info');

      if (infoTitle) infoTitle.textContent = title;
      if (infoText) infoText.textContent = info;

      if (defaultMsg) defaultMsg.style.display = 'none';
      if (detailContent) detailContent.style.display = 'block';
    });
  });

  /* ============================================================
     7. HYPOGEUM VIEW SWITCHER
     ============================================================ */
  const hypoBtns = document.querySelectorAll('.hypo-toggle-btn');
  const hypoViews = document.querySelectorAll('.hypogeum-view');

  hypoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      hypoBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      hypoViews.forEach(v => {
        if (v.id === `hypo-${view}-view`) {
          v.classList.add('active');
          v.style.opacity = '0';
          v.style.transform = 'translateY(8px)';
          requestAnimationFrame(() => {
            v.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            v.style.opacity = '1';
            v.style.transform = 'translateY(0)';
          });
        } else {
          v.classList.remove('active');
        }
      });
    });
  });

  /* ============================================================
     8. WEB AUDIO API — ROMAN ARENA SOUNDSCAPE (0 KB Download)
     ============================================================ */
  let audioCtx = null;
  let isPlayingAudio = false;
  let masterGain = null;
  let droneGain = null;
  let crowdFilter = null;
  let fanfareTimer = null;

  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundWidgetBtn = document.getElementById('widget-sound-btn');
  const soundBars = document.querySelectorAll('.sound-bar');

  function initAudioEngine() {
    if (audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    // 1. Deep Arena Stone Resonant Drone (Synthesized low octave)
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const subFilter = audioCtx.createBiquadFilter();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(110, audioCtx.currentTime); // A2 note

    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(160, audioCtx.currentTime);

    droneGain = audioCtx.createGain();
    droneGain.gain.setValueAtTime(0.35, audioCtx.currentTime);

    osc1.connect(subFilter);
    osc2.connect(subFilter);
    subFilter.connect(droneGain);
    droneGain.connect(masterGain);

    osc1.start();
    osc2.start();

    // 2. Wind & Whispering Reverb Filtered Noise
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    crowdFilter = audioCtx.createBiquadFilter();
    crowdFilter.type = 'bandpass';
    crowdFilter.frequency.setValueAtTime(450, audioCtx.currentTime);
    crowdFilter.Q.setValueAtTime(2.5, audioCtx.currentTime);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.12, audioCtx.currentTime);

    whiteNoise.connect(crowdFilter);
    crowdFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    whiteNoise.start();

    // 3. Periodic Roman Cornu / Tuba Fanfare Call (Simulated Brass)
    scheduleFanfare();
  }

  function playBrassNote(freq, start, duration) {
    if (!audioCtx || !isPlayingAudio) return;
    const osc = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const gain = audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, start);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 1.5, start);
    filter.frequency.exponentialRampToValueAtTime(freq * 4, start + 0.1);
    filter.frequency.exponentialRampToValueAtTime(freq * 1.2, start + duration);

    gain.gain.setValueAtTime(0.001, start);
    gain.gain.linearRampToValueAtTime(0.18, start + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(start);
    osc.stop(start + duration);
  }

  function scheduleFanfare() {
    if (!audioCtx || !isPlayingAudio) return;
    const now = audioCtx.currentTime + 3;
    // Ancient Roman martial interval (Root, Fifth, Octave fanfare)
    playBrassNote(146.83, now, 0.6);        // D3
    playBrassNote(220.00, now + 0.5, 0.5);  // A3
    playBrassNote(293.66, now + 1.0, 1.2);  // D4

    fanfareTimer = setTimeout(scheduleFanfare, 22000 + Math.random() * 12000);
  }

  function toggleAudio() {
    initAudioEngine();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlayingAudio = !isPlayingAudio;

    if (isPlayingAudio) {
      masterGain.gain.setTargetAtTime(0.6, audioCtx.currentTime, 0.8);
      soundBars.forEach(b => b.classList.add('playing'));
      if (soundToggleBtn) soundToggleBtn.classList.add('active');
      if (soundWidgetBtn) soundWidgetBtn.classList.add('active');
      scheduleFanfare();
    } else {
      masterGain.gain.setTargetAtTime(0.001, audioCtx.currentTime, 0.4);
      soundBars.forEach(b => b.classList.remove('playing'));
      if (soundToggleBtn) soundToggleBtn.classList.remove('active');
      if (soundWidgetBtn) soundWidgetBtn.classList.remove('active');
      if (fanfareTimer) clearTimeout(fanfareTimer);
    }
  }

  if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleAudio);
  if (soundWidgetBtn) soundWidgetBtn.addEventListener('click', toggleAudio);

  /* ============================================================
     9. VISIT PLANNER & TICKET PRICE CALCULATOR
     ============================================================ */
  const ticketTierSelect = document.getElementById('ticket-tier-select');
  const qtyAdults = document.getElementById('qty-adults');
  const qtyYouth = document.getElementById('qty-youth');
  const qtyFree = document.getElementById('qty-free');
  const calcTotalPrice = document.getElementById('calc-total-price');

  const prices = {
    standard: { adult: 18, youth: 4, free: 0 },
    full: { adult: 24, youth: 4, free: 0 },
    night: { adult: 32, youth: 22, free: 0 }
  };

  function updateTicketPrice() {
    if (!calcTotalPrice || !ticketTierSelect) return;
    const tier = ticketTierSelect.value || 'standard';
    const tierPrice = prices[tier] || prices.standard;

    const adultsCount = parseInt(qtyAdults ? qtyAdults.value : 1, 10) || 0;
    const youthCount = parseInt(qtyYouth ? qtyYouth.value : 0, 10) || 0;
    const freeCount = parseInt(qtyFree ? qtyFree.value : 0, 10) || 0;

    const total = (adultsCount * tierPrice.adult) +
                  (youthCount * tierPrice.youth) +
                  (freeCount * tierPrice.free);

    calcTotalPrice.textContent = `€${total.toFixed(2)}`;
  }

  if (ticketTierSelect) ticketTierSelect.addEventListener('change', updateTicketPrice);
  if (qtyAdults) qtyAdults.addEventListener('input', updateTicketPrice);
  if (qtyYouth) qtyYouth.addEventListener('input', updateTicketPrice);
  if (qtyFree) qtyFree.addEventListener('input', updateTicketPrice);

  // Stepper buttons for tickets
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;
      const isInc = btn.classList.contains('qty-plus');
      let val = parseInt(input.value, 10) || 0;
      val = isInc ? val + 1 : Math.max(0, val - 1);
      input.value = val;
      updateTicketPrice();
    });
  });

  // Rome Local Clock
  function updateRomeClock() {
    const clockEl = document.getElementById('rome-live-time');
    if (!clockEl) return;
    const now = new Date();
    // Format to Europe/Rome timezone
    const romeTimeStr = now.toLocaleTimeString('en-GB', {
      timeZone: 'Europe/Rome',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    clockEl.textContent = `${romeTimeStr} CET`;
  }
  setInterval(updateRomeClock, 1000);
  updateRomeClock();

  /* ============================================================
     10. INTERACTIVE COLOSSEUM QUIZ
     ============================================================ */
  const quizQuestions = [
    {
      titleKey: 'q1Title',
      opts: ['q1_optA', 'q1_optB', 'q1_optC', 'q1_optD'],
      correct: 0,
      explKey: 'q1_expl'
    },
    {
      titleKey: 'q2Title',
      opts: ['q2_optA', 'q2_optB', 'q2_optC', 'q2_optD'],
      correct: 1,
      explKey: 'q2_expl'
    },
    {
      titleKey: 'q3Title',
      opts: ['q3_optA', 'q3_optB', 'q3_optC', 'q3_optD'],
      correct: 2,
      explKey: 'q3_expl'
    },
    {
      titleKey: 'q4Title',
      opts: ['q4_optA', 'q4_optB', 'q4_optC', 'q4_optD'],
      correct: 0,
      explKey: 'q4_expl'
    },
    {
      titleKey: 'q5Title',
      opts: ['q5_optA', 'q5_optB', 'q5_optC', 'q5_optD'],
      correct: 0,
      explKey: 'q5_expl'
    }
  ];

  let currentQuizIdx = 0;
  let quizScore = 0;
  let selectedOption = null;

  const quizQuestionEl = document.getElementById('quiz-question');
  const quizOptionsContainer = document.getElementById('quiz-options');
  const quizExplEl = document.getElementById('quiz-explanation');
  const quizSubmitBtn = document.getElementById('quiz-btn-submit');
  const quizNextBtn = document.getElementById('quiz-btn-next');
  const quizRestartBtn = document.getElementById('quiz-btn-restart');
  const quizProgressEl = document.getElementById('quiz-progress-text');
  const quizProgressBar = document.getElementById('quiz-progress-fill');
  const quizCardEl = document.getElementById('quiz-card');
  const quizResultEl = document.getElementById('quiz-result');
  const quizRankBadge = document.getElementById('quiz-rank-badge');
  const quizScoreDisplay = document.getElementById('quiz-score-display');

  function renderQuizQuestion() {
    if (!quizQuestionEl || !quizOptionsContainer) return;
    const q = quizQuestions[currentQuizIdx];
    const lang = window.currentLang ? window.currentLang() : 'en';
    const dict = window.translations ? window.translations[lang] : null;

    if (quizExplEl) {
      quizExplEl.style.display = 'none';
      quizExplEl.textContent = '';
      quizExplEl.className = 'quiz-explanation';
    }

    if (quizSubmitBtn) {
      quizSubmitBtn.style.display = 'inline-flex';
      quizSubmitBtn.disabled = true;
    }
    if (quizNextBtn) quizNextBtn.style.display = 'none';

    // Update Question Title
    const qTitle = (dict && dict[q.titleKey]) ? dict[q.titleKey] : q.titleKey;
    quizQuestionEl.textContent = qTitle;

    // Update Progress
    const prefix = (dict && dict.quizQuestionPrefix) ? dict.quizQuestionPrefix : 'Question';
    const ofWord = (dict && dict.quizOf) ? dict.quizOf : 'of';
    if (quizProgressEl) quizProgressEl.textContent = `${prefix} ${currentQuizIdx + 1} ${ofWord} ${quizQuestions.length}`;
    if (quizProgressBar) quizProgressBar.style.width = `${((currentQuizIdx) / quizQuestions.length) * 100}%`;

    // Render options
    quizOptionsContainer.innerHTML = '';
    selectedOption = null;

    q.opts.forEach((optKey, idx) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'quiz-option-btn';
      optBtn.type = 'button';
      optBtn.setAttribute('data-idx', idx);

      const optText = (dict && dict[optKey]) ? dict[optKey] : optKey;
      optBtn.innerHTML = `<span class="opt-marker">${String.fromCharCode(65 + idx)}</span> <span class="opt-text">${optText}</span>`;

      optBtn.addEventListener('click', () => {
        if (quizSubmitBtn && quizSubmitBtn.style.display === 'none') return; // already answered
        document.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
        optBtn.classList.add('selected');
        selectedOption = idx;
        if (quizSubmitBtn) quizSubmitBtn.disabled = false;
      });

      quizOptionsContainer.appendChild(optBtn);
    });
  }

  if (quizSubmitBtn) {
    quizSubmitBtn.addEventListener('click', () => {
      if (selectedOption === null) return;
      const q = quizQuestions[currentQuizIdx];
      const lang = window.currentLang ? window.currentLang() : 'en';
      const dict = window.translations ? window.translations[lang] : null;

      const isCorrect = (selectedOption === q.correct);
      if (isCorrect) quizScore++;

      // Highlight options
      const btns = document.querySelectorAll('.quiz-option-btn');
      btns.forEach((btn, idx) => {
        if (idx === q.correct) {
          btn.classList.add('correct');
        } else if (idx === selectedOption) {
          btn.classList.add('wrong');
        }
      });

      // Show explanation
      if (quizExplEl) {
        quizExplEl.style.display = 'block';
        quizExplEl.classList.add(isCorrect ? 'expl-correct' : 'expl-wrong');
        quizExplEl.textContent = (dict && dict[q.explKey]) ? dict[q.explKey] : q.explKey;
      }

      quizSubmitBtn.style.display = 'none';
      if (currentQuizIdx + 1 < quizQuestions.length) {
        if (quizNextBtn) quizNextBtn.style.display = 'inline-flex';
      } else {
        setTimeout(showQuizResults, 1400);
      }
    });
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener('click', () => {
      currentQuizIdx++;
      renderQuizQuestion();
    });
  }

  function showQuizResults() {
    if (quizCardEl) quizCardEl.style.display = 'none';
    if (quizResultEl) quizResultEl.style.display = 'block';
    if (quizProgressBar) quizProgressBar.style.width = '100%';

    const lang = window.currentLang ? window.currentLang() : 'en';
    const dict = window.translations ? window.translations[lang] : null;

    if (quizScoreDisplay) {
      quizScoreDisplay.textContent = `${quizScore} / ${quizQuestions.length}`;
    }

    let rankKey = 'rankGladiator';
    if (quizScore === 5) rankKey = 'rankEmperor';
    else if (quizScore >= 4) rankKey = 'rankSenator';
    else if (quizScore >= 2) rankKey = 'rankCenturion';

    if (quizRankBadge) {
      quizRankBadge.textContent = (dict && dict[rankKey]) ? dict[rankKey] : rankKey;
    }
  }

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener('click', () => {
      currentQuizIdx = 0;
      quizScore = 0;
      if (quizResultEl) quizResultEl.style.display = 'none';
      if (quizCardEl) quizCardEl.style.display = 'block';
      renderQuizQuestion();
    });
  }

  // Initial render
  renderQuizQuestion();

  // Listen to lang switch for live quiz update
  window.addEventListener('colosseum-lang-change', () => {
    if (quizCardEl && quizCardEl.style.display !== 'none') {
      renderQuizQuestion();
    }
    updateTicketPrice();
  });

  /* ============================================================
     11. QUICK SEARCH & JUMP MODAL (Ctrl/Cmd + K)
     ============================================================ */
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const openSearchBtns = document.querySelectorAll('.open-search-trigger');

  const searchableIndex = [
    { title: "Introduction to the Monument", cat: "History", href: "#introduction", tags: "vespasian titus flavian amphitheatre icon" },
    { title: "Two Thousand Years of History", cat: "History", href: "#history", tags: "domitian fire earthquake medieval unesco heritage" },
    { title: "Chronological Timeline", cat: "Timeline", href: "#timeline", tags: "dates 72 80 1349 collapse consecration" },
    { title: "Roman Engineering & Architecture", cat: "Architecture", href: "#architecture", tags: "travertine concrete arches vomitoria columns" },
    { title: "3D Interactive Colosseum Model", cat: "Experience", href: "#experience-3d", tags: "3d three camera simulation orbit floor" },
    { title: "Then & Now Comparison Slider", cat: "History", href: "#then-now", tags: "ancient reconstruction modern comparison photo" },
    { title: "Gladiatorial Classes & Culture", cat: "Gladiators", href: "#gladiators", tags: "murmillo thraex retiarius secutor weapons combat" },
    { title: "The Hypogeum Underground Labyrinth", cat: "Architecture", href: "#hypogeum", tags: "lifts cages underground tunnels machinery arena floor" },
    { title: "Imperial Visual Archive Gallery", cat: "Gallery", href: "#gallery", tags: "photos night sunset cavea arches photography" },
    { title: "Visitor Guide & Ticket Calculator", cat: "Visit", href: "#visit-tickets", tags: "tickets pricing hours entrance metro directions visit" },
    { title: "Interactive Knowledge Quiz", cat: "Quiz", href: "#quiz", tags: "trivia game questions rank score challenge" },
    { title: "Location & Archaeological Map", cat: "Location", href: "#rome-map", tags: "forum palatine arch constantine circus maximus rome" },
    { title: "Fascinating Imperial Facts", cat: "Facts", href: "#facts", tags: "seven wonders flora evacuation water battles naumachiae" },
    { title: "Myth vs. Historical Reality", cat: "Facts", href: "#myth-fact", tags: "myths Christians slaves thumbs down death rate" }
  ];

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.value = '';
      renderSearchResults('');
      setTimeout(() => searchInput.focus(), 100);
    }
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    const cleanQ = query.trim().toLowerCase();
    const matches = cleanQ === ''
      ? searchableIndex.slice(0, 6)
      : searchableIndex.filter(item =>
          item.title.toLowerCase().includes(cleanQ) ||
          item.cat.toLowerCase().includes(cleanQ) ||
          item.tags.toLowerCase().includes(cleanQ)
        );

    if (matches.length === 0) {
      const lang = window.currentLang ? window.currentLang() : 'en';
      const noResText = (window.translations && window.translations[lang] && window.translations[lang].searchNoResults)
        ? window.translations[lang].searchNoResults
        : 'No matching historical records found.';
      searchResults.innerHTML = `<div class="search-no-results">${noResText}</div>`;
      return;
    }

    searchResults.innerHTML = matches.map(m => `
      <a href="${m.href}" class="search-result-item">
        <div class="search-item-info">
          <span class="search-item-title">${m.title}</span>
          <span class="search-item-cat">${m.cat}</span>
        </div>
        <span class="search-item-arrow">→</span>
      </a>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(link => {
      link.addEventListener('click', closeSearch);
    });
  }

  openSearchBtns.forEach(btn => btn.addEventListener('click', openSearch));
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal || e.target.classList.contains('search-modal-backdrop')) {
        closeSearch();
      }
    });
  }

  // Keyboard shortcut Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal && searchModal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    } else if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  /* ============================================================
     12. SMOOTH ANCHOR LINK SCROLLING
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
