export type Competencia = {
  id: string;
  nombre: string;
  categoria: string;
  definicion: string;
  seleccion?: "General" | "Específica";
  distincion: "Esencial" | "Diferenciadora";
};

export const competencias: Competencia[] = [
  {
    id: "operativa",
    nombre: "Gestión operativa de instalaciones y recursos",
    categoria: "Logro y Acción",
    seleccion: "Específica",
    distincion: "Esencial",
    definicion:
      "Organizar y administrar las instalaciones, materiales y recursos del club, procurando su disponibilidad, correcto uso y aprovechamiento.",
  },
  {
    id: "administrativa",
    nombre: "Gestión administrativa y financiera",
    categoria: "Logro y Acción",
    seleccion: "Específica",
    distincion: "Esencial",
    definicion:
      "Organizar, registrar y controlar la información administrativa y económica, utilizar responsablemente los recursos y aportar información confiable para decidir.",
  },
  {
    id: "mejora",
    nombre: "Mejora continua",
    categoria: "Logro y Acción",
    distincion: "Diferenciadora",
    definicion:
      "Identificar oportunidades de mejora en tareas, procesos y servicios, y proponer alternativas que optimicen el funcionamiento de la organización.",
  },
  {
    id: "calidad",
    nombre: "Orientación a la calidad y seguridad",
    categoria: "Logro y Acción",
    seleccion: "General",
    distincion: "Esencial",
    definicion:
      "Trabajar con criterios de calidad, orden, higiene y seguridad, previniendo errores y situaciones que afecten a las personas, las instalaciones o el servicio.",
  },
  {
    id: "servicio",
    nombre: "Orientación al socio y al servicio",
    categoria: "Ayuda y Servicio",
    seleccion: "General",
    distincion: "Esencial",
    definicion:
      "Comprender las necesidades y expectativas de socios y clientes, y brindar una atención cordial, respetuosa y orientada a encontrar respuestas adecuadas.",
  },
  {
    id: "fidelizacion",
    nombre: "Atención y fidelización de socios y clientes",
    categoria: "Ayuda y Servicio",
    seleccion: "Específica",
    distincion: "Diferenciadora",
    definicion:
      "Generar una experiencia positiva, responder a consultas e inconvenientes y construir vínculos que favorezcan la permanencia de socios y clientes.",
  },
  {
    id: "comunicacion",
    nombre: "Comunicación efectiva",
    categoria: "Impacto e Influencia",
    seleccion: "General",
    distincion: "Esencial",
    definicion:
      "Transmitir y recibir información con claridad y respeto, adaptándola a cada persona y situación para favorecer la comprensión y evitar errores.",
  },
  {
    id: "marca",
    nombre: "Comunicación y difusión de marca",
    categoria: "Impacto e Influencia",
    seleccion: "Específica",
    distincion: "Diferenciadora",
    definicion:
      "Transmitir la identidad, las actividades y los servicios de Ágora de manera clara y atractiva mediante los distintos medios y canales.",
  },
  {
    id: "liderazgo",
    nombre: "Liderazgo y coordinación de equipos",
    categoria: "Gerenciales",
    seleccion: "Específica",
    distincion: "Diferenciadora",
    definicion:
      "Orientar, organizar y acompañar a un grupo de personas, favoreciendo su participación, cooperación y compromiso con los objetivos.",
  },
  {
    id: "equipo",
    nombre: "Trabajo en equipo y colaboración",
    categoria: "Gerenciales",
    seleccion: "General",
    distincion: "Esencial",
    definicion:
      "Trabajar con otras personas y áreas, compartiendo información, conocimientos y esfuerzos para alcanzar objetivos comunes y contribuir al clima de trabajo.",
  },
  {
    id: "planificacion",
    nombre: "Planificación",
    categoria: "Gerenciales",
    distincion: "Esencial",
    definicion:
      "Organizar anticipadamente tareas, tiempos y recursos, determinar prioridades y contemplar posibles dificultades para alcanzar los objetivos.",
  },
  {
    id: "supervision",
    nombre: "Capacidad de supervisión",
    categoria: "Gerenciales",
    distincion: "Esencial",
    definicion:
      "Realizar el seguimiento de tareas y responsabilidades de otras personas, verificar su cumplimiento y brindar orientación cuando sea necesario.",
  },
  {
    id: "detalle",
    nombre: "Atención al detalle",
    categoria: "Cognoscitivas",
    distincion: "Esencial",
    definicion:
      "Observar y revisar cuidadosamente información, instalaciones, tareas o procedimientos para identificar errores, inconsistencias y riesgos para el resultado.",
  },
  {
    id: "problemas",
    nombre: "Resolución de problemas",
    categoria: "Cognoscitivas",
    distincion: "Diferenciadora",
    definicion:
      "Analizar una situación problemática, identificar sus posibles causas y evaluar alternativas para encontrar una solución adecuada.",
  },
  {
    id: "creativo",
    nombre: "Pensamiento creativo",
    categoria: "Cognoscitivas",
    distincion: "Diferenciadora",
    definicion:
      "Generar nuevas ideas y alternativas frente a problemas, necesidades u oportunidades, contribuyendo a propuestas y experiencias diferentes.",
  },
  {
    id: "adaptabilidad",
    nombre: "Adaptabilidad y flexibilidad",
    categoria: "Eficacia Personal",
    seleccion: "General",
    distincion: "Esencial",
    definicion:
      "Adaptarse positivamente a cambios e imprevistos, modificar la forma de actuar cuando resulte necesario y mantener los objetivos como referencia.",
  },
  {
    id: "tolerancia",
    nombre: "Tolerancia a la frustración y paciencia",
    categoria: "Eficacia Personal",
    distincion: "Esencial",
    definicion:
      "Mantener una actitud adecuada ante dificultades, presión o reclamos, evitando respuestas impulsivas que afecten al trabajo o a las relaciones.",
  },
  {
    id: "proactividad",
    nombre: "Proactividad",
    categoria: "Eficacia Personal",
    distincion: "Diferenciadora",
    definicion:
      "Tomar iniciativa, anticiparse a necesidades o dificultades y actuar dentro de las responsabilidades del puesto sin depender permanentemente de indicaciones.",
  },
];

export const niveles = [
  {
    numero: 1,
    nombre: "Inicial",
    texto: "Dominio inicial con apoyo y orientación frecuente.",
  },
  {
    numero: 2,
    nombre: "Esperado",
    texto: "Autonomía en situaciones habituales.",
  },
  {
    numero: 3,
    nombre: "Avanzado",
    texto: "Resolución de situaciones complejas, coordinación y mejora.",
  },
  {
    numero: 4,
    nombre: "Superior",
    texto: "Integración entre equipos o procesos y mejoras sostenidas.",
  },
];
