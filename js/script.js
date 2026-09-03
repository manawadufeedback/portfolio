// ============ Data: Projects ============
const PROJECTS = [
  {
    id: 'soc-lab',
    category: 'cyber',
    catLabel: 'Cyber Security · SOC',
    title: 'SOC Threat Detection & Investigation Lab',
    desc: 'A hands-on SOC lab investigating suspicious authentication activity — from alert triage to containment and remediation recommendations.',
    domain: 'Cyber Security & Defence-Sector Security Operations',
    role: 'SOC Analyst / Security Operations',
    tools: 'FortiAnalyzer · Windows Security Logs · Wireshark · IOC Analysis · Incident Response',
    status: 'Completed',
    classification: 'Forensic Lab Environment',
    overview: 'Investigated a cyber security incident within an Army SOC environment, focusing on threat detection, security-log analysis, IOC identification, incident investigation, and response — while maintaining operational security and confidentiality.',
    approach: [
      'Detection: Wazuh SIEM generated an alert after a sequence of abnormal authentication events.',
      'Log Analysis: Reviewed Windows Security Events — failed/successful logons, source IPs, usernames, timestamps, and logon types.',
      'Threat Investigation: Correlated repeated authentication failures followed by a successful login to assess unauthorized access.',
      'Incident Response: Followed Identification → Containment → Investigation → Eradication → Recovery → Lessons Learned.'
    ],
    outcome: 'Demonstrated an end-to-end SOC investigation covering alert detection, threat analysis, incident response, and remediation within an Army network environment.',
    skills: 'SOC Monitoring · SIEM Analysis · Log Correlation · Threat Detection · IOC Analysis · Incident Response · Security Reporting'
  },
  {
    id: 'phishing',
    category: 'cyber',
    catLabel: 'Cyber Security · Email Security',
    title: 'Phishing Email Investigation & Security Incident Analysis',
    desc: 'SOC investigation of a suspected phishing email within a defence-sector environment — from alert detection to IOC analysis and response.',
    domain: 'Cyber Security & Defence-Sector Security Operations',
    role: 'SOC Analyst / Security Operations',
    tools: 'FortiMail Mail Gateway · Mail Server Logs · IOC Analysis · Security Event Correlation · Incident Response',
    status: 'Completed',
    classification: 'Lab Environment',
    overview: 'A suspected phishing email incident was identified within a defence-sector email environment and investigated from a SOC perspective, determining the nature of the email, validating alerts, and assessing potential impact to users and systems.',
    approach: [
      'Alert Detection: Reviewed the security alert and identified the suspicious email activity.',
      'Email Analysis: Analyzed sender information, message details, and available security evidence.',
      'Log & Event Analysis: Reviewed FortiMail and Mail Server security logs for related activity.',
      'Evidence Correlation & IOC Analysis: Correlated email, system, and network evidence to identify suspicious addresses, domains, IPs, and URLs.'
    ],
    outcome: 'Determined the email presented characteristics consistent with a phishing attempt targeting personnel, and recommended quarantine, blocking, monitoring, and user-awareness actions.',
    skills: 'Phishing Detection · Security Alert Triage · Log Analysis · IOC Analysis · Evidence Correlation · Incident Response · Threat Assessment'
  },
  {
    id: 'ransomware',
    category: 'cyber',
    catLabel: 'Cyber Security · Incident Response',
    title: 'SOC Detection & Response to a Ransomware Attack',
    desc: 'Investigated a suspected phishing email as a potential initial access vector for ransomware within a defence-sector Army network.',
    domain: 'Cyber Security & Defence-Sector Security Operations',
    role: 'SOC Analyst / Security Operations',
    tools: 'FortiMail Gateway · Mail Server Logs · Security Event Correlation · IOC Analysis · Incident Response',
    status: 'Completed',
    classification: 'Lab Environment',
    overview: 'A SOC investigation into a ransomware-related incident within an Army defence-sector network, focused on identifying IOCs, correlating security events and logs, assessing scope and impact, and developing an incident-response strategy.',
    approach: [
      'Detection & Alert Triage: Prioritized events by severity, affected systems, and operational impact.',
      'IOC Identification: Assessed suspicious IPs, domains, file indicators, hashes, and forensic artefacts.',
      'Evidence Correlation: Established relationships between events to build a potential attack timeline.',
      'Incident Response: Developed containment, eradication, recovery, and post-incident remediation actions.'
    ],
    outcome: 'Delivered a structured SOC workflow from detection and alert triage through IOC analysis, evidence correlation, threat assessment, containment, and recovery planning.',
    skills: 'Ransomware Detection · SOC Monitoring · Log Analysis · IOC Analysis · Incident Timeline Development · Containment & Remediation · Recovery Planning'
  },
  {
    id: 'otdr',
    category: 'telecom',
    catLabel: 'Telecommunications · Fiber Optics',
    title: 'Fiber Optic Link Design & OTDR Analysis',
    desc: 'End-to-end fiber optic link planning, splicing coordination, optical loss assessment, and OTDR-based fault analysis for an SLT project.',
    domain: 'Telecommunications & ICT Infrastructure — Access Engineering PLC (SLT Project)',
    role: 'Telecommunications / Fiber Optic Network Technician',
    tools: 'OTDR · Optical Power Meter · Fusion Splicing · Fiber Route Planning · OTDR Trace Analysis',
    status: 'Completed',
    classification: 'Client Infrastructure Project',
    overview: 'A practical telecommunications infrastructure project through Access Engineering PLC covering fiber route planning, splicing coordination, optical loss assessment, OTDR testing, fault localization, and technical documentation.',
    approach: [
      'Route Planning & Splicing Plan: Defined fiber routes, core allocation, and splice-point documentation.',
      'Optical Power Budget: Calculated expected loss across attenuation, splices, connectors, and margin.',
      'OTDR Testing & Trace Analysis: Verified fiber length, attenuation, splice/connector/reflective events.',
      'Fault Localization & Link Verification: Correlated OTDR distance data with the physical route to isolate faults before handover.'
    ],
    outcome: 'Contributed to the implementation and technical verification of fiber optic network links, strengthening capabilities across the full fiber-link lifecycle from planning to commissioning.',
    skills: 'Fiber Optic Deployment · Fusion Splicing · Optical Power Budgeting · OTDR Testing & Trace Analysis · Fault Localization · Technical Documentation'
  },
  {
    id: 'microwave',
    category: 'telecom',
    catLabel: 'Telecommunications · Wireless Backhaul',
    title: 'Tower Microwave Point-to-Point Link Alignment',
    desc: 'Alignment and commissioning of a microwave P2P link establishing reliable wireless backhaul connectivity between telecommunications tower sites.',
    domain: 'Telecommunications & ICT Infrastructure — Prime Engineering Lanka (Pvt) Ltd',
    role: 'Telecommunications / Network Technician',
    tools: 'Microwave Radio Equipment · Parabolic Antennas · RF Cables · PoE / Ethernet · Signal Monitoring',
    status: 'Completed',
    classification: 'Client Infrastructure Project',
    overview: 'Field deployment involving installation support, antenna alignment, equipment configuration, testing, and commissioning of a point-to-point microwave communication link between two telecommunications tower sites.',
    approach: [
      'Site Preparation & Antenna Installation: Verified equipment, mounted antennas, and routed RF/Ethernet cabling.',
      'Line-of-Sight & Alignment: Established azimuth/elevation and fine-tuned direction while monitoring received signal level.',
      'RF & Signal Optimization: Monitored RSL, signal quality, and link stability for the best practical alignment.',
      'Configuration, Testing & Commissioning: Configured IP/Ethernet parameters, verified connectivity, and commissioned the link after full technical checks.'
    ],
    outcome: 'Successfully established a stable point-to-point microwave link providing reliable wireless backhaul connectivity for the telecommunications network.',
    skills: 'Microwave Transmission · RF Antenna Alignment · Point-to-Point Backhaul · Network Configuration · Field Troubleshooting · Commissioning'
  },
  {
    id: 'ftth',
    category: 'telecom',
    catLabel: 'Telecommunications · FTTH',
    title: 'Fiber-Optic FTTH Network Deployment',
    desc: 'Installation and deployment of Fiber-to-the-Home connectivity for Sri Lanka Telecom, from route planning to service-ready verification.',
    domain: 'Telecommunications & ICT Infrastructure — Access Engineering PLC (SLT Project)',
    role: 'Fiber Optic / Telecommunications Technician',
    tools: 'FTTH · Fusion Splicer · OTDR · Optical Power Meter · Fiber Cleaver · Fiber Distribution Box',
    status: 'Completed',
    classification: 'Client Infrastructure Project',
    overview: 'Field-level fiber installation, route preparation, splicing, termination, optical testing, and troubleshooting to ensure the deployed FTTH network met required connectivity and performance standards.',
    approach: [
      'Site & Route Preparation: Identified cable pathways, distribution points, and access locations.',
      'Fiber Installation & Splicing: Routed cable and performed fusion splicing for low-loss optical connections.',
      'FTTH Distribution & Optical Testing: Connected distribution infrastructure to customer-side ONT and measured received optical power.',
      'Troubleshooting & Commissioning: Investigated high loss, poor splices, and continuity faults, then retested for service readiness.'
    ],
    outcome: 'Supported the implementation and testing of SLT FTTH fiber-optic infrastructure, contributing to reliable optical connectivity between the access network and customer premises.',
    skills: 'FTTH Deployment · Fiber Optic Installation · Fusion Splicing · Optical Loss Analysis · Fiber Fault Localization · Network Link Verification'
  }
];

const ICONS = {
  cyber: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>',
  telecom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0M12 20h.01"/><circle cx="12" cy="4" r="2"/><path d="M12 6v3"/></svg>'
};

// ============ Render Work Grid ============
const workGrid = document.getElementById('workGrid');

function renderWork(filter) {
  workGrid.innerHTML = '';
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'work-card reveal in';
    card.innerHTML = `
      <div class="work-visual viz-${p.category}">
        ${ICONS[p.category]}
        <span class="status-chip">${p.status}</span>
      </div>
      <div class="work-body">
        <span class="work-cat">${p.catLabel}</span>
        <h3 class="work-title">${p.title}</h3>
        <p class="work-desc">${p.desc}</p>
        <a href="#" class="work-link" data-project="${p.id}">View Case Study →</a>
      </div>`;
    workGrid.appendChild(card);
  });
}
renderWork('all');

document.getElementById('filterRow').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderWork(btn.dataset.filter);
});

// ============ Modal ============
const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  modalBox.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
    <p class="modal-eyebrow">${p.catLabel}</p>
    <h2 class="modal-title">${p.title}</h2>
    <div class="modal-meta">
      <div><div class="mm-k">Domain</div><div class="mm-v">${p.domain}</div></div>
      <div><div class="mm-k">Role</div><div class="mm-v">${p.role}</div></div>
      <div><div class="mm-k">Tools / Technologies</div><div class="mm-v">${p.tools}</div></div>
      <div><div class="mm-k">Classification</div><div class="mm-v">${p.classification}</div></div>
    </div>
    <div class="modal-section"><h4>Overview</h4><p>${p.overview}</p></div>
    <div class="modal-section"><h4>Investigation / Project Approach</h4><ul>${p.approach.map(a => `<li>${a}</li>`).join('')}</ul></div>
    <div class="modal-section"><h4>Outcome</h4><p>${p.outcome}</p></div>
    <div class="modal-section"><h4>Key Skills Demonstrated</h4><p>${p.skills}</p></div>
    <div class="modal-status">
      <span class="pill"><span class="pill-dot"></span> ${p.status}</span>
      <span class="pill">${p.classification}</span>
    </div>
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').addEventListener('click', closeModal);
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
document.addEventListener('click', e => {
  const link = e.target.closest('[data-project]');
  if (link) { e.preventDefault(); openModal(link.dataset.project); }
});

// ============ Flow chip renderer ============
document.querySelectorAll('[data-flow]').forEach(el => {
  const steps = el.dataset.flow.split(',');
  el.innerHTML = steps.map((s, i) =>
    `<span class="flow-step">${s}</span>${i < steps.length - 1 ? '<span class="flow-arrow">→</span>' : ''}`
  ).join('');
});

// ============ Accordion ============
document.querySelectorAll('.accordion-head').forEach(head => {
  head.addEventListener('click', () => {
    head.closest('.accordion-item').classList.toggle('open');
  });
});

// ============ Skill Tabs ============
document.getElementById('skillTabs').addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
});

// ============ Light / Dark theme toggle (circular-wipe transition) ============
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  const sync = () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    btn.setAttribute('aria-pressed', String(isLight));
    btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  };
  sync();

  const applyTheme = (next) => {
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  };

  const prefersReduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  btn.addEventListener('click', (e) => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

    // Fallback: instant switch where View Transitions aren't supported (Firefox,
    // older Safari) or when the user asked for reduced motion.
    if (!document.startViewTransition || prefersReduced()) {
      applyTheme(next);
      return;
    }

    // Expand a circle from the point that was clicked.
    const rect = btn.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => applyTheme(next));

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 480,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      })
      .catch(() => {
        /* Snapshot couldn't be taken — the theme still switched, just without
           the wipe. Nothing to do. */
      });
  });
})();

// ============ Back to top (fixed button) ============
(function () {
  const backTop = document.getElementById('backTop');
  if (!backTop) return;
  const toggle = () => backTop.classList.toggle('show', window.scrollY > 600);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
  backTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ============ Nav mobile toggle ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 760) navLinks.classList.remove('mobile-open');
}));

// ============ Active nav link on scroll ============
const sections = ['home', 'about', 'cybersecurity', 'telecom', 'design', 'contact'];
const navAnchors = document.querySelectorAll('.nav-link');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });

// ============ Reveal on scroll ============
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in'); revealIO.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

// ============ Contact form (mailto handoff) ============
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const service = f.service.value || 'Not specified';
  const message = f.message.value.trim();
  const subject = encodeURIComponent(`Project enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService needed: ${service}\n\nMessage:\n${message}`);
  window.location.href = `mailto:manawadu.feedback@gmail.com?subject=${subject}&body=${body}`;
});
