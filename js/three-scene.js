/* ============================================================
   THREE-SCENE.JS — High Performance Merged Procedural Colosseum 3D
   Optimized for 60 FPS, Low Memory & Multiple Camera/Lighting Modes
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('three-wrapper');
  const canvas = document.getElementById('three-canvas');
  const loading = document.getElementById('three-loading');

  if (!container || !canvas || typeof THREE === 'undefined') return;

  let scene, camera, renderer;
  let colosseumGroup, sunLight, ambientLight, fillLight, torchLights = [];
  let isInitialized = false;
  let isAnimating = false;
  let ecoMode = false;
  let currentLighting = 'dusk';

  // Camera presets
  const views = {
    exterior: { pos: new THREE.Vector3(230, 95, 170), look: new THREE.Vector3(0, 20, 0) },
    interior: { pos: new THREE.Vector3(15, 12, 10), look: new THREE.Vector3(65, 32, -15) },
    aerial: { pos: new THREE.Vector3(0, 260, 10), look: new THREE.Vector3(0, 0, 0) },
    emperor: { pos: new THREE.Vector3(0, 32, 65), look: new THREE.Vector3(0, 10, -10) },
    gladiator: { pos: new THREE.Vector3(-75, 8, 0), look: new THREE.Vector3(10, 12, 0) },
    reset: { pos: new THREE.Vector3(200, 110, 180), look: new THREE.Vector3(0, 18, 0) }
  };

  let targetCamPos = new THREE.Vector3().copy(views.reset.pos);
  let targetLookAt = new THREE.Vector3().copy(views.reset.look);
  let currentLookAt = new THREE.Vector3().copy(views.reset.look);

  // Interaction variables
  let isDragging = false;
  let previousMousePos = { x: 0, y: 0 };
  let spherical = { radius: 280, theta: 0.8, phi: 1.1 };
  let autoRotate = true;
  let autoRotateSpeed = 0.0015;

  // Intersection Observer for on-demand rendering (saves battery when out of view)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!isInitialized) {
          initThree();
          isInitialized = true;
        }
        isAnimating = true;
      } else {
        isAnimating = false;
      }
    });
  }, { threshold: 0.05 });

  observer.observe(container);

  function initThree() {
    // 1. Scene
    scene = new THREE.Scene();
    updateFogAndBg();

    // 2. Camera
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.copy(targetCamPos);

    // 3. Renderer with performance optimizations
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: window.devicePixelRatio < 2,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, ecoMode ? 1 : 1.75));
    renderer.shadowMap.enabled = !ecoMode;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. Lighting System
    setupLighting();

    // 5. Build Lightweight Merged Geometry Colosseum
    buildOptimizedColosseum();

    // 6. Ground & Arena Base
    buildSurroundings();

    // 7. Event Listeners
    setupControls();

    // Hide loading screen smoothly
    setTimeout(() => {
      if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => { loading.style.display = 'none'; }, 400);
      }
    }, 450);

    // Start render loop
    requestAnimationFrame(animate);
  }

  function updateFogAndBg() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    let bgColor;
    if (currentLighting === 'night') {
      bgColor = isDark ? 0x05060a : 0x101525;
    } else if (currentLighting === 'dusk') {
      bgColor = isDark ? 0x140d0a : 0xf4e6d4;
    } else {
      bgColor = isDark ? 0x100e0c : 0xf5eee4;
    }
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.0022);
  }

  function setupLighting() {
    ambientLight = new THREE.AmbientLight(0xffecd0, 0.5);
    scene.add(ambientLight);

    sunLight = new THREE.DirectionalLight(0xffddaa, 1.1);
    sunLight.position.set(130, 180, 80);
    sunLight.castShadow = !ecoMode;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 20;
    sunLight.shadow.camera.far = 450;
    sunLight.shadow.camera.left = -160;
    sunLight.shadow.camera.right = 160;
    sunLight.shadow.camera.top = 160;
    sunLight.shadow.camera.bottom = -160;
    scene.add(sunLight);

    fillLight = new THREE.DirectionalLight(0x7090b0, 0.4);
    fillLight.position.set(-120, 60, -100);
    scene.add(fillLight);

    applyLightingPreset(currentLighting);
  }

  function applyLightingPreset(mode) {
    currentLighting = mode;
    updateFogAndBg();

    if (mode === 'day') {
      ambientLight.color.setHex(0xffffff);
      ambientLight.intensity = 0.65;
      sunLight.color.setHex(0xfffaed);
      sunLight.intensity = 1.3;
      sunLight.position.set(100, 220, 70);
      fillLight.color.setHex(0x90b0d0);
      fillLight.intensity = 0.45;
    } else if (mode === 'dusk') {
      ambientLight.color.setHex(0xffd4aa);
      ambientLight.intensity = 0.5;
      sunLight.color.setHex(0xff9840);
      sunLight.intensity = 1.25;
      sunLight.position.set(160, 70, 90);
      fillLight.color.setHex(0x5a4a75);
      fillLight.intensity = 0.5;
    } else if (mode === 'night') {
      ambientLight.color.setHex(0x1a2540);
      ambientLight.intensity = 0.35;
      sunLight.color.setHex(0x355080);
      sunLight.intensity = 0.4;
      sunLight.position.set(-80, 120, -60);
      fillLight.color.setHex(0xd4af37);
      fillLight.intensity = 0.3;
    }
  }

  /* --- Optimized Procedural Colosseum Builder --- */
  function buildOptimizedColosseum() {
    colosseumGroup = new THREE.Group();

    // High performance PBR materials
    const travertineMat = new THREE.MeshStandardMaterial({
      color: 0xdecbb4,
      roughness: 0.85,
      metalness: 0.08,
      flatShading: true
    });

    const arenaSandMat = new THREE.MeshStandardMaterial({
      color: 0xc49a60,
      roughness: 0.95,
      metalness: 0.0
    });

    const hypogeumStoneMat = new THREE.MeshStandardMaterial({
      color: 0x4a3b2c,
      roughness: 0.9,
      metalness: 0.1
    });

    // Outer ellipse dimensions
    const outA = 94; // Semi-major outer
    const outB = 78; // Semi-minor outer
    const inA = 44;  // Arena semi-major
    const inB = 28;  // Arena semi-minor
    const height = 48;
    const tiers = 4;
    const tierH = height / tiers;
    const segments = 64; // Optimized segment count for smoothness & lightness

    // We build the outer facade using merged BufferGeometry buffers
    const facadePositions = [];
    const facadeNormals = [];

    function addBox(x, y, z, w, h, d, ry) {
      const hw = w / 2, hh = h / 2, hd = d / 2;
      const cos = Math.cos(ry);
      const sin = Math.sin(ry);

      // Local box vertices
      const localVerts = [
        // Front
        [-hw, -hh,  hd], [ hw, -hh,  hd], [ hw,  hh,  hd],
        [-hw, -hh,  hd], [ hw,  hh,  hd], [-hw,  hh,  hd],
        // Back
        [ hw, -hh, -hd], [-hw, -hh, -hd], [-hw,  hh, -hd],
        [ hw, -hh, -hd], [-hw,  hh, -hd], [ hw,  hh, -hd],
        // Top
        [-hw,  hh,  hd], [ hw,  hh,  hd], [ hw,  hh, -hd],
        [-hw,  hh,  hd], [ hw,  hh, -hd], [-hw,  hh, -hd],
        // Bottom
        [-hw, -hh, -hd], [ hw, -hh, -hd], [ hw, -hh,  hd],
        [-hw, -hh, -hd], [ hw, -hh,  hd], [-hw, -hh,  hd],
        // Right
        [ hw, -hh,  hd], [ hw, -hh, -hd], [ hw,  hh, -hd],
        [ hw, -hh,  hd], [ hw,  hh, -hd], [ hw,  hh,  hd],
        // Left
        [-hw, -hh, -hd], [-hw, -hh,  hd], [-hw,  hh,  hd],
        [-hw, -hh, -hd], [-hw,  hh,  hd], [-hw,  hh, -hd]
      ];

      for (let i = 0; i < localVerts.length; i++) {
        const lv = localVerts[i];
        // Rotate around Y
        const rx = lv[0] * cos - lv[2] * sin;
        const rz = lv[0] * sin + lv[2] * cos;
        // Translate
        facadePositions.push(rx + x, lv[1] + y, rz + z);
      }
    }

    // Build the outer wall arcades (with historical south wall break)
    for (let t = 0; t < tiers; t++) {
      const yBase = t * tierH;
      const curA = outA - (t * 1.5);
      const curB = outB - (t * 1.5);
      const thickness = 10 - (t * 1.2);

      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        // South collapse simulation: angle between ~3.3 and 5.2 radians
        const isCollapsed = (angle > 3.3 && angle < 5.3) && (t > 1 || (t === 1 && angle > 3.7 && angle < 4.9));
        if (isCollapsed) continue;

        const x = Math.cos(angle) * curA;
        const z = Math.sin(angle) * curB;
        const dx = -curA * Math.sin(angle);
        const dz = curB * Math.cos(angle);
        const rotY = Math.atan2(dx, dz);

        if (t < 3) {
          // Pillars & Arch entablature
          addBox(x, yBase + tierH * 0.45, z, 3.2, tierH * 0.9, thickness, rotY);

          // Arch lintel connecting next pillar
          const nextAngle = ((i + 0.5) / segments) * Math.PI * 2;
          const nx = Math.cos(nextAngle) * curA;
          const nz = Math.sin(nextAngle) * curB;
          const ndx = -curA * Math.sin(nextAngle);
          const ndz = curB * Math.cos(nextAngle);
          const nRotY = Math.atan2(ndx, ndz);
          addBox(nx, yBase + tierH * 0.9, nz, 6.8, tierH * 0.22, thickness * 0.95, nRotY);
        } else {
          // Attic tier (solid facade with classical pilasters)
          addBox(x, yBase + tierH * 0.5, z, 7.5, tierH, thickness * 0.85, rotY);
        }
      }
    }

    // Create single merged Facade mesh
    const facadeGeo = new THREE.BufferGeometry();
    facadeGeo.setAttribute('position', new THREE.Float32BufferAttribute(facadePositions, 3));
    facadeGeo.computeVertexNormals();

    const facadeMesh = new THREE.Mesh(facadeGeo, travertineMat);
    facadeMesh.castShadow = !ecoMode;
    facadeMesh.receiveShadow = !ecoMode;
    colosseumGroup.add(facadeMesh);

    // Seating Tiers (Cavea) - Single Elliptical Stepped Mesh
    const caveaVerts = [];
    const caveaSegments = 48;
    const caveaSteps = 4;

    for (let s = 0; s < caveaSteps; s++) {
      const stepFraction = s / caveaSteps;
      const nextFraction = (s + 1) / caveaSteps;

      const rInA = inA + (outA * 0.85 - inA) * stepFraction;
      const rInB = inB + (outB * 0.85 - inB) * stepFraction;
      const rOutA = inA + (outA * 0.85 - inA) * nextFraction;
      const rOutB = inB + (outB * 0.85 - inB) * nextFraction;

      const y1 = 4 + (height * 0.72) * stepFraction;
      const y2 = 4 + (height * 0.72) * nextFraction;

      for (let i = 0; i < caveaSegments; i++) {
        const a1 = (i / caveaSegments) * Math.PI * 2;
        const a2 = ((i + 1) / caveaSegments) * Math.PI * 2;

        // Skip south collapse zone on upper tiers
        if ((a1 > 3.4 && a1 < 5.2) && s > 1) continue;

        const x1 = Math.cos(a1) * rInA,  z1 = Math.sin(a1) * rInB;
        const x2 = Math.cos(a2) * rInA,  z2 = Math.sin(a2) * rInB;
        const x3 = Math.cos(a1) * rOutA, z3 = Math.sin(a1) * rOutB;
        const x4 = Math.cos(a2) * rOutA, z4 = Math.sin(a2) * rOutB;

        // Quad triangles
        caveaVerts.push(x1, y1, z1,  x2, y1, z2,  x3, y2, z3);
        caveaVerts.push(x2, y1, z2,  x4, y2, z4,  x3, y2, z3);
      }
    }

    const caveaGeo = new THREE.BufferGeometry();
    caveaGeo.setAttribute('position', new THREE.Float32BufferAttribute(caveaVerts, 3));
    caveaGeo.computeVertexNormals();

    const caveaMesh = new THREE.Mesh(caveaGeo, travertineMat);
    caveaMesh.castShadow = !ecoMode;
    caveaMesh.receiveShadow = !ecoMode;
    colosseumGroup.add(caveaMesh);

    // Arena Floor & Hypogeum Grid
    // 1. Wood & Sand Arena Floor (semi-ellipse showing exposed hypogeum)
    const arenaFloorGeo = new THREE.RingGeometry(0.1, 1, 32, 1);
    const arenaMesh = new THREE.Mesh(arenaFloorGeo, arenaSandMat);
    arenaMesh.scale.set(inA * 0.95, inB * 0.95, 1);
    arenaMesh.rotation.x = -Math.PI / 2;
    arenaMesh.position.y = 3.6;
    arenaMesh.receiveShadow = !ecoMode;
    colosseumGroup.add(arenaMesh);

    // 2. Hypogeum exposed brick walls (in the arena center)
    const hypoWallsGeo = new THREE.BufferGeometry();
    const hypoVerts = [];

    // Hypogeum central corridor & chambers
    for (let c = -4; c <= 4; c++) {
      const zOffset = c * 5;
      const xLen = Math.sqrt(Math.max(0, 1 - Math.pow(zOffset / inB, 2))) * inA * 0.75;
      if (xLen > 6) {
        // Horizontal wall
        const yTop = 3.5, yBot = 0;
        hypoVerts.push(-xLen, yBot, zOffset,   xLen, yBot, zOffset,   xLen, yTop, zOffset);
        hypoVerts.push(-xLen, yBot, zOffset,   xLen, yTop, zOffset,  -xLen, yTop, zOffset);
      }
    }

    hypoWallsGeo.setAttribute('position', new THREE.Float32BufferAttribute(hypoVerts, 3));
    hypoWallsGeo.computeVertexNormals();

    const hypoMesh = new THREE.Mesh(hypoWallsGeo, hypogeumStoneMat);
    colosseumGroup.add(hypoMesh);

    scene.add(colosseumGroup);
  }

  function buildSurroundings() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const groundGeo = new THREE.PlaneGeometry(800, 800);
    const groundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x120f0c : 0xddcfbe,
      roughness: 0.92,
      metalness: 0.05
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    ground.receiveShadow = !ecoMode;
    scene.add(ground);
  }

  function setView(viewName) {
    if (!views[viewName]) return;
    const v = views[viewName];
    targetCamPos.copy(v.pos);
    targetLookAt.copy(v.look);
    autoRotate = false; // Pause auto-rotation when user selects specific viewpoint
  }

  function setupControls() {
    // Buttons
    const btnExt = document.getElementById('btn-exterior');
    const btnInt = document.getElementById('btn-interior');
    const btnAer = document.getElementById('btn-aerial');
    const btnEmp = document.getElementById('btn-emperor');
    const btnGlad = document.getElementById('btn-gladiator');
    const btnRst = document.getElementById('btn-reset');

    if (btnExt) btnExt.addEventListener('click', () => setView('exterior'));
    if (btnInt) btnInt.addEventListener('click', () => setView('interior'));
    if (btnAer) btnAer.addEventListener('click', () => setView('aerial'));
    if (btnEmp) btnEmp.addEventListener('click', () => setView('emperor'));
    if (btnGlad) btnGlad.addEventListener('click', () => setView('gladiator'));
    if (btnRst) btnRst.addEventListener('click', () => {
      setView('reset');
      autoRotate = true;
    });

    // Lighting buttons
    const lightBtns = document.querySelectorAll('.three-light-btn');
    lightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        lightBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-lighting');
        applyLightingPreset(mode);
      });
    });

    // Eco Mode Toggle
    const ecoBtn = document.getElementById('btn-eco-toggle');
    if (ecoBtn) {
      ecoBtn.addEventListener('click', () => {
        ecoMode = !ecoMode;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, ecoMode ? 1 : 1.75));
        renderer.shadowMap.enabled = !ecoMode;
        ecoBtn.classList.toggle('active', ecoMode);
        const lang = window.currentLang ? window.currentLang() : 'en';
        const key = ecoMode ? 'threeEcoOn' : 'threeEcoOff';
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
          ecoBtn.textContent = window.translations[lang][key];
        } else {
          ecoBtn.textContent = ecoMode ? 'Eco: ON' : 'Eco: OFF';
        }
      });
    }

    // Mouse Controls
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      autoRotate = false;
      previousMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePos.x;
      const deltaY = e.clientY - previousMousePos.y;

      spherical.theta -= deltaX * 0.006;
      spherical.phi = Math.max(0.2, Math.min(Math.PI / 2 - 0.05, spherical.phi + deltaY * 0.006));

      updateCameraFromSpherical();
      previousMousePos = { x: e.clientX, y: e.clientY };
    });

    // Mouse Wheel Zoom
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      autoRotate = false;
      spherical.radius = Math.max(40, Math.min(450, spherical.radius + e.deltaY * 0.3));
      updateCameraFromSpherical();
    }, { passive: false });

    // Touch Controls
    let touchDist = 0;
    container.addEventListener('touchstart', (e) => {
      autoRotate = false;
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        touchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && isDragging) {
        const deltaX = e.touches[0].clientX - previousMousePos.x;
        const deltaY = e.touches[0].clientY - previousMousePos.y;
        spherical.theta -= deltaX * 0.008;
        spherical.phi = Math.max(0.2, Math.min(Math.PI / 2 - 0.05, spherical.phi + deltaY * 0.008));
        updateCameraFromSpherical();
        previousMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        const newDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = touchDist - newDist;
        spherical.radius = Math.max(40, Math.min(450, spherical.radius + diff * 0.5));
        updateCameraFromSpherical();
        touchDist = newDist;
      }
    }, { passive: true });

    container.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('resize', onResize);

    // Theme Switch Observer
    const themeObserver = new MutationObserver(() => {
      updateFogAndBg();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  function updateCameraFromSpherical() {
    targetCamPos.x = targetLookAt.x + spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
    targetCamPos.y = targetLookAt.y + spherical.radius * Math.cos(spherical.phi);
    targetCamPos.z = targetLookAt.z + spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
  }

  function onResize() {
    if (!container || !camera || !renderer) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  /* --- Main Animation Loop --- */
  function animate() {
    if (!isAnimating) {
      requestAnimationFrame(animate);
      return;
    }

    if (autoRotate && !isDragging) {
      spherical.theta += autoRotateSpeed;
      updateCameraFromSpherical();
    }

    // Smooth camera damping towards target
    camera.position.lerp(targetCamPos, 0.06);
    currentLookAt.lerp(targetLookAt, 0.06);
    camera.lookAt(currentLookAt);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
});
