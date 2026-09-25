/**
 * Havre Design - Core JavaScript Application with Smooth Animations & Storage
 */

// Initial Seed Data
const DEFAULT_SERVICES = [
  {
    id: "1",
    group: "principal",
    title: "Projeto Arquitetónico",
    slug: "arquitetura",
    description: "Desenvolvimento de projetos arquitetónicos para edifícios residenciais, comerciais, de serviços e outras tipologias compatíveis com a estratégia da empresa.",
    icon: "home",
    includes: [
      "Recolha de informação e definição do programa de necessidades",
      "Estudo prévio e anteprojeto",
      "Projeto de execução, com coordenação das especialidades",
      "Peças descritivas, desenhos e especificações técnicas",
      "Perspetivas e imagens de apresentação",
      "Revisões com o cliente até à aprovação",
      "Apoio ao processo de aprovação, conforme âmbito contratado"
    ],
    imageUrl: "./assets/servicos/image3.png",
    active: true,
    order: 1
  },
  {
    id: "2",
    group: "principal",
    title: "Design de Interiores",
    slug: "interiores",
    description: "Conceção de espaços interiores orientada para a funcionalidade, a identidade do ambiente e a valorização do investimento realizado pelo cliente.",
    icon: "sparkles",
    includes: [
      "Conceito de design, paleta de cores e materiais",
      "Layout e distribuição funcional dos espaços",
      "Projeto de iluminação e de acabamentos",
      "Mobiliário à medida, quando incluído no âmbito",
      "Seleção de equipamentos e elementos de decoração",
      "Planta, perspetivas e imagens de apresentação",
      "Acompanhamento da execução do interior"
    ],
    imageUrl: "./assets/servicos/image1.png",
    active: true,
    order: 2
  },
  {
    id: "3",
    group: "principal",
    title: "Fiscalização e Acompanhamento Técnico",
    slug: "fiscalizacao",
    description: "Fiscalização e acompanhamento técnico durante a execução da obra, de acordo com o âmbito contratado, incluindo a verificação da conformidade dos trabalhos com os projetos e as condições técnicas aplicáveis.",
    icon: "wrench",
    includes: [
      "Visitas periódicas à obra, conforme o âmbito contratado",
      "Verificação da conformidade dos trabalhos com o projeto aprovado",
      "Controlo da qualidade dos materiais e da execução",
      "Acompanhamento de prazos e sequência de trabalhos",
      "Registo fotográfico e relatório de fiscalização",
      "Comunicação com empreiteiros e fornecedores",
      "Levantamento de questões e proposta de soluções"
    ],
    imageUrl: "./assets/servicos/image5.png",
    active: true,
    order: 3
  },
  {
    id: "4",
    group: "complementar",
    title: "Consultoria Técnica",
    slug: "consultoria-tecnica",
    description: "Apoio especializado à análise de projetos, tomada de decisões e avaliação de soluções técnicas.",
    icon: "lightbulb",
    includes: [],
    imageUrl: "./assets/servicos/image4.png",
    active: true,
    order: 4
  },
  {
    id: "5",
    group: "complementar",
    title: "Topografia",
    slug: "topografia",
    description: "Levantamento planimétrico e altimétrico do terreno, quando necessário ao desenvolvimento do projeto.",
    icon: "map-pin",
    includes: [],
    imageUrl: "",
    active: true,
    order: 5
  },
  {
    id: "6",
    group: "complementar",
    title: "Levantamento Técnico",
    slug: "levantamento-tecnico",
    description: "Recolha e registo das condições existentes de edifícios e espaços para apoio ao desenvolvimento do projeto.",
    icon: "maximize",
    includes: [],
    imageUrl: "",
    active: true,
    order: 6
  },
  {
    id: "7",
    group: "complementar",
    title: "Modelação 3D e Renderização",
    slug: "modelacao-3d",
    description: "Produção de modelos tridimensionais e imagens ilustrativas para facilitar a visualização e a compreensão das propostas.",
    icon: "image",
    includes: [],
    imageUrl: "",
    active: true,
    order: 7
  },
  {
    id: "8",
    group: "complementar",
    title: "Medições e Orçamento",
    slug: "medicoes-e-orcamento",
    description: "Quantificação de trabalhos e estimativa de custos para apoio ao planeamento e à execução.",
    icon: "dollar-sign",
    includes: [],
    imageUrl: "",
    active: true,
    order: 8
  },
  {
    id: "9",
    group: "complementar",
    title: "Licenciamento",
    slug: "licenciamento",
    description: "Preparação e acompanhamento dos processos administrativos necessários à aprovação de projetos junto das entidades competentes.",
    icon: "calendar",
    includes: [],
    imageUrl: "",
    active: true,
    order: 9
  },
  {
    id: "10",
    group: "complementar",
    title: "Croqui de Localização",
    slug: "croqui-localizacao",
    description: "Representação da localização do imóvel para apoio a processos documentais e administrativos.",
    icon: "trees",
    includes: [],
    imageUrl: "",
    active: true,
    order: 10
  }
];

const DEFAULT_PORTFOLIO = [
  {
    id: "1",
    title: "Residência Moderna",
    category: "Residencial",
    description: "Projeto completo de uma residência de 450m² com design contemporâneo e integração com a natureza.",
    area: "450m²",
    year: "2024",
    location: "Luanda, Angola",
    imageUrl: "./assets/portifolio/image1.png",
    gallery: ["./assets/portifolio/image1.png", "./assets/portifolio/image2.png", "./assets/portifolio/image3.png"],
    featured: true,
    order: 1
  },
  {
    id: "2",
    title: "Escritório Corporativo",
    category: "Comercial",
    description: "Ambiente de trabalho colaborativo para empresa de tecnologia, priorizando conforto e produtividade.",
    area: "280m²",
    year: "2024",
    location: "Talatona, Luanda",
    imageUrl: "./assets/portifolio/image2.png",
    gallery: ["./assets/portifolio/image2.png", "./assets/portifolio/image4.png"],
    featured: true,
    order: 2
  },
  {
    id: "3",
    title: "Apartamento Luxo",
    category: "Residencial",
    description: "Reforma completa de apartamento de alto padrão com foco em elegância e funcionalidade.",
    area: "180m²",
    year: "2023",
    location: "Miramar, Luanda",
    imageUrl: "./assets/portifolio/image3.png",
    gallery: ["./assets/portifolio/image3.png", "./assets/portifolio/image5.png"],
    featured: true,
    order: 3
  },
  {
    id: "4",
    title: "Clínica Médica",
    category: "Comercial",
    description: "Projeto de clínica médica humanizada, transmitindo confiança e acolhimento aos pacientes.",
    area: "320m²",
    year: "2023",
    location: "Benfica, Luanda",
    imageUrl: "./assets/portifolio/image4.png",
    gallery: ["./assets/portifolio/image4.png", "./assets/portifolio/image6.png"],
    featured: true,
    order: 4
  },
  {
    id: "5",
    title: "Villa Sol Nascente",
    category: "Corporativo",
    description: "Complexo corporativo e de reuniões com paisagismo integrado e acústica de alto nível.",
    area: "600m²",
    year: "2023",
    location: "Luanda, Angola",
    imageUrl: "./assets/portifolio/image5.png",
    gallery: ["./assets/portifolio/image5.png", "./assets/portifolio/image7.png"],
    featured: false,
    order: 5
  },
  {
    id: "6",
    title: "Showroom Havre",
    category: "Outro",
    description: "Espaço conceitual projetado para exibição de mobiliário exclusivo e recepção de clientes.",
    area: "150m²",
    year: "2024",
    location: "Luanda, Angola",
    imageUrl: "./assets/portifolio/image6.png",
    gallery: ["./assets/portifolio/image6.png", "./assets/portifolio/image8.png"],
    featured: false,
    order: 6
  }
];

// Initialize Storage with fallback check for valid images
const SERVICES_SEED_VERSION = '2026-09-25-servicos-inclui-1';

function initStorage() {
  const seedVersion = localStorage.getItem('havre_seed_version');
  if (seedVersion !== SERVICES_SEED_VERSION) {
    localStorage.setItem('havre_services', JSON.stringify(DEFAULT_SERVICES));
    localStorage.setItem('havre_seed_version', SERVICES_SEED_VERSION);
  }

  const currentPortfolio = localStorage.getItem('havre_portfolio');
  if (!currentPortfolio || currentPortfolio === '[]') {
    localStorage.setItem('havre_portfolio', JSON.stringify(DEFAULT_PORTFOLIO));
  }

  if (!localStorage.getItem('havre_appointments')) {
    localStorage.setItem('havre_appointments', JSON.stringify([]));
  }
  if (!localStorage.getItem('havre_projects')) {
    localStorage.setItem('havre_projects', JSON.stringify([]));
  }
}

/* ==========================================================================
   CONFIGURAÇÃO DA AGENDA — único sítio para alterar horários e tipos de reunião
   ========================================================================== */
const AGENDA_CONFIG = {
  // Horários apresentados ao cliente (formato 24h)
  horarios: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
  // Dias em que NÃO é possível marcar (0 = domingo, 6 = sábado).
  // Para passar a atender ao sábado: remover o 6 e preencher horariosSabado.
  diasIndisponiveis: [0, 6],
  horariosSabado: [],
  // Tipo de reunião pré-selecionado no assistente
  tipoPredefinido: 'OFFICE',
  // Tipos de reunião (labels usados no assistente, dashboard e administração)
  tipos: {
    OFFICE: { label: 'Reunião no Escritório', precisaEndereco: false },
    SITE: {
      label: 'Visita ao Local',
      precisaEndereco: true,
      nota: 'A visita ao local pode implicar uma taxa de deslocação, calculada conforme a localização e confirmada previamente.'
    },
    ONLINE: { label: 'Reunião Online', precisaEndereco: false, nota: 'Sem deslocação' }
  }
};

// Rótulo de um tipo de reunião (qualquer página pode usar)
function getAppointmentTypeLabel(type) {
  const t = AGENDA_CONFIG.tipos[type];
  return t ? t.label : (type || '');
}

function appointmentTypeNeedsAddress(type) {
  const t = AGENDA_CONFIG.tipos[type];
  return t ? !!t.precisaEndereco : type === 'SITE';
}

// Data Accessors
function getServices() {
  initStorage();
  const services = JSON.parse(localStorage.getItem('havre_services') || '[]');
  return services.length > 0 ? services : DEFAULT_SERVICES;
}

function saveServices(services) {
  localStorage.setItem('havre_services', JSON.stringify(services));
}

function getPortfolio() {
  initStorage();
  const portfolio = JSON.parse(localStorage.getItem('havre_portfolio') || '[]');
  return portfolio.length > 0 ? portfolio : DEFAULT_PORTFOLIO;
}

function savePortfolio(portfolio) {
  localStorage.setItem('havre_portfolio', JSON.stringify(portfolio));
}

function getAppointments() {
  initStorage();
  return JSON.parse(localStorage.getItem('havre_appointments') || '[]');
}

function saveAppointment(apt) {
  const list = getAppointments();
  const newApt = {
    id: `apt-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'PENDING',
    ...apt
  };
  list.push(newApt);
  localStorage.setItem('havre_appointments', JSON.stringify(list));
  return newApt;
}

function updateAppointmentStatus(id, status) {
  const list = getAppointments();
  const item = list.find(a => a.id === id);
  if (item) {
    item.status = status;
    localStorage.setItem('havre_appointments', JSON.stringify(list));
  }
}

function getProjects() {
  initStorage();
  return JSON.parse(localStorage.getItem('havre_projects') || '[]');
}

function saveProject(proj) {
  const list = getProjects();
  const newProj = {
    id: `proj-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'NEW',
    ...proj
  };
  list.push(newProj);
  localStorage.setItem('havre_projects', JSON.stringify(list));
  return newProj;
}

function updateProjectStatus(id, status) {
  const list = getProjects();
  const item = list.find(p => p.id === id);
  if (item) {
    item.status = status;
    localStorage.setItem('havre_projects', JSON.stringify(list));
  }
}

// User Auth State Manager
function getCurrentUser() {
  const userJson = localStorage.getItem('havre_user');
  return userJson ? JSON.parse(userJson) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('havre_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('havre_user');
  }
}

function logoutUser() {
  localStorage.removeItem('havre_user');
  window.location.href = './login.html';
}

// Toast Notifications System
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="flex-1">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-white hover:opacity-80">&times;</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Lucide Icon SVG Mapper Helper
function renderLucideIcon(iconName, className = "w-6 h-6") {
  const icons = {
    home: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6"/></svg>`,
    building: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9m4 0V7m0 0h4m-4 0H9"/></svg>`,
    house: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6"/></svg>`,
    lightbulb: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
    hammer: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.9 6.91a2.12 2.12 0 01-3-3l6.91-6.9a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
    trees: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7 7 7m-7-7v18"/></svg>`,
    arrowRight: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
    user: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
    check: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
    clock: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    sparkles: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    image: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    wrench: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    calendar: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    "map-pin": `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    "dollar-sign": `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v22m5-18H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
    maximize: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>`,
    star: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
  };
  return icons[iconName] || icons.home;
}

// Render Global Header
function renderHeader(activePage = 'inicio') {
  const user = getCurrentUser();
  const navLinks = [
    { href: './index.html', label: 'Início', key: 'inicio' },
    { href: './sobre.html', label: 'Sobre', key: 'sobre' },
    { href: './servicos.html', label: 'Serviços', key: 'servicos' },
    { href: './orcamento.html', label: 'Orçamento', key: 'orcamento' },
    { href: './portfolio.html', label: 'Portfólio', key: 'portfolio' },
    { href: './processo.html', label: 'Processo', key: 'processo' },
    { href: './faq.html', label: 'FAQ', key: 'faq' },
    { href: './contacto.html', label: 'Contacto', key: 'contacto' }
  ];

  const headerHtml = `
    <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div class="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="./index.html" class="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img width="120" height="60" alt="Logo HavreDesign" src="./logo.png" onerror="this.src='./LOGO-HAVREDESIGN.jpeg'" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          ${navLinks.map(link => `
            <a href="${link.href}" class="text-sm font-medium ${link.key === activePage ? 'text-secondary font-semibold border-b-2 border-secondary pb-1' : 'text-foreground/80 hover:text-primary'} transition-colors">
              ${link.label}
            </a>
          `).join('')}
        </nav>

        <div class="hidden lg:flex items-center gap-4">
          ${user ? `
            <div class="relative group">
              <button class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium text-foreground transition-colors">
                ${renderLucideIcon('user', 'w-4 h-4')}
                <span>${user.name}</span>
              </button>
              <div class="absolute right-0 top-full hidden group-hover:block bg-card border border-border shadow-lg rounded-md w-48 py-1 z-50 animate-fade-in-up">
                <a href="./dashboard.html" class="block px-4 py-2 text-sm text-foreground hover:bg-muted">Minha Área</a>
                ${user.role === 'ADMIN' ? `<a href="./admin.html" class="block px-4 py-2 text-sm text-foreground hover:bg-muted font-semibold text-secondary">Painel Admin</a>` : ''}
                <hr class="border-border my-1" />
                <button onclick="logoutUser()" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-muted">Sair</button>
              </div>
            </div>
          ` : `
            <a href="./login.html" class="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Entrar
            </a>
          `}
          <a href="./agendar.html" class="px-5 py-2.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md hover:bg-secondary/90 transition-colors shadow-sm hover:shadow">
            Iniciar Projeto
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="lg:hidden p-3 -mr-2 text-foreground" aria-label="Toggle Menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu" class="hidden lg:hidden border-t border-border bg-background px-4 py-4 space-y-3 animate-fade-in">
        ${navLinks.map(link => `
          <a href="${link.href}" class="block text-sm font-medium py-2 ${link.key === activePage ? 'text-secondary font-bold' : 'text-foreground/80'}">
            ${link.label}
          </a>
        `).join('')}
        <div class="pt-4 border-t border-border space-y-2">
          ${user ? `
            <a href="./dashboard.html" class="block w-full text-center py-2 px-4 border border-border rounded-md text-sm font-medium">Minha Área</a>
            ${user.role === 'ADMIN' ? `<a href="./admin.html" class="block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium">Painel Admin</a>` : ''}
            <button onclick="logoutUser()" class="block w-full text-center py-2 text-sm text-red-600">Sair</button>
          ` : `
            <a href="./login.html" class="block w-full text-center py-2 px-4 border border-border rounded-md text-sm font-medium">Entrar</a>
          `}
          <a href="./agendar.html" class="block w-full text-center py-2 px-4 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
            Iniciar Projeto
          </a>
        </div>
      </div>
    </header>
  `;

  const headerContainer = document.getElementById('header-mount');
  if (headerContainer) {
    headerContainer.innerHTML = headerHtml;

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}

// Render Global Footer
function renderFooter() {
  const footerHtml = `
    <footer class="bg-primary text-primary-foreground">
      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="space-y-4">
            <div class="flex flex-col">
              <a href="./index.html" class="flex items-center gap-2">
                <img class="filter brightness-0 invert" width="120" height="60" alt="Logo HavreDesign" src="./logo.png" onerror="this.src='./LOGO-HAVREDESIGN.jpeg'" />
              </a>
            </div>
            <p class="text-sm text-primary-foreground/80 leading-relaxed">
              HAVREDESIGN - Arquitetura como refúgio. Criamos ambientes que acolhem, inspiram e transformam a forma como as pessoas vivem os espaços.
            </p>
            <div class="flex gap-4 pt-2">
              <a href="https://www.instagram.com/havredesign.ao/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="hover:text-secondary transition-colors hover:scale-110 transform">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61594010232462" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="hover:text-secondary transition-colors hover:scale-110 transform">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/havredesign/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-secondary transition-colors hover:scale-110 transform">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.156z"/></svg>
              </a>
              <a href="https://wa.me/244926184104" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="hover:text-secondary transition-colors hover:scale-110 transform">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.785-.881-2.062-.982-.276-.101-.477-.15-.678.15-.2.301-.777.982-.953 1.183-.175.201-.351.226-.652.076-.301-.15-1.274-.47-2.427-1.498-.897-.8-1.502-1.788-1.678-2.09-.175-.301-.019-.464.131-.614.136-.135.301-.351.451-.527.15-.175.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.631-.93-2.235-.244-.587-.493-.507-.678-.517-.175-.01-.376-.01-.577-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.513 0 1.482 1.079 2.912 1.229 3.113.15.201 2.124 3.243 5.145 4.547.719.31 1.28.495 1.718.634.723.23 1.381.197 1.901.12.579-.086 1.785-.728 2.036-1.431.251-.703.251-1.305.175-1.431-.075-.126-.276-.201-.577-.351z"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="font-serif text-lg font-semibold">Links Rápidos</h3>
            <nav class="flex flex-col gap-2">
              <a href="./sobre.html" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Sobre Nós</a>
              <a href="./servicos.html" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Serviços</a>
              <a href="./portfolio.html" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Portfólio</a>
              <a href="./processo.html" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Processo de Trabalho</a>
              <a href="./faq.html" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Perguntas Frequentes</a>
              <a href="./orcamento.html" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">HAVRE Soluções</a>
            </nav>
          </div>

          <!-- Services -->
          <div class="space-y-4">
            <h3 class="font-serif text-lg font-semibold">Serviços</h3>
            <nav class="flex flex-col gap-2">
              <a href="./servicos.html#arquitetura" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Projeto Arquitetónico</a>
              <a href="./servicos.html#interiores" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Design de Interiores</a>
              <a href="./servicos.html#fiscalizacao" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Fiscalização e Acompanhamento Técnico</a>
              <a href="./solicitar-projeto.html" class="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Solicitar orçamento</a>
            </nav>
          </div>

          <!-- Contact -->
          <div class="space-y-4">
            <h3 class="font-serif text-lg font-semibold">Contacto</h3>
            <div class="flex flex-col gap-3">
              <a href="tel:+244926184104" class="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +244 926 184 104
              </a>
              <a href="mailto:info@havredesign.ao" class="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@havredesign.ao
              </a>
              <div class="flex items-start gap-3 text-sm text-primary-foreground/80">
                <svg class="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Benfica, Via Expressa, Bairro Tchinguari, Rua 1, próximo à Administração do Talatona, Município de Talatona, Luanda.</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-primary-foreground/80">
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Segunda a sexta — 09h às 18h · Sábado — 09h às 13h</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-primary-foreground/60">
            ${new Date().getFullYear()} HAVREDESIGN. Todos os direitos reservados.
          </p>
          <div class="flex gap-6">
            <a href="./politica-privacidade.html" class="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              Política de Privacidade
            </a>
            <a href="./termos-uso.html" class="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById('footer-mount');
  if (footerContainer) {
    footerContainer.innerHTML = footerHtml;
  }
}

// Render Floating Animated WhatsApp Button
function renderWhatsAppButton() {
  const btnHtml = `
    <a
      href="https://wa.me/244926184104?text=Ol%C3%A1%2C%20HAVREDESIGN!%20Visitei%20o%20vosso%20site%20e%20gostaria%20de%20receber%20orienta%C3%A7%C3%A3o%20sobre%20o%20servi%C3%A7o%20ou%20a%20HAVRE%20Solu%C3%A7%C3%A3o%20mais%20adequada%20para%20o%20meu%20projeto."
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center animate-pulse-glow"
      aria-label="Contactar via WhatsApp"
    >
      <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.785-.881-2.062-.982-.276-.101-.477-.15-.678.15-.2.301-.777.982-.953 1.183-.175.201-.351.226-.652.076-.301-.15-1.274-.47-2.427-1.498-.897-.8-1.502-1.788-1.678-2.09-.175-.301-.019-.464.131-.614.136-.135.301-.351.451-.527.15-.175.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.631-.93-2.235-.244-.587-.493-.507-.678-.517-.175-.01-.376-.01-.577-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.513 0 1.482 1.079 2.912 1.229 3.113.15.201 2.124 3.243 5.145 4.547.719.31 1.28.495 1.718.634.723.23 1.381.197 1.901.12.579-.086 1.785-.728 2.036-1.431.251-.703.251-1.305.175-1.431-.075-.126-.276-.201-.577-.351z"/></svg>
    </a>
  `;
  const mount = document.getElementById('whatsapp-mount');
  if (mount) {
    mount.innerHTML = btnHtml;
  }
}

// Setup IntersectionObserver for Scroll Animations
function setupScrollReveal() {
  const elements = document.querySelectorAll('section > div, .card-hover-effect, .group, section h2');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((el, index) => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
      if (index % 3 === 1) el.classList.add('delay-100');
      if (index % 3 === 2) el.classList.add('delay-200');
    }
    observer.observe(el);
  });
}

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  renderFooter();
  renderWhatsAppButton();
  setTimeout(setupScrollReveal, 100);
});

// Ecrã de loading com o logótipo — esconde assim que a página termina de carregar
function hidePageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  loader.classList.add('is-hidden');
  setTimeout(() => {
    if (loader.parentNode) loader.parentNode.removeChild(loader);
  }, 700);
}

window.addEventListener('load', hidePageLoader);
if (document.readyState === 'complete') hidePageLoader();
