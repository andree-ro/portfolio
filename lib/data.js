// lib/data.js
// Contiene toda la información de contenido del portfolio.
// Mantenerla separada de los componentes facilita actualizar
// datos (nuevo proyecto, nueva habilidad) sin tocar la lógica visual.

export const personalInfo = {
  fullName: 'Andreé Antonio Robles Méndez',
  displayName: 'Andreé Robles',
  role: 'Backend Developer',
  location: 'Quetzaltenango, Guatemala',
  bio: 'Backend developer con conocimientos de frontend, con pénsum cerrado de Ingeniería en Sistemas (Universidad Rafael Landívar). Aprendo mejor construyendo proyectos reales, me adapto rápido a equipos de trabajo y disfruto resolver problemas de arquitectura y datos.',
  email: 'ing.roblesandree@gmail.com',
  phone: '+502 4059-1984',
  github: 'https://github.com/andree-ro',
};

export const skills = {
  backend: ['Node.js', 'MySQL', 'MariaDB', 'Python', 'JWT', 'bcryptjs', 'c++', 'JavaScript'],
  frontend: ['Vue 3', 'Vite', 'Consumo de APIs REST', 'Next.js'],
  tools: ['GitHub', 'Docker'],
};

export const projects = [
  {
    id: 'hidrocolon',
    name: 'Sistema Hidrocolon',
    subtitle: 'Plataforma de Gestión Médica y Financiera',
    description:
      'Sistema integral para una clínica que unifica farmacia/inventario, ventas, turnos, control de caja, pacientes, comisiones por doctora, ganancias de laboratorios, libro de bancos y estado de resultados. Reemplazó procesos manuales en Excel por una plataforma con roles, permisos y reportes financieros automatizados.',
    stack: [
      'Node.js', 'MySQL', 'JWT', 'bcryptjs', 'Helmet',
      'Vue 3', 'Vite', 'Pinia', 'Tailwind CSS', 'Vercel', 'Railway',
    ],
    moduleCount: 18,
    year: '2025',
  },
  {
    id: 'srpu-landivar',
    name: 'Sistema SRPU — Universidad Rafael Landívar',
    subtitle: 'Plataforma de Gestión Académica',
    description:
      'Pendiente',
    stack: [
      'Node.js', 'TypeScript', 'MariaDB', 'JWT', 'bcryptjs', 'Docker',
    ],
    moduleCount: 18,
    year: '2025',
  },
  // Cuando tengas el contexto del segundo proyecto (equipo backend),
  // agrégalo aquí siguiendo esta misma estructura.
];

export const experience = [
  {
    id: 'hidrocolon-dev',
    company: 'Sistema Hidrocolon',
    role: 'Desarrollador Full Stack (proyecto independiente)',
    period: '2025 · 1 año de desarrollo',
    points: [
      'Diseñé y desarrollé desde cero más de 18 módulos backend y frontend según las necesidades operativas y financieras de la clínica.',
      'Reemplacé procesos manuales en Excel (reportes, pagos, caja) por flujos automatizados, reduciendo el tiempo operativo del personal administrativo.',
      'Implementé roles y permisos con autenticación JWT para trazabilidad y seguridad en operaciones financieras.',
    ],
  },
  {
    id: 'srpu-landivar',
    company: 'SRPU — Universidad Rafael Landívar',
    role: 'Backend Developer',
    period: '2025 · 4 meses',
    points: [
      'Formé parte de un equipo de backend, desarrollando migraciones, seeders y lógica de negocio según la estructura de base de datos existente.',
      'Traduje requerimientos de módulos específicos en implementación funcional, en colaboración con el equipo técnico.',
    ],
  },
  {
    id: 'docente',
    company: 'Docente de Programación — Nivel Medio',
    role: 'Docente',
    period: 'Actual',
    points: [
      'Enseño fundamentos de programación a estudiantes de nivel medio, reforzando habilidades de comunicación técnica y explicación de conceptos complejos.',
    ],
  },
];