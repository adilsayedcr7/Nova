/* ==========================================================================
   NovaDirect — Modern Interactive Application Script
   Enhanced Canvas Engine, ScrollSpy, Dynamic UI Mockups & Toast System
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initRadiatingNetworkCanvas();
  initStickyHeader();
  initScrollSpyRail();
  initInteractiveMockups();
  initModalFormEngine();
  initNavigationRouter();
  initSectionSnapScroll();
});

/* ==========================================================================
   1. Radiating Network Canvas Engine (Enhanced Interactive Parallax)
   ========================================================================== */
function initRadiatingNetworkCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let nodes = [];
  let mouse = { x: -1000, y: -1000 };
  let animFrameId;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    createNetworkNodes();
  }

  function createNetworkNodes() {
    nodes = [];

    // Root Node (Sponsor / Organization Leader) - near headline
    const rootNode = {
      x: width * 0.16,
      y: height * 0.35,
      baseX: width * 0.16,
      baseY: height * 0.35,
      radius: 9,
      color: '#60A5FA',
      pulse: 0,
      isRoot: true,
      connections: []
    };
    nodes.push(rootNode);

    // Level 1: 3 Primary Frontline Directors (branching upper-right, right, lower-right)
    const level1Specs = [
      { dx: 220, dy: -110 }, // Top branch
      { dx: 280, dy: 20 },   // Middle branch
      { dx: 210, dy: 140 }   // Bottom branch
    ];

    level1Specs.forEach((spec, l1Idx) => {
      const l1Node = {
        x: rootNode.x + spec.dx,
        y: rootNode.y + spec.dy,
        baseX: rootNode.x + spec.dx,
        baseY: rootNode.y + spec.dy,
        radius: 6,
        color: '#2563EB',
        pulse: Math.random() * Math.PI,
        isLevel1: true,
        connections: [0] // connects to Root (0)
      };
      const l1GlobalIdx = nodes.length;
      nodes.push(l1Node);

      // Level 2: Downline Leaders (2-3 sub-branches per Level 1 director)
      const l2Count = l1Idx === 1 ? 3 : 2;
      const fanAngleStart = l1Idx === 0 ? -Math.PI * 0.25 : (l1Idx === 1 ? -Math.PI * 0.15 : 0.05);
      const fanAngleStep = 0.28;

      for (let j = 0; j < l2Count; j++) {
        const angle = fanAngleStart + j * fanAngleStep;
        const dist = 110 + (j % 2) * 20;
        const l2Node = {
          x: l1Node.x + Math.cos(angle) * dist,
          y: l1Node.y + Math.sin(angle) * dist,
          baseX: l1Node.x + Math.cos(angle) * dist,
          baseY: l1Node.y + Math.sin(angle) * dist,
          radius: 4.5,
          color: '#60A5FA',
          isLevel2: true,
          connections: [l1GlobalIdx] // connects to parent L1 node
        };
        const l2GlobalIdx = nodes.length;
        nodes.push(l2Node);

        // Level 3: Leaf Reps (2 small nodes per Level 2 downline leader)
        for (let k = 0; k < 2; k++) {
          const leafAngle = angle + (k === 0 ? -0.22 : 0.22);
          const leafDist = 65 + (k % 2) * 15;
          nodes.push({
            x: l2Node.x + Math.cos(leafAngle) * leafDist,
            y: l2Node.y + Math.sin(leafAngle) * leafDist,
            baseX: l2Node.x + Math.cos(leafAngle) * leafDist,
            baseY: l2Node.y + Math.sin(leafAngle) * leafDist,
            radius: 3,
            color: '#B8B3D3',
            isLeaf: true,
            connections: [l2GlobalIdx] // connects to parent L2 node
          });
        }
      }
    });
  }

  let progress = 0;
  function draw() {
    ctx.clearRect(0, 0, width, height);

    if (progress < 1) {
      progress += 0.015;
    }

    // Mouse influence parallax
    nodes.forEach(node => {
      if (!node.isRoot) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          node.x = node.baseX - (dx / dist) * force * 15;
          node.y = node.baseY - (dy / dist) * force * 15;
        } else {
          node.x += (node.baseX - node.x) * 0.05;
          node.y += (node.baseY - node.y) * 0.05;
        }
      }
    });

    // Draw connecting branching tree lines
    nodes.forEach(node => {
      node.connections.forEach(targetIdx => {
        const targetNode = nodes[targetIdx];
        ctx.beginPath();
        ctx.moveTo(targetNode.x, targetNode.y); // Draw from parent to child

        const curX = targetNode.x + (node.x - targetNode.x) * Math.min(progress, 1);
        const curY = targetNode.y + (node.y - targetNode.y) * Math.min(progress, 1);
        ctx.lineTo(curX, curY);

        const gradient = ctx.createLinearGradient(targetNode.x, targetNode.y, node.x, node.y);
        if (targetNode.isRoot) {
          gradient.addColorStop(0, 'rgba(96, 165, 250, 0.7)');
          gradient.addColorStop(1, 'rgba(37, 99, 235, 0.5)');
          ctx.lineWidth = 2;
        } else if (targetNode.isLevel1) {
          gradient.addColorStop(0, 'rgba(37, 99, 235, 0.5)');
          gradient.addColorStop(1, 'rgba(96, 165, 250, 0.35)');
          ctx.lineWidth = 1.5;
        } else {
          gradient.addColorStop(0, 'rgba(96, 165, 250, 0.35)');
          gradient.addColorStop(1, 'rgba(184, 179, 211, 0.15)');
          ctx.lineWidth = 1;
        }

        ctx.strokeStyle = gradient;
        ctx.stroke();
      });
    });

    // Draw nodes & glowing pulses (RESERVED FOR HERO CANVAS NODES)
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();

      // Root Glowing Pulsing Effect
      if (node.isRoot) {
        node.pulse += 0.025;
        const pulseRadius = node.radius + Math.sin(node.pulse) * 10 + 6;
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0, pulseRadius), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.45)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Level 1 Nodes Subtle Pulse
      if (node.isLevel1) {
        node.pulse += 0.03;
        const pulseRadius = node.radius + Math.sin(node.pulse) * 5 + 3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0, pulseRadius), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    });

    animFrameId = requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener('resize', resize);
  resize();
  draw();
}

/* ==========================================================================
   2. Sticky Navigation Header
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.nav-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   3. ScrollSpy & Sticky Rail for Section 5
   ========================================================================== */
function initScrollSpyRail() {
  const railItems = document.querySelectorAll('.rail-item');
  const chapterBlocks = document.querySelectorAll('.chapter-block');
  const railLine = document.querySelector('.layers-rail-line');
  if (!railItems.length || !chapterBlocks.length) return;

  function onScroll() {
    let currentIdx = 0;
    const triggerPos = window.innerHeight * 0.45;

    chapterBlocks.forEach((block, idx) => {
      const rect = block.getBoundingClientRect();
      if (rect.top <= triggerPos) {
        currentIdx = idx;
      }
    });

    railItems.forEach((item, idx) => {
      if (idx === currentIdx) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    if (railLine && chapterBlocks.length > 1) {
      const pct = (currentIdx / (chapterBlocks.length - 1)) * 100;
      railLine.style.height = `${pct}%`;
    }
  }

  railItems.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      chapterBlocks[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  window.addEventListener('scroll', onScroll);
}

/* ==========================================================================
   4. Interactive Product Mockup Controls
   ========================================================================== */
function initInteractiveMockups() {
  // Chapter 01: Member Search Filter
  const memberSearchInput = document.getElementById('member-search-input');
  const memberRows = document.querySelectorAll('.mockup-member-row');

  if (memberSearchInput && memberRows.length) {
    memberSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      memberRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(query)) {
          row.style.display = 'flex';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

  // Chapter 02: Pricing Toggle Switch
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const priceDisplay = document.getElementById('mockup-price-display');

  if (toggleBtns.length && priceDisplay) {
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.dataset.mode;
        if (mode === 'member') {
          priceDisplay.textContent = '$49.00 / mo';
          priceDisplay.style.color = '#B37415';
        } else {
          priceDisplay.textContent = '$79.00 / mo';
          priceDisplay.style.color = '#1A1D20';
        }
      });
    });
  }

  // Chapter 03: Interactive Commission Tier Slider
  const tierSlider = document.getElementById('commission-tier-slider');
  const tierValueDisplay = document.getElementById('tier-value-display');
  const calcOutput = document.getElementById('calc-payout-output');

  if (tierSlider && tierValueDisplay && calcOutput) {
    tierSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      tierValueDisplay.textContent = `Level ${val} Downline`;
      const calculated = (val * 1450.50).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      calcOutput.textContent = calculated;
    });
  }

  // Chapter 04: Payout Request Simulator
  const payoutBtn = document.getElementById('payout-sim-btn');
  const payoutBalance = document.getElementById('payout-sim-balance');

  if (payoutBtn && payoutBalance) {
    payoutBtn.addEventListener('click', () => {
      payoutBtn.textContent = 'Processing Payout...';
      payoutBtn.style.opacity = '0.7';
      setTimeout(() => {
        payoutBtn.textContent = '✓ Payout Sent ($4,850.00)';
        payoutBtn.style.background = '#1164F0';
        payoutBtn.style.color = '#FFF';
        payoutBtn.style.opacity = '1';
        payoutBalance.textContent = '$0.00';
      }, 1200);
    });
  }

  // Chapter 05: Permission Matrix Checkboxes
  const permToggles = document.querySelectorAll('.perm-toggle');
  permToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      const parentRow = e.target.closest('.mockup-row');
      if (parentRow) {
        if (e.target.checked) {
          parentRow.style.backgroundColor = 'rgba(17, 100, 240, 0.08)';
        } else {
          parentRow.style.backgroundColor = 'transparent';
        }
      }
    });
  });
}

/* ==========================================================================
   5. Modal Form Engine
   ========================================================================== */
function initModalFormEngine() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const demoButtons = document.querySelectorAll('[data-open-modal]');
  const modalForm = document.getElementById('demo-form');
  const modalSuccess = document.getElementById('modal-success');

  if (!modalBackdrop) return;

  function openModal() {
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  demoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalForm.style.display = 'none';
      if (modalSuccess) {
        modalSuccess.style.display = 'block';
      }
    });
  }
}



/* ==========================================================================
   7. Navigation Router (Homepage <-> Features View Switching)
   ========================================================================== */
function initNavigationRouter() {
  const homeView = document.getElementById('view-home');
  const featuresView = document.getElementById('view-features');
  const navLinks = document.querySelectorAll('.nav-link[data-route]');

  function route() {
    const hash = window.location.hash || '#home';
    if (hash === '#features') {
      if (homeView) homeView.style.display = 'none';
      if (featuresView) featuresView.style.display = 'block';
      window.scrollTo(0, 0);
      updateActiveNavLink('features');
    } else {
      if (homeView) homeView.style.display = 'block';
      if (featuresView) featuresView.style.display = 'none';
      updateActiveNavLink('home');
    }
  }

  function updateActiveNavLink(currentRoute) {
    navLinks.forEach(link => {
      if (link.dataset.route === currentRoute) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetRoute = link.dataset.route;
      if (targetRoute) {
        e.preventDefault();
        window.location.hash = `#${targetRoute}`;
        route();
      }
    });
  });

  window.addEventListener('hashchange', route);
  route();
}

/* ==========================================================================
   8. One-Scroll Section Snap Directional Engine
   ========================================================================== */
function initSectionSnapScroll() {
  if (window.innerWidth <= 992) return;

  const sections = Array.from(document.querySelectorAll('#view-home > section'));
  if (!sections.length) return;

  let isAnimating = false;
  let accumulatedDelta = 0;
  let scrollTimer = null;

  function getActiveSectionIndex() {
    const scrollMid = window.scrollY + window.innerHeight * 0.35;
    let activeIdx = 0;
    sections.forEach((sec, idx) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollMid >= top && scrollMid < top + height) {
        activeIdx = idx;
      }
    });
    return activeIdx;
  }

  function snapToSection(targetIdx) {
    if (targetIdx < 0 || targetIdx >= sections.length) return;
    isAnimating = true;
    const targetSec = sections[targetIdx];
    const targetTop = targetSec.offsetTop;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isAnimating = false;
    }, 750);
  }

  window.addEventListener('wheel', (e) => {
    if (window.innerWidth <= 992) return;
    if (document.querySelector('.modal-backdrop.active')) return;

    const currentIdx = getActiveSectionIndex();
    const currentSec = sections[currentIdx];

    // Exception: Platform Architecture (#every-layer)
    if (currentSec && currentSec.id === 'every-layer') {
      const secTop = currentSec.offsetTop;
      const secHeight = currentSec.offsetHeight;
      const curScroll = window.scrollY;
      const winHeight = window.innerHeight;

      // Top boundary scrolling UP -> snap to previous section
      if (e.deltaY < 0 && curScroll <= secTop + 40) {
        if (isAnimating) { e.preventDefault(); return; }
        e.preventDefault();
        if (currentIdx > 0) {
          snapToSection(currentIdx - 1);
        }
      }
      // Bottom boundary scrolling DOWN -> snap to next section
      else if (e.deltaY > 0 && curScroll + winHeight >= secTop + secHeight - 40) {
        if (isAnimating) { e.preventDefault(); return; }
        e.preventDefault();
        if (currentIdx < sections.length - 1) {
          snapToSection(currentIdx + 1);
        }
      }
      return; // Normal smooth scrolling inside #every-layer
    }

    // For all 100vh sections: single directional wheel tick snaps to adjacent section
    e.preventDefault();
    if (isAnimating) return;

    accumulatedDelta += e.deltaY;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => { accumulatedDelta = 0; }, 150);

    if (Math.abs(accumulatedDelta) > 20 || Math.abs(e.deltaY) > 25) {
      const direction = (accumulatedDelta || e.deltaY) > 0 ? 1 : -1;
      accumulatedDelta = 0;
      snapToSection(currentIdx + direction);
    }
  }, { passive: false });

  // Keyboard Navigation Support (ArrowUp / ArrowDown)
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('.modal-backdrop.active')) return;
    if (window.innerWidth <= 992) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const currentIdx = getActiveSectionIndex();
      if (e.key === 'ArrowDown' && currentIdx < sections.length - 1) {
        e.preventDefault();
        snapToSection(currentIdx + 1);
      } else if (e.key === 'ArrowUp' && currentIdx > 0) {
        e.preventDefault();
        snapToSection(currentIdx - 1);
      }
    }
  });
}
