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
  backend: [
    'Node.js', 'NestJS', 'TypeScript', 'MySQL', 'MariaDB', 'TypeORM',
    'Python', 'JWT', 'bcryptjs', 'JavaScript',
  ],
  frontend: ['Vue 3', 'Vite', 'Consumo de APIs REST', 'Next.js'],
  tools: ['GitHub', 'Docker', 'Swagger', 'Jest'],
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
    name: 'SRPU — Universidad Rafael Landívar',
    subtitle: 'Sistema de Registro y Planificación Universitaria',
    description:
      'Trabajé en un equipo de 3 desarrolladores backend, distribuyendo el desarrollo de más de 40 módulos de dominio (actividades, facultades, campus, roles, criterios financieros y territoriales, entre otros). Fui responsable del manejo de migraciones de base de datos con TypeORM, asegurando la evolución controlada y versionada del esquema conforme el modelo de datos crecía. Contribuí al desarrollo backend general con NestJS y TypeScript en una arquitectura modular, colaborando en autenticación JWT, RBAC, verificación OTP y endpoints de analítica (dashboards, gráficos Sankey).',
    stack: [
      'NestJS', 'TypeScript', 'TypeORM', 'MySQL', 'JWT',
      'Swagger', 'Jest', 'Docker',
    ],
    moduleCount: 40,
    year: '2025',
  },
    {
    id: 'portfolio',
    name: 'Este Portfolio',
    subtitle: 'Sitio personal - Next.js y Taailwind CSS',
    description: 'Portfolio personal construido desde cero para presentar mi experiencia como backend developer. Diseñado con un sistema de componentes reutilizables (datos separados de la presentación), desplegado en Vercel con integración continua desde GitHub.',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel', 'JavaScript', 'Vercel'],
    year: '2026',
  }
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
    role: 'Backend Developer (equipo de 3 desarrolladores)',
    period: '2024 · 4 meses',
    points: [
      'Responsable del manejo de migraciones de base de datos con TypeORM, asegurando evolución controlada y versionada del esquema (MySQL) conforme crecía el modelo de datos.',
      'Contribuí al desarrollo backend con NestJS y TypeScript dentro de una arquitectura modular, implementando autenticación JWT, RBAC, verificación OTP y endpoints de analítica.',
      'Participé en un flujo de trabajo colaborativo: documentación de API con Swagger, pruebas e2e con Jest, y control de versiones en Git.',
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