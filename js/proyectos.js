/*
  TUS PROYECTOS
  -------------
  Para agregar uno: copia un bloque { ... }, pégalo en la lista y cambia los textos.
  El primero de la lista sale destacado en grande.

  imagen : archivo dentro de la carpeta img/ (ideal 1280 x 800, .webp o .jpg)
  rol, premio, fecha, enlaces : son opcionales; si no van, bórralos.
*/
const PROYECTOS = [
  {
    titulo: "Plataforma Fundación Gestionar Esperanzas",
    resumen: "Plataforma web para acompañar a organizaciones comunitarias de Chile, Argentina y Uruguay.",
    rol: "Product Owner y frontend",
    fecha: "Ago. – nov. 2026",
    premio: "Equipo ganador de Consultoría Informática 2026",
    imagen: "img/fge-login.webp",
    alt: "Pantalla de inicio de sesión de la plataforma",
    contexto: "La plataforma reúne en un solo lugar las organizaciones, programas, planes de intervención, acciones, actas, donaciones y reportes de la fundación. La construimos en equipo con Scrum, en nueve sprints, como proyecto de consultoría informática.",
    aportes: [
      "Fui Product Owner del equipo.",
      "Desarrollé interfaces en Astro: organizaciones, programas, planes y acciones, actas de reunión y dashboard.",
      "También trabajé en la gestión de países, las coberturas de coordinadores y las solicitudes de acceso de invitados.",
      "El equipo usó microservicios en Node.js, con Supabase (PostgreSQL) como base de datos."
    ],
    tecnologias: ["Astro", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Scrum", "Jira"]
  },
  {
    titulo: "Dulce Gisela, app móvil",
    resumen: "Prototipo en Figma y app en Flutter para un negocio de repostería.",
    rol: "Product Owner y diseño en Figma",
    fecha: "Primer semestre 2026",
    premio: "Mejor Prototipo Digital",
    imagen: "img/dulce-gisela-app.webp",
    alt: "Tres pantallas del prototipo: bienvenida, inicio con productos y resumen del negocio",
    contexto: "Proyecto universitario para un negocio de repostería, trabajado en dos ramos: Ingeniería de Software y Desarrollo de Aplicaciones Móviles. El prototipo en Figma tiene una parte para clientes, con catálogo, carrito y pedidos, y otra para la administradora, con resumen de ventas, pedidos, productos y clientes. Con él ganamos el premio a Mejor Prototipo Digital, otorgado por los profesores.",
    aportes: [
      "Diseñé casi todo el prototipo en Figma.",
      "Preparé requerimientos, documentación y diagramas.",
      "Fui Product Owner durante el desarrollo de la app en Flutter."
    ],
    tecnologias: ["Figma", "Flutter", "Dart", "Requerimientos", "Diagramas"]
  },
  {
    titulo: "Dulce Gisela, sitio web",
    resumen: "Página y catálogo en línea de una repostería de Maipú, publicada con dominio propio.",
    rol: "Diseño y desarrollo",
    fecha: "Nov. 2026",
    imagen: "img/dulce-gisela-web.webp",
    alt: "Portada del sitio web de Dulce Gisela",
    contexto: "Sitio del emprendimiento Dulce Gisela, con su historia, el catálogo con precios y pedidos por WhatsApp.",
    aportes: [
      "Hice un catálogo con buscador y filtros por categoría.",
      "Preparé los datos para Google y la vista previa al compartir el enlace.",
      "Lo publiqué en el dominio dulcegisela.cl."
    ],
    tecnologias: ["HTML", "CSS", "JavaScript", "SEO", "GitHub"],
    enlaces: [
      { texto: "Visitar dulcegisela.cl", url: "https://dulcegisela.cl" }
    ]
  },
  {
    titulo: "GreenControl, invernadero automático",
    resumen: "Maqueta con ESP32 que mide el suelo y la temperatura, y decide cuándo regar y ventilar.",
    rol: "Montaje de la maqueta",
    fecha: "2026",
    imagen: "img/greencontrol.webp",
    alt: "Maqueta del invernadero con una planta, sensores, cables y pantalla LCD",
    contexto: "Proyecto final en equipo del ramo Especialidad III, Control y Automatización. Partimos de una pregunta: ¿puede un microcontrolador con sensores mantener la humedad y la temperatura de un mini invernadero sin intervención manual? En la maqueta, dos LED simulan la bomba y el ventilador.",
    aportes: [
      "Estuve a cargo del montaje de la maqueta.",
      "El sistema usa dos lazos de control: riego según la humedad del suelo y ventilación según la temperatura.",
      "Cada lazo tiene un umbral para encender y otro para apagar, así los equipos no se prenden y apagan a cada rato.",
      "Una pantalla LCD muestra las lecturas, que también se registran en el computador cada dos segundos."
    ],
    tecnologias: ["ESP32", "Arduino", "C++", "DHT11", "Control ON/OFF"]
  },
  {
    titulo: "Control de inventario para Barrio Chick'en",
    resumen: "Sistema web para manejar los insumos, proveedores y pedidos de un local de comida.",
    rol: "Equipo de desarrollo",
    fecha: "Primer semestre 2025",
    imagen: "img/barrio-chicken.webp",
    alt: "Pantalla de productos con stock, proveedor y fecha de caducidad",
    contexto: "Proyecto del ramo Análisis y Modelamiento de Sistemas. El local no tenía un sistema central para su inventario y registraba a sus proveedores de forma manual o dispersa. Éramos ocho personas y trabajamos con Scrum en tres sprints, de marzo a junio de 2025.",
    aportes: [
      "Sprint 1: programé, en pareja, funciones del inventario.",
      "Sprint 2: añadí, también en pareja, las funciones de registro de proveedores.",
      "Sprint 3: trabajé en el filtro por categoría, que muestra los proveedores e insumos que corresponden al crear un pedido.",
      "Participé en la planificación, las pruebas y las retrospectivas de cada sprint."
    ],
    tecnologias: ["Scrum", "Historias de usuario", "Criterios de aceptación", "Product Backlog", "Desarrollo web"]
  }
];

/*
  OTROS PROYECTOS: salen en una lista debajo de los principales.
  Si tienen "contexto" se abren con su detalle; si tienen "url", llevan a ese enlace; si no, se muestran como texto.
  Para hacer principal uno de estos, mueve su bloque a la lista de arriba.
*/
const OTROS = [
  {
    titulo: "Ciberseguridad para una plataforma de viajes con IA",
    resumen: "Plan de seguridad y continuidad para una plataforma que crea itinerarios con inteligencia artificial.",
    rol: "Frontend y calidad",
    fecha: "Nov. 2026",
    imagen: "img/riesgos.svg",
    alt: "Ilustración de un escudo y una matriz de riesgos de probabilidad por impacto",
    contexto: "Informe final en equipo del ramo Arquitectura Empresarial y Liderazgo. La plataforma, en etapa de prototipo, usa Flutter, Firebase y una API externa de IA. El informe reúne la gestión de seguridad, basada en ISO/IEC 27001, y la continuidad operacional, con ISO 22301 como referencia.",
    aportes: [
      "Mi rol en el equipo fue frontend y calidad: pruebas funcionales y de autorización, evidencias y criterios de aceptación.",
      "Quedé como responsable del control de acceso a los datos y de probar las reglas de Firestore.",
      "El equipo evaluó ocho riesgos críticos. Con los controles propuestos, ninguno queda en ese nivel.",
      "El plan define qué recuperar primero y en cuánto tiempo: entre 2 y 8 horas según el proceso."
    ],
    tecnologias: ["ISO/IEC 27001", "ISO 22301", "Gestión de riesgos", "BIA", "Firebase"]
  },
  {
    titulo: "Infraestructura cloud para análisis minero",
    resumen: "Plan de implementación, gobierno y monitoreo de una plataforma cloud de alto rendimiento.",
    rol: "Trabajo en equipo",
    fecha: "Primer semestre 2026",
    imagen: "img/nube.svg",
    tituloAportes: "Qué incluye",
    alt: "Ilustración de una nube conectada a una red privada con aplicación, cómputo y datos",
    contexto: "Proyecto de tres personas para el ramo Infraestructura y Servicios Cloud. El caso es GeoMining Analytics, una empresa que procesa datos geoespaciales de faenas mineras. La meta del diseño es bajar sus simulaciones de 48 horas a menos de 3.",
    aportes: [
      "Roles del proyecto y matriz RACI.",
      "Metodología híbrida Scrum y Kanban, con cuatro fases de implementación.",
      "Matriz de riesgos y políticas de infraestructura como código y control de cambios con Git.",
      "KPI técnicos y de negocio, OKR y una estrategia de monitoreo."
    ],
    tecnologias: ["Cloud", "Kubernetes", "Docker", "Zero Trust", "KPI y OKR"]
  },
  {
    titulo: "Gestión de incidencias municipales",
    resumen: "Aplicación web para solicitudes de vecinos, encuestas y cuadrillas municipales.",
    rol: "Desarrolladora",
    fecha: "Segundo semestre 2025",
    imagen: "img/incidencias.svg",
    alt: "Ilustración de tres paneles: departamento, territorial y cuadrilla",
    contexto: "Proyecto en equipo del ramo Desarrollo Web. Cada rol tiene su panel y hay un flujo para aprobar y responder las incidencias.",
    aportes: [
      "Trabajé en los modelos de datos, la plantilla base y las vistas principales.",
      "Hice formularios y filtros de listados.",
      "Participé en los paneles por rol: departamento, territorial y cuadrilla."
    ],
    tecnologias: ["Django", "Python", "HTML", "CSS", "JavaScript"]
  },
  {
    titulo: "Bicicleta Arduino con sistema de monitoreo",
    resumen: "Bicicleta armada con un kit de Arduino y un sistema que envía, procesa y muestra datos de sensores.",
    rol: "Trabajo en equipo",
    fecha: "Ago. – nov. 2023",
    imagen: "img/bicicleta.webp",
    tituloAportes: "Las tres etapas",
    alt: "Bicicleta armada con el kit de ingeniería Arduino",
    contexto: "Proyecto de cuatro personas para el Taller de Aplicaciones Informáticas. Empezó con la bicicleta física y terminó con una página web que muestra lecturas de velocidad guardadas y datos de sensores simulados, con alertas visuales.",
    aportes: [
      "Etapa 1: armado de la bicicleta con el kit de ingeniería Arduino Rev2 y modelos de control en MATLAB y Simulink.",
      "Etapa 2: sistema en Python con dos sensores, un middleware, un servidor RPC y una aplicación cliente, conectados por UDP, TCP y RPC.",
      "Etapa 3: middleware en Node.js con Socket.IO y un cliente web que muestra los datos recibidos y procesados.",
      "El cliente de escritorio avisa con colores y sonido según la velocidad y la inclinación."
    ],
    tecnologias: ["Arduino", "MATLAB y Simulink", "Python", "Node.js", "UDP, TCP y RPC"]
  },
  {
    titulo: "App de registro de usuarios",
    resumen: "Lista, formulario con validaciones, perfil y configuración. Trabajo en equipo, abril 2026.",
    tecnologias: ["Flutter", "Dart"]
  },
  {
    titulo: "Formulario móvil con validación",
    resumen: "Laboratorio en equipo, abril 2026.",
    tecnologias: ["Flutter", "Dart"]
  }
];
