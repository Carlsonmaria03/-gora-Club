export type Criterio = { competencia: string; nivel: number; conducta: string };
export type Puesto = {
  id: string;
  nombre: string;
  area: string;
  reporta: string;
  personasACargo: string;
  sustitucion: string;
  objetivo: string;
  responsabilidades: string[];
  requisitos: { requisito: string; descripcion: string }[];
  perfil: (Criterio & { tipo: string; relevancia: number })[];
  entrevista: { competencia: string; pregunta: string }[];
  evaluacion: Criterio[];
};

export const puestos: Puesto[] = [
  {
    id: "rrhh",
    nombre: "Director/a de Recursos Humanos",
    area: "Recursos Humanos",
    reporta: "Dirección Operativa – COO",
    personasACargo: "3 responsables de procesos de Recursos Humanos",
    sustitucion: "Responsable de Atracción y Talento",
    objetivo:
      "Dirigir los procesos de Recursos Humanos de Ágora Club y asegurar que la incorporación, el desarrollo y la evaluación de las personas se encuentren alineados con la estrategia, la cultura y los valores de la organización.",
    responsabilidades: [
      "Planificar y coordinar reclutamiento, selección, inducción, capacitación y evaluación del desempeño.",
      "Asesorar a la Dirección y a los responsables de área en decisiones vinculadas con personas y equipos.",
      "Promover la cultura, el clima laboral, la comunicación interna y el sentido de pertenencia.",
      "Supervisar la administración de personal, documentación, beneficios y políticas internas.",
      "Analizar indicadores del área y proponer acciones de mejora y desarrollo.",
    ],
    requisitos: [
      {
        requisito: "Educación",
        descripcion:
          "Formación terciaria o universitaria en Recursos Humanos, Relaciones Laborales, Psicología Laboral, Administración o carreras afines.",
      },
      {
        requisito: "Experiencia",
        descripcion:
          "Experiencia mínima de tres años en distintas tareas de Recursos Humanos y en coordinación de equipos.",
      },
      {
        requisito: "Conocimientos",
        descripcion:
          "Legislación laboral básica, selección, capacitación, evaluación del desempeño, indicadores de gestión y herramientas informáticas.",
      },
      {
        requisito: "Habilidades y actitudes",
        descripcion:
          "Escucha, confidencialidad, análisis, mediación, organización, comunicación escrita y oral.",
      },
    ],
    perfil: [
      {
        competencia: "Orientación al socio y al servicio",
        tipo: "General",
        relevancia: 3,
        nivel: 2,
        conducta:
          "Atiende consultas habituales de colaboradores y responsables de área, identifica cómo afectan la atención a socios y verifica que la respuesta facilite el servicio.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Coordina tareas con la Dirección y las áreas del club, ayuda a llegar a acuerdos y resuelve diferencias para cumplir objetivos compartidos.",
      },
      {
        competencia: "Comunicación efectiva",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Explica los temas de Recursos Humanos según quién recibe el mensaje, escucha y conduce conversaciones difíciles con claridad.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        tipo: "General",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Acuerda criterios de calidad y prevención con las áreas, orienta a sus responsables y coordina mejoras para cuidar a colaboradores y socios.",
      },
      {
        competencia: "Adaptabilidad y flexibilidad",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Reorganiza las prioridades y los recursos de Recursos Humanos ante imprevistos, cuida la calidad del trabajo y orienta al equipo.",
      },
      {
        competencia: "Liderazgo y coordinación de equipos",
        tipo: "Específica",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Acuerda objetivos de Recursos Humanos con los responsables de otras áreas, acompaña la formación de referentes y sostiene criterios comunes de trabajo.",
      },
      {
        competencia: "Planificación",
        tipo: "Específica",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Organiza los planes, las prioridades y los recursos de distintas áreas para alcanzar los objetivos de Recursos Humanos y prever situaciones críticas.",
      },
      {
        competencia: "Resolución de problemas",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Analiza problemas complejos de Recursos Humanos, evalúa los riesgos y consulta a quienes corresponde antes de tomar una decisión.",
      },
      {
        competencia: "Mejora continua",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Analiza dificultades de los procesos de Recursos Humanos, propone ajustes con las áreas y comprueba si mejoran el trabajo.",
      },
      {
        competencia: "Proactividad",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Reconoce necesidades de Recursos Humanos antes de que se conviertan en problemas, propone soluciones posibles y revisa sus resultados.",
      },
    ],
    entrevista: [
      {
        competencia: "Liderazgo y coordinación de equipos",
        pregunta:
          "Contame una situación en la que tuviste que poner de acuerdo a responsables que pensaban distinto. ¿Cuál era tu tarea, qué hiciste y qué resultado obtuviste?",
      },
      {
        competencia: "Planificación",
        pregunta:
          "Relatá una experiencia en la que coordinaste simultáneamente selección, capacitación y administración de personal.",
      },
      {
        competencia: "Resolución de problemas",
        pregunta:
          "Describí una situación compleja entre colaboradores o áreas en la que debiste tomar una decisión.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        pregunta:
          "Contame una situación en la que detectaste un error o un riesgo en un proceso de Recursos Humanos. ¿Cuál era tu responsabilidad, qué hiciste y cómo verificaste su corrección?",
      },
      {
        competencia: "Mejora continua",
        pregunta:
          "Mencioná una mejora de Recursos Humanos que hayas impulsado. ¿Qué dificultad detectaste, qué cambiaste y qué resultado obtuviste?",
      },
    ],
    evaluacion: [
      {
        competencia: "Liderazgo y coordinación de equipos",
        nivel: 4,
        conducta:
          "Acuerda objetivos de Recursos Humanos con los responsables de otras áreas, acompaña la formación de referentes y sostiene criterios comunes de trabajo.",
      },
      {
        competencia: "Planificación",
        nivel: 4,
        conducta:
          "Organiza los planes, las prioridades y los recursos de distintas áreas para alcanzar los objetivos de Recursos Humanos y prever situaciones críticas.",
      },
      {
        competencia: "Resolución de problemas",
        nivel: 3,
        conducta:
          "Analiza problemas complejos de Recursos Humanos, evalúa los riesgos y consulta a quienes corresponde antes de tomar una decisión.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        nivel: 4,
        conducta:
          "Acuerda criterios de calidad y prevención con las áreas, orienta a sus responsables y coordina mejoras para cuidar a colaboradores y socios.",
      },
      {
        competencia: "Mejora continua",
        nivel: 3,
        conducta:
          "Analiza dificultades de los procesos de Recursos Humanos, propone ajustes con las áreas y comprueba si mejoran el trabajo.",
      },
    ],
  },
  {
    id: "operaciones",
    nombre: "Responsable de Operaciones y Servicios",
    area: "Operaciones y Servicios",
    reporta: "Dirección Operativa – COO",
    personasACargo: "4 supervisores o referentes operativos",
    sustitucion: "Supervisor/a senior de Operaciones",
    objetivo:
      "Coordinar el funcionamiento diario de las instalaciones y los servicios de Ágora Club, garantizando disponibilidad de espacios, uso adecuado de recursos, seguridad y continuidad operativa.",
    responsabilidades: [
      "Coordinar canchas, reservas, mantenimiento, limpieza, seguridad y disponibilidad de materiales.",
      "Organizar turnos, tareas y prioridades del personal operativo.",
      "Controlar estándares de orden, higiene, prevención y calidad del servicio.",
      "Resolver incidentes y articular respuestas con las demás áreas.",
      "Registrar resultados, necesidades y oportunidades de mejora operativa.",
    ],
    requisitos: [
      {
        requisito: "Educación",
        descripcion:
          "Estudios terciarios o técnicos en Gestión Operativa, Administración, Mantenimiento o áreas afines.",
      },
      {
        requisito: "Experiencia",
        descripcion:
          "Experiencia mínima de tres años en operaciones, mantenimiento, servicios o gestión de instalaciones.",
      },
      {
        requisito: "Conocimientos",
        descripcion:
          "Planificación operativa, seguridad e higiene, mantenimiento preventivo, reservas y control de recursos.",
      },
      {
        requisito: "Habilidades y actitudes",
        descripcion:
          "Organización, supervisión, análisis de riesgos, coordinación, negociación y respuesta ante imprevistos.",
      },
    ],
    perfil: [
      {
        competencia: "Orientación al socio y al servicio",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Se anticipa a las necesidades de socios y usuarios, adapta la respuesta y coordina mejoras en los servicios del club.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Coordina tareas con mantenimiento, limpieza, seguridad y las demás áreas, ayuda a llegar a acuerdos y resuelve diferencias para cumplir objetivos compartidos.",
      },
      {
        competencia: "Comunicación efectiva",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Explica los temas de instalaciones y servicios según quién recibe el mensaje, escucha y conduce conversaciones difíciles con claridad.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Coordina controles de calidad, orden y seguridad en las instalaciones, orienta al equipo y verifica la corrección de riesgos antes de continuar una actividad afectada.",
      },
      {
        competencia: "Adaptabilidad y flexibilidad",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Reorganiza las prioridades y los recursos de instalaciones y servicios ante imprevistos, cuida la calidad del trabajo y orienta al equipo.",
      },
      {
        competencia: "Gestión operativa de instalaciones y recursos",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Organiza la disponibilidad de instalaciones, materiales y mantenimiento, coordina su uso entre las áreas y resuelve faltantes para sostener los servicios.",
      },
      {
        competencia: "Planificación",
        tipo: "Específica",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Coordina los planes y recursos de distintas áreas para mantener servicios seguros y de calidad, y prevé situaciones que pueden interrumpirlos.",
      },
      {
        competencia: "Resolución de problemas",
        tipo: "Específica",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Resuelve situaciones críticas que afectan la seguridad o el funcionamiento de los servicios, reúne información de distintas fuentes y toma decisiones que involucran a varias áreas.",
      },
      {
        competencia: "Capacidad de supervisión",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Revisa el cumplimiento de las tareas de mantenimiento, limpieza y seguridad, orienta a sus responsables y verifica la corrección de desvíos.",
      },
      {
        competencia: "Proactividad",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Reconoce necesidades de instalaciones y servicios antes de que se conviertan en problemas, propone soluciones posibles y revisa sus resultados.",
      },
    ],
    entrevista: [
      {
        competencia: "Planificación",
        pregunta:
          "Contame una situación en la que organizaste personal, instalaciones y recursos para una jornada de alta demanda.",
      },
      {
        competencia: "Resolución de problemas",
        pregunta:
          "Describí un incidente operativo que exigió una respuesta rápida. ¿Qué decidiste y con qué resultado?",
      },
      {
        competencia: "Capacidad de supervisión",
        pregunta:
          "Relatá una experiencia en la que revisaste tareas de mantenimiento, limpieza o seguridad y detectaste un incumplimiento. ¿Cómo orientaste al equipo y verificaste la corrección?",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        pregunta:
          "Contame una situación en la que detectaste una condición insegura o un problema de calidad. ¿Qué responsabilidad tenías, qué hiciste antes de continuar la actividad y cuál fue el resultado?",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        pregunta:
          "Contame cómo coordinaste con otras áreas para sostener un servicio o actividad. ¿Cuál fue tu aporte?",
      },
    ],
    evaluacion: [
      {
        competencia: "Planificación",
        nivel: 4,
        conducta:
          "Coordina los planes y recursos de distintas áreas para mantener servicios seguros y de calidad, y prevé situaciones que pueden interrumpirlos.",
      },
      {
        competencia: "Resolución de problemas",
        nivel: 4,
        conducta:
          "Resuelve situaciones críticas que afectan la seguridad o el funcionamiento de los servicios, reúne información de distintas fuentes y toma decisiones que involucran a varias áreas.",
      },
      {
        competencia: "Capacidad de supervisión",
        nivel: 3,
        conducta:
          "Revisa el cumplimiento de las tareas de mantenimiento, limpieza y seguridad, orienta a sus responsables y verifica la corrección de desvíos.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        nivel: 3,
        conducta:
          "Coordina controles de calidad, orden y seguridad en las instalaciones, orienta al equipo y verifica la corrección de riesgos antes de continuar una actividad afectada.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        nivel: 3,
        conducta:
          "Coordina tareas con mantenimiento, limpieza, seguridad y las demás áreas, ayuda a llegar a acuerdos y resuelve diferencias para cumplir objetivos compartidos.",
      },
    ],
  },
  {
    id: "comercial",
    nombre: "Responsable Comercial y de Marketing",
    area: "Comercial y Marketing",
    reporta: "Dirección Operativa – COO",
    personasACargo: "3 colaboradores del área y coordinación con agencias",
    sustitucion: "Analista senior de Marketing",
    objetivo:
      "Planificar y coordinar las acciones comerciales y de comunicación de Ágora Club para fortalecer la marca, atraer nuevos socios y favorecer la permanencia de los actuales.",
    responsabilidades: [
      "Diseñar campañas, promociones y acciones comerciales alineadas con la identidad del club.",
      "Gestionar redes, membresías, alianzas y canales de comunicación.",
      "Analizar mercado, públicos, resultados de campañas e indicadores comerciales.",
      "Coordinar acciones con Comunidad, Eventos y Experiencias y con Gastronomía.",
      "Proponer mejoras en la experiencia y la fidelización de socios y clientes.",
    ],
    requisitos: [
      {
        requisito: "Educación",
        descripcion:
          "Formación terciaria o universitaria en Marketing, Comercialización, Comunicación, Publicidad o carreras afines.",
      },
      {
        requisito: "Experiencia",
        descripcion:
          "Experiencia mínima de dos años en ventas, marketing, comunicación o gestión comercial, preferentemente en servicios.",
      },
      {
        requisito: "Conocimientos",
        descripcion:
          "Marketing digital, redes sociales, métricas, campañas, investigación de mercado y herramientas de diseño o gestión.",
      },
      {
        requisito: "Habilidades y actitudes",
        descripcion:
          "Redacción, análisis, negociación, creatividad aplicada, presentación de propuestas y manejo de información.",
      },
    ],
    perfil: [
      {
        competencia: "Orientación al socio y al servicio",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Se anticipa a las necesidades y preferencias de socios y posibles clientes, adapta las propuestas comerciales y coordina mejoras en la atención.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        tipo: "General",
        relevancia: 3,
        nivel: 2,
        conducta:
          "Comparte información y cumple los acuerdos de trabajo con Comunidad, Eventos, Gastronomía y proveedores en situaciones habituales.",
      },
      {
        competencia: "Comunicación efectiva",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Adapta los mensajes de las campañas a sus destinatarios, escucha y conduce conversaciones difíciles con claridad.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        tipo: "General",
        relevancia: 3,
        nivel: 2,
        conducta:
          "Verifica que las campañas informen condiciones y servicios disponibles, consulta las dudas con el área responsable y corrige datos antes de difundirlos.",
      },
      {
        competencia: "Adaptabilidad y flexibilidad",
        tipo: "General",
        relevancia: 3,
        nivel: 3,
        conducta:
          "Reorganiza las prioridades y los recursos de las campañas ante imprevistos, cuida la calidad del trabajo y orienta al equipo.",
      },
      {
        competencia: "Comunicación y difusión de marca",
        tipo: "Específica",
        relevancia: 3,
        nivel: 2,
        conducta:
          "Adapta los mensajes del club a los canales habituales, comunica su identidad y verifica la información antes de difundirla.",
      },
      {
        competencia: "Planificación",
        tipo: "Específica",
        relevancia: 3,
        nivel: 3,
        conducta:
          "Planifica las campañas, coordina recursos y tareas entre las áreas y prevé imprevistos que pueden afectar los plazos.",
      },
      {
        competencia: "Resolución de problemas",
        tipo: "Específica",
        relevancia: 3,
        nivel: 2,
        conducta:
          "Identifica las causas de problemas habituales en las campañas, compara opciones y decide dentro de sus responsabilidades.",
      },
      {
        competencia: "Atención y fidelización de socios y clientes",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Analiza consultas y reclamos, coordina respuestas y realiza seguimiento del vínculo con los socios para proponer acciones de permanencia.",
      },
      {
        competencia: "Proactividad",
        tipo: "Específica",
        relevancia: 3,
        nivel: 3,
        conducta:
          "Reconoce oportunidades comerciales, propone acciones posibles y comprueba sus resultados.",
      },
    ],
    entrevista: [
      {
        competencia: "Orientación al socio y al servicio",
        pregunta:
          "Contame una acción comercial que mejoraste a partir de lo que necesitaban los clientes.",
      },
      {
        competencia: "Comunicación y difusión de marca",
        pregunta:
          "Describí una campaña o propuesta que tuviste que presentar a públicos diferentes. ¿Cómo mantuviste la identidad de la organización y qué resultado obtuviste?",
      },
      {
        competencia: "Atención y fidelización de socios y clientes",
        pregunta:
          "Relatá una acción de seguimiento de consultas o reclamos que ayudó a sostener el vínculo con clientes. ¿Qué hiciste y qué resultado obtuviste?",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        pregunta:
          "Contame una propuesta comercial que tuviste que corregir porque no coincidía con la disponibilidad o las condiciones del servicio. ¿Cómo lo verificaste y qué ocurrió después?",
      },
      {
        competencia: "Planificación",
        pregunta:
          "Contame cómo organizaste una campaña con plazos, presupuesto y participación de otras áreas.",
      },
    ],
    evaluacion: [
      {
        competencia: "Orientación al socio y al servicio",
        nivel: 3,
        conducta:
          "Se anticipa a las necesidades y preferencias de socios y posibles clientes, adapta las propuestas comerciales y coordina mejoras en la atención.",
      },
      {
        competencia: "Comunicación y difusión de marca",
        nivel: 2,
        conducta:
          "Adapta los mensajes del club a los canales habituales, comunica su identidad y verifica la información antes de difundirla.",
      },
      {
        competencia: "Atención y fidelización de socios y clientes",
        nivel: 3,
        conducta:
          "Analiza consultas y reclamos, coordina respuestas y realiza seguimiento del vínculo con los socios para proponer acciones de permanencia.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        nivel: 2,
        conducta:
          "Verifica que las campañas informen condiciones y servicios disponibles, consulta las dudas con el área responsable y corrige datos antes de difundirlos.",
      },
      {
        competencia: "Planificación",
        nivel: 3,
        conducta:
          "Planifica las campañas, coordina recursos y tareas entre las áreas y prevé imprevistos que pueden afectar los plazos.",
      },
    ],
  },
  {
    id: "gastronomia",
    nombre: "Responsable de Gastronomía y Experiencia del Cliente",
    area: "Gastronomía y Experiencia del Cliente",
    reporta: "Dirección Operativa – COO",
    personasACargo: "3 referentes de bar, cocina y atención",
    sustitucion: "Coordinador/a de Gastronomía",
    objetivo:
      "Coordinar el funcionamiento del área gastronómica y la atención al público para brindar una experiencia de calidad, segura y coherente con la propuesta social y recreativa de Ágora Club.",
    responsabilidades: [
      "Coordinar bar, cocina, atención al cliente y servicio durante actividades y eventos.",
      "Supervisar presentación, calidad, higiene y cumplimiento de procedimientos.",
      "Organizar personal, insumos, turnos y recursos según la demanda.",
      "Resolver reclamos e inconvenientes y verificar la respuesta brindada.",
      "Coordinar con otras áreas acciones que mejoren la experiencia del cliente.",
    ],
    requisitos: [
      {
        requisito: "Educación",
        descripcion:
          "Estudios secundarios completos y formación técnica o cursos en gastronomía, hotelería, administración o atención al cliente.",
      },
      {
        requisito: "Experiencia",
        descripcion:
          "Experiencia mínima de dos años en gastronomía, atención al público y coordinación de equipos o servicios.",
      },
      {
        requisito: "Conocimientos",
        descripcion:
          "Buenas prácticas de manipulación, higiene, control de stock, servicio al cliente y organización de eventos.",
      },
      {
        requisito: "Habilidades y actitudes",
        descripcion:
          "Coordinación, escucha, manejo de reclamos, control, organización y comunicación interpersonal.",
      },
    ],
    perfil: [
      {
        competencia: "Orientación al socio y al servicio",
        tipo: "General",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Define criterios de atención a partir de las necesidades de los clientes, usa información sobre su satisfacción y coordina con otras áreas mejoras en la experiencia gastronómica.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Coordina tareas con bar, cocina, atención y las áreas que participan en cada actividad, ayuda a llegar a acuerdos y resuelve diferencias para cumplir objetivos compartidos.",
      },
      {
        competencia: "Comunicación efectiva",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Explica los temas del servicio gastronómico según quién recibe el mensaje, escucha y conduce conversaciones difíciles con claridad.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Coordina controles de calidad, higiene y seguridad del servicio gastronómico, orienta al equipo y verifica la corrección de desvíos antes de continuar una prestación afectada.",
      },
      {
        competencia: "Adaptabilidad y flexibilidad",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Reorganiza las prioridades y los recursos del servicio gastronómico ante imprevistos, cuida la calidad de la atención y orienta al equipo.",
      },
      {
        competencia: "Liderazgo y coordinación de equipos",
        tipo: "Específica",
        relevancia: 3,
        nivel: 3,
        conducta:
          "Distribuye las responsabilidades del servicio gastronómico, da devoluciones y acompaña al equipo para que pueda resolver situaciones complejas con autonomía.",
      },
      {
        competencia: "Planificación",
        tipo: "Específica",
        relevancia: 3,
        nivel: 3,
        conducta:
          "Planifica el servicio gastronómico, coordina los recursos y las tareas relacionadas y prevé imprevistos que pueden afectar los plazos.",
      },
      {
        competencia: "Resolución de problemas",
        tipo: "Específica",
        relevancia: 3,
        nivel: 3,
        conducta:
          "Analiza problemas complejos del servicio gastronómico, evalúa los riesgos y consulta a quienes corresponde antes de decidir.",
      },
      {
        competencia: "Atención al detalle",
        tipo: "Específica",
        relevancia: 3,
        nivel: 2,
        conducta:
          "Revisa pedidos, insumos y condiciones de presentación e higiene, detecta errores habituales y comprueba su corrección antes del servicio.",
      },
      {
        competencia: "Atención y fidelización de socios y clientes",
        tipo: "Específica",
        relevancia: 3,
        nivel: 3,
        conducta:
          "Coordina la respuesta a consultas y reclamos, realiza seguimiento de los acuerdos y propone mejoras que favorezcan la continuidad del vínculo con socios y clientes.",
      },
    ],
    entrevista: [
      {
        competencia: "Orientación al socio y al servicio",
        pregunta:
          "Contame una situación en la que recibiste un reclamo importante. ¿Qué hiciste y qué resultado obtuviste?",
      },
      {
        competencia: "Liderazgo y coordinación de equipos",
        pregunta:
          "Describí cómo organizaste a un equipo durante un momento de alta demanda.",
      },
      {
        competencia: "Resolución de problemas",
        pregunta:
          "Relatá un inconveniente de calidad, higiene o servicio que necesitó una decisión inmediata.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        pregunta:
          "Contame una situación en la que detectaste un problema de calidad, higiene o seguridad en un servicio gastronómico. ¿Qué responsabilidad tenías, qué hiciste y cómo verificaste la corrección?",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        pregunta:
          "Mencioná una experiencia en la que coordinaste gastronomía con eventos u otra área.",
      },
    ],
    evaluacion: [
      {
        competencia: "Orientación al socio y al servicio",
        nivel: 4,
        conducta:
          "Define criterios de atención a partir de las necesidades de los clientes, usa información sobre su satisfacción y coordina con otras áreas mejoras en la experiencia gastronómica.",
      },
      {
        competencia: "Liderazgo y coordinación de equipos",
        nivel: 3,
        conducta:
          "Distribuye las responsabilidades del servicio gastronómico, da devoluciones y acompaña al equipo para que pueda resolver situaciones complejas con autonomía.",
      },
      {
        competencia: "Resolución de problemas",
        nivel: 3,
        conducta:
          "Analiza problemas complejos del servicio gastronómico, evalúa los riesgos y consulta a quienes corresponde antes de decidir.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        nivel: 3,
        conducta:
          "Coordina controles de calidad, higiene y seguridad del servicio gastronómico, orienta al equipo y verifica la corrección de desvíos antes de continuar una prestación afectada.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        nivel: 3,
        conducta:
          "Coordina tareas con bar, cocina, atención y las áreas que participan en cada actividad, ayuda a llegar a acuerdos y resuelve diferencias para cumplir objetivos compartidos.",
      },
    ],
  },
  {
    id: "comunidad",
    nombre: "Responsable de Comunidad, Eventos y Experiencias",
    area: "Comunidad, Eventos y Experiencias",
    reporta: "Dirección Operativa – COO",
    personasACargo: "3 coordinadores o referentes de actividades",
    sustitucion: "Coordinador/a de Eventos",
    objetivo:
      "Diseñar y coordinar actividades deportivas, culturales, recreativas y sociales que fortalezcan la participación, los vínculos y el sentido de comunidad en Ágora Club.",
    responsabilidades: [
      "Planificar el calendario de torneos, eventos, encuentros y experiencias para distintos públicos.",
      "Coordinar proveedores, espacios, materiales, cronogramas y equipos participantes.",
      "Articular la comunicación de actividades con Comercial y Marketing.",
      "Acompañar a socios y participantes antes, durante y después de cada actividad.",
      "Evaluar resultados, satisfacción y oportunidades para mejorar futuras experiencias.",
    ],
    requisitos: [
      {
        requisito: "Educación",
        descripcion:
          "Formación terciaria o universitaria en Organización de Eventos, Gestión Deportiva, Turismo, Comunicación, Recreación o carreras afines.",
      },
      {
        requisito: "Experiencia",
        descripcion:
          "Experiencia mínima de dos años en producción de eventos, actividades deportivas, culturales o comunitarias.",
      },
      {
        requisito: "Conocimientos",
        descripcion:
          "Planificación de eventos, presupuestos, proveedores, seguridad, logística y comunicación con públicos.",
      },
      {
        requisito: "Habilidades y actitudes",
        descripcion:
          "Coordinación, negociación, creatividad aplicada, organización, manejo de imprevistos y atención al público.",
      },
    ],
    perfil: [
      {
        competencia: "Orientación al socio y al servicio",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Se anticipa a las necesidades de socios y participantes, adapta la respuesta y coordina mejoras en las actividades del club.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        tipo: "General",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Logra acuerdos entre las áreas del club, los proveedores y otras personas que participan, considera sus distintas miradas y mantiene la cooperación ante situaciones complejas.",
      },
      {
        competencia: "Comunicación efectiva",
        tipo: "General",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Explica los temas de eventos y actividades según quién recibe el mensaje, escucha y conduce conversaciones difíciles con claridad.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        tipo: "General",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Integra controles de calidad y seguridad en los eventos, acuerda responsabilidades entre áreas y verifica la resolución de desvíos antes de habilitar actividades.",
      },
      {
        competencia: "Adaptabilidad y flexibilidad",
        tipo: "General",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Prevé cambios que pueden afectar los eventos, prepara alternativas y organiza al equipo para sostener los resultados.",
      },
      {
        competencia: "Liderazgo y coordinación de equipos",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Distribuye las responsabilidades de eventos y actividades, da devoluciones y acompaña al equipo para que pueda resolver situaciones complejas con autonomía.",
      },
      {
        competencia: "Planificación",
        tipo: "Específica",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Coordina los planes, las prioridades y los recursos de distintas áreas para realizar actividades de calidad y prevé situaciones que pueden afectar la participación o la satisfacción.",
      },
      {
        competencia: "Resolución de problemas",
        tipo: "Específica",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Resuelve situaciones críticas que afectan los eventos, reúne información de distintas fuentes y toma decisiones que involucran a varias áreas para cuidar la participación y la calidad.",
      },
      {
        competencia: "Pensamiento creativo",
        tipo: "Específica",
        relevancia: 4,
        nivel: 3,
        conducta:
          "Genera alternativas para las actividades, combina los aportes del equipo y adapta las ideas a los públicos y recursos del club.",
      },
      {
        competencia: "Proactividad",
        tipo: "Específica",
        relevancia: 4,
        nivel: 4,
        conducta:
          "Detecta oportunidades de mejora para los eventos, organiza recursos y logra que las mejoras se incorporen al trabajo habitual de las áreas participantes.",
      },
    ],
    entrevista: [
      {
        competencia: "Planificación",
        pregunta:
          "Contame cómo planificaste un evento con cronograma, proveedores, recursos y participantes.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        pregunta:
          "Describí una actividad en la que necesitaste coordinar varias áreas o personas externas al club.",
      },
      {
        competencia: "Resolución de problemas",
        pregunta:
          "Relatá un imprevisto durante un evento y explicá cómo lo resolviste.",
      },
      {
        competencia: "Proactividad",
        pregunta:
          "Mencioná una experiencia o actividad nueva que hayas propuesto e implementado.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        pregunta:
          "Contame una actividad en la que tuviste que coordinar controles de calidad o seguridad con otras áreas. ¿Qué desvío encontraron, qué hiciste antes de habilitarla y cuál fue el resultado?",
      },
    ],
    evaluacion: [
      {
        competencia: "Planificación",
        nivel: 4,
        conducta:
          "Coordina los planes, las prioridades y los recursos de distintas áreas para realizar actividades de calidad y prevé situaciones que pueden afectar la participación o la satisfacción.",
      },
      {
        competencia: "Trabajo en equipo y colaboración",
        nivel: 4,
        conducta:
          "Logra acuerdos entre las áreas del club, los proveedores y otras personas que participan, considera sus distintas miradas y mantiene la cooperación ante situaciones complejas.",
      },
      {
        competencia: "Resolución de problemas",
        nivel: 4,
        conducta:
          "Resuelve situaciones críticas que afectan los eventos, reúne información de distintas fuentes y toma decisiones que involucran a varias áreas para cuidar la participación y la calidad.",
      },
      {
        competencia: "Proactividad",
        nivel: 4,
        conducta:
          "Detecta oportunidades de mejora para los eventos, organiza recursos y logra que las mejoras se incorporen al trabajo habitual de las áreas participantes.",
      },
      {
        competencia: "Orientación a la calidad y seguridad",
        nivel: 4,
        conducta:
          "Integra controles de calidad y seguridad en los eventos, acuerda responsabilidades entre áreas y verifica la resolución de desvíos antes de habilitar actividades.",
      },
    ],
  },
];
