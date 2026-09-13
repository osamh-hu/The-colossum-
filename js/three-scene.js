/* ============================================================
   THREE-SCENE.JS — Procedural Colosseum 3D Model
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('three-wrapper');
  const canvas = document.getElementById('three-canvas');
  const loading = document.getElementById('three-loading');
  const btnExterior = document.getElementById('btn-exterior');
  const btnInterior = document.getElementById('btn-interior');
  const btnAerial = document.getElementById('btn-aerial');
  const btnReset = document.getElementById('btn-reset');
  
  if (!container || !canvas || typeof THREE === 'undefined') return;

  // Intersection Observer to only load/animate when visible
  let isInitialized = false;
  let isAnimating = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!isInitialized) {
          initThreeJS();
          isInitialized = true;
        }
        isAnimating = true;
      } else {
        isAnimating = false;
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(container);

  let scene, camera, renderer, colosseumGroup;
  
  // View positions
  const views = {
    exterior: { pos: new THREE.Vector3(250, 50, 150), look: new THREE.Vector3(0, 20, 0) },
    interior: { pos: new THREE.Vector3(0, 15, 0), look: new THREE.Vector3(80, 40, 0) },
    aerial: { pos: new THREE.Vector3(0, 250, 0), look: new THREE.Vector3(0, 0, 0) },
    reset: { pos: new THREE.Vector3(180, 120, 180), look: new THREE.Vector3(0, 0, 0) }
  };
  
  let targetCameraPos = new THREE.Vector3().copy(views.reset.pos);
  let targetLookAt = new THREE.Vector3().copy(views.reset.look);
  let currentLookAt = new THREE.Vector3().copy(views.reset.look);

  // Drag interaction variables
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let rotationVelocity = { x: -0.002, y: 0 }; // Initial slow rotation

  function initThreeJS() {
    // 1. Setup Scene
    scene = new THREE.Scene();
    // Use the CSS variable for background
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    scene.background = new THREE.Color(isDark ? 0x0f0c09 : 0xf2ede4);
    scene.fog = new THREE.FogExp2(isDark ? 0x0f0c09 : 0xf2ede4, 0.002);

    // 2. Setup Camera
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.copy(targetCameraPos);

    // 3. Setup Renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap for performance
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.4 : 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff0dd, isDark ? 0.8 : 1.2);
    sunLight.position.set(100, 150, 50);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 400;
    sunLight.shadow.camera.left = -150;
    sunLight.shadow.camera.right = 150;
    sunLight.shadow.camera.top = 150;
    sunLight.shadow.camera.bottom = -150;
    scene.add(sunLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0xaaccff, 0.3);
    fillLight.position.set(-100, 50, -100);
    scene.add(fillLight);

    // 5. Build Procedural Colosseum
    buildProceduralColosseum();

    // 6. Ground
    const groundGeo = new THREE.PlaneGeometry(1000, 1000);
    const groundMat = new THREE.MeshStandardMaterial({ 
      color: isDark ? 0x1a1510 : 0xe0d6c8,
      roughness: 0.9,
      metalness: 0.1
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // 7. Event Listeners
    window.addEventListener('resize', onWindowResize);
    
    // Mouse/Touch controls
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onMouseWheel, { passive: false });
    
    container.addEventListener('touchstart', (e) => {
      onMouseDown({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
    }, { passive: true });
    container.addEventListener('touchmove', (e) => {
      onMouseMove({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
    }, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // View buttons
    if (btnExterior) btnExterior.addEventListener('click', () => setView('exterior'));
    if (btnInterior) btnInterior.addEventListener('click', () => setView('interior'));
    if (btnAerial) btnAerial.addEventListener('click', () => setView('aerial'));
    if (btnReset) btnReset.addEventListener('click', () => setView('reset'));

    // Theme change listener
    const themeObserver = new MutationObserver(() => {
      const isD = document.documentElement.getAttribute('data-theme') !== 'light';
      scene.background.setHex(isD ? 0x0f0c09 : 0xf2ede4);
      scene.fog.color.setHex(isD ? 0x0f0c09 : 0xf2ede4);
      ambientLight.intensity = isD ? 0.4 : 0.6;
      sunLight.intensity = isD ? 0.8 : 1.2;
      groundMat.color.setHex(isD ? 0x1a1510 : 0xe0d6c8);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Hide loading
    setTimeout(() => {
      if (loading) loading.style.opacity = '0';
      setTimeout(() => { if (loading) loading.style.display = 'none'; }, 500);
    }, 1000);

    // Start render loop
    animate();
  }

  function buildProceduralColosseum() {
    colosseumGroup = new THREE.Group();
    
    // Materials
    const travertineMat = new THREE.MeshStandardMaterial({
      color: 0xd4c5b0, // Warm stone color
      roughness: 0.8,
      metalness: 0.1
    });
    
    const arenaMat = new THREE.MeshStandardMaterial({
      color: 0x8b7355, // Sand/wood color
      roughness: 1.0,
      metalness: 0.0
    });

    // Dimensions (scaled down for WebGL: 1 unit approx 1 meter)
    const outA = 94; // semi-major axis outer
    const outB = 78; // semi-minor axis outer
    const inA = 43;  // arena semi-major
    const inB = 27;  // arena semi-minor
    const height = 48;
    
    // Number of arches per tier
    const segments = 80;

    // Build the outer wall (Tier 1-3 arches, Tier 4 solid)
    const tiers = 4;
    const tierHeight = height / tiers;
    
    for (let t = 0; t < tiers; t++) {
      const yBase = t * tierHeight;
      
      // Calculate thickness (tapers slightly towards top)
      const thickness = 15 - (t * 2);
      
      for (let i = 0; i < segments; i++) {
        // South wall collapse simulation (remove segments)
        // Keep segments between angles 0 to PI and 1.5PI to 2PI roughly
        const angle = (i / segments) * Math.PI * 2;
        const isCollapsed = (angle > Math.PI && angle < 1.7 * Math.PI) && (t > 1 || (t > 0 && angle > 1.2*Math.PI && angle < 1.5*Math.PI));
        
        if (isCollapsed) continue;

        // Current ellipse radius at this angle
        const currentOutA = outA - (t * 1.5);
        const currentOutB = outB - (t * 1.5);
        
        const x = Math.cos(angle) * currentOutA;
        const z = Math.sin(angle) * currentOutB;
        
        // Calculate tangent for rotation
        const dx = -currentOutA * Math.sin(angle);
        const dz = currentOutB * Math.cos(angle);
        const rotY = Math.atan2(dx, dz); // Perpendicular to tangent
        
        if (t < 3) {
          // Arched tiers
          // Pillars
          const pillarGeo = new THREE.BoxGeometry(2, tierHeight, thickness);
          const pillar = new THREE.Mesh(pillarGeo, travertineMat);
          pillar.position.set(x, yBase + tierHeight/2, z);
          pillar.rotation.y = rotY;
          pillar.castShadow = true;
          pillar.receiveShadow = true;
          colosseumGroup.add(pillar);
          
          // Arch top (simplified as block)
          const archTopGeo = new THREE.BoxGeometry(6, tierHeight * 0.3, thickness);
          const archTop = new THREE.Mesh(archTopGeo, travertineMat);
          
          // Position between pillars
          const nextAngle = ((i + 0.5) / segments) * Math.PI * 2;
          const nx = Math.cos(nextAngle) * currentOutA;
          const nz = Math.sin(nextAngle) * currentOutB;
          const ndx = -currentOutA * Math.sin(nextAngle);
          const ndz = currentOutB * Math.cos(nextAngle);
          const nRotY = Math.atan2(ndx, ndz);
          
          archTop.position.set(nx, yBase + tierHeight - (tierHeight * 0.15), nz);
          archTop.rotation.y = nRotY;
          archTop.castShadow = true;
          archTop.receiveShadow = true;
          
          // Only add if not the last segment before collapse
          if (!isCollapsed) {
             colosseumGroup.add(archTop);
          }
        } else {
          // Attic (solid top tier with small windows)
          const wallW = Math.sqrt(Math.pow(Math.cos(angle)*currentOutA - Math.cos(angle+0.1)*currentOutA, 2) + 
                                  Math.pow(Math.sin(angle)*currentOutB - Math.sin(angle+0.1)*currentOutB, 2));
          
          const atticGeo = new THREE.BoxGeometry(wallW * 1.1, tierHeight, thickness);
          const attic = new THREE.Mesh(atticGeo, travertineMat);
          attic.position.set(x, yBase + tierHeight/2, z);
          attic.rotation.y = rotY;
          attic.castShadow = true;
          attic.receiveShadow = true;
          colosseumGroup.add(attic);
        }
      }
    }

    // Cavea (Seating) - Simplified as sloped geometry
    const caveaSegments = 64;
    const caveaGeo = new THREE.BufferGeometry();
    
    // We'll create a sloped ring that forms an ellipse
    const vertices = [];
    const indices = [];
    const normals = [];
    
    for (let i = 0; i <= caveaSegments; i++) {
      const angle = (i / caveaSegments) * Math.PI * 2;
      
      // Bottom edge (at arena)
      const xIn = Math.cos(angle) * inA;
      const zIn = Math.sin(angle) * inB;
      const yIn = 4; // Podium height
      
      // Top edge (at outer wall)
      // Account for collapse on south side
      const isCollapsed = (angle > Math.PI && angle < 1.7 * Math.PI);
      const caveaHeight = isCollapsed ? 12 : height * 0.8;
      const caveaOutA = isCollapsed ? outA * 0.6 : outA * 0.9;
      const caveaOutB = isCollapsed ? outB * 0.6 : outB * 0.9;
      
      const xOut = Math.cos(angle) * caveaOutA;
      const zOut = Math.sin(angle) * caveaOutB;
      const yOut = caveaHeight;
      
      vertices.push(xIn, yIn, zIn);
      vertices.push(xOut, yOut, zOut);
      
      // Calculate normals (simplified pointing up/inward)
      normals.push(0, 1, 0);
      normals.push(0, 1, 0);
      
      if (i < caveaSegments) {
        const v1 = i * 2;
        const v2 = i * 2 + 1;
        const v3 = (i + 1) * 2;
        const v4 = (i + 1) * 2 + 1;
        
        indices.push(v1, v2, v3);
        indices.push(v2, v4, v3);
      }
    }
    
    caveaGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    caveaGeo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    caveaGeo.setIndex(indices);
    caveaGeo.computeVertexNormals();
    
    const caveaMat = new THREE.MeshStandardMaterial({
      color: 0xa09585, // Slightly darker/grayer stone
      roughness: 0.9,
      side: THREE.DoubleSide
    });
    
    const cavea = new THREE.Mesh(caveaGeo, caveaMat);
    cavea.castShadow = true;
    cavea.receiveShadow = true;
    colosseumGroup.add(cavea);

    // Arena Floor
    const arenaShape = new THREE.Shape();
    arenaShape.ellipse(0, 0, inA, inB, 0, Math.PI * 2, false, 0);
    const arenaGeo = new THREE.ShapeGeometry(arenaShape);
    const arena = new THREE.Mesh(arenaGeo, arenaMat);
    arena.rotation.x = -Math.PI / 2;
    arena.position.y = 0.5; // Slightly above ground
    arena.receiveShadow = true;
    colosseumGroup.add(arena);
    
    // Add Hypogeum ruins (partially exposed)
    // Cut a hole in the arena floor
    
    scene.add(colosseumGroup);
  }

  function setView(viewName) {
    if (views[viewName]) {
      targetCameraPos.copy(views[viewName].pos);
      targetLookAt.copy(views[viewName].look);
      
      // Reset rotation velocity when changing views
      if (viewName !== 'reset') {
        rotationVelocity = { x: 0, y: 0 };
      } else {
        rotationVelocity = { x: -0.002, y: 0 };
      }
    }
  }

  function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  function onMouseDown(e) {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
    // Stop automatic rotation on manual drag
    rotationVelocity = { x: 0, y: 0 };
    container.style.cursor = 'grabbing';
  }

  function onMouseMove(e) {
    if (!isDragging) return;

    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    };

    // Orbit controls logic around targetLookAt
    const radius = camera.position.distanceTo(targetLookAt);
    
    // Calculate polar coordinates
    let theta = Math.atan2(camera.position.x - targetLookAt.x, camera.position.z - targetLookAt.z);
    let phi = Math.acos(Math.max(-1, Math.min(1, (camera.position.y - targetLookAt.y) / radius)));
    
    // Apply deltas
    theta -= deltaMove.x * 0.005;
    phi -= deltaMove.y * 0.005;
    
    // Clamp vertical angle to prevent going below ground or over the top
    phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, phi));
    
    // Convert back to Cartesian
    targetCameraPos.x = targetLookAt.x + radius * Math.sin(phi) * Math.sin(theta);
    targetCameraPos.y = targetLookAt.y + radius * Math.cos(phi);
    targetCameraPos.z = targetLookAt.z + radius * Math.sin(phi) * Math.cos(theta);

    previousMousePosition = { x: e.clientX, y: e.clientY };
    
    // Set a small residual velocity for inertia
    rotationVelocity.x = -deltaMove.x * 0.0005;
  }

  function onMouseUp() {
    isDragging = false;
    container.style.cursor = 'grab';
  }

  function onMouseWheel(e) {
    e.preventDefault(); // Prevent page scroll
    
    const zoomSpeed = 0.5;
    const direction = new THREE.Vector3().subVectors(targetLookAt, targetCameraPos).normalize();
    const distance = targetCameraPos.distanceTo(targetLookAt);
    
    // Calculate new distance
    let newDistance = distance + (e.deltaY * zoomSpeed);
    
    // Clamp zoom
    newDistance = Math.max(30, Math.min(newDistance, 500));
    
    // Apply new position
    targetCameraPos.copy(targetLookAt).sub(direction.multiplyScalar(newDistance));
  }

  function animate() {
    requestAnimationFrame(animate);
    
    if (!isAnimating || !scene) return;

    // Smooth camera interpolation (Lerp)
    camera.position.lerp(targetCameraPos, 0.05);
    currentLookAt.lerp(targetLookAt, 0.05);
    camera.lookAt(currentLookAt);

    // Apply auto-rotation/inertia if not dragging
    if (!isDragging && (Math.abs(rotationVelocity.x) > 0.0001)) {
      const radius = camera.position.distanceTo(targetLookAt);
      let theta = Math.atan2(camera.position.x - targetLookAt.x, camera.position.z - targetLookAt.z);
      const phi = Math.acos(Math.max(-1, Math.min(1, (camera.position.y - targetLookAt.y) / radius)));
      
      theta += rotationVelocity.x;
      
      targetCameraPos.x = targetLookAt.x + radius * Math.sin(phi) * Math.sin(theta);
      targetCameraPos.z = targetLookAt.z + radius * Math.sin(phi) * Math.cos(theta);
      
      // Dampen velocity over time if it was from manual drag
      if (rotationVelocity.x > 0.002 || rotationVelocity.x < -0.002) {
         rotationVelocity.x *= 0.95;
      }
    }

    renderer.render(scene, camera);
  }
});
