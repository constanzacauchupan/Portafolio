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
    tecnologias: ["Astro", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Scrum", "Jira"],
    enlaces: [{ texto: "Ver código en GitHub", url: "https://github.com/punxovi/consultoria-informatica" }]
  },
  {
    titulo: "Dulce Gisela, app móvil",
    resumen: "Prototipo en Figma y app en Flutter para un negocio de repostería.",
    rol: "Product Owner",
    fecha: "Primer semestre 2026",
    premio: "Mejor Prototipo Digital",
    imagen: "img/dulce-gisela-app.webp",
    alt: "Tres pantallas del prototipo: bienvenida, inicio con productos y resumen del negocio",
    contexto: "Proyecto universitario para un negocio de repostería, trabajado en dos ramos: Ingeniería de Software y Desarrollo de Aplicaciones Móviles. El prototipo en Figma tiene una parte para clientes, con catálogo, carrito y pedidos, y otra para la administradora, con resumen de ventas, pedidos, productos y clientes. Con él ganamos el premio a Mejor Prototipo Digital, otorgado por los profesores.",
    aportes: [
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
      { texto: "Visitar dulcegisela.cl", url: "https://dulcegisela.cl" },
      { texto: "Ver código en GitHub", url: "https://github.com/constanzacauchupan/dulce_gisela" }
    ]
  },
  {
    titulo: "GreenControl, invernadero automático",
    resumen: "Prototipo con ESP32 que mide el ambiente y simula el control de ventilación y riego.",
    rol: "Proyecto en equipo, Especialidad III",
    fecha: "2026",
    imagen: "img/greencontrol.svg",
    tituloAportes: "Cómo funciona",
    alt: "Ilustración de la pantalla LCD, los LED y una planta",
    contexto: "Proyecto de invernadero inteligente del ramo Especialidad III. Lee temperatura y humedad del suelo, muestra los valores en una pantalla LCD y decide cuándo ventilar y cuándo regar. Dos LED simulan el ventilador y la bomba.",
    aportes: [
      "El ventilador se activa según la temperatura que mide el sensor DHT11.",
      "La bomba enciende con 30 % de humedad del suelo y se apaga con 35 %.",
      "Usar dos umbrales evita que los equipos se prendan y apaguen a cada rato.",
      "Entrega las lecturas en formato CSV cada dos segundos."
    ],
    tecnologias: ["ESP32", "Arduino", "C++", "DHT11", "LCD I2C"]
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

/* Lista corta, para trabajos más pequeños. */
const OTROS = [
  {
    titulo: "App de registro de usuarios",
    resumen: "Lista, formulario con validaciones, perfil y configuración. Trabajo en equipo, abril 2026.",
    tecnologias: ["Flutter", "Dart"],
    url: "https://github.com/constanzacauchupan/Solemne-desarrollo-movil"
  },
  {
    titulo: "Formulario móvil con validación",
    resumen: "Laboratorio en equipo, abril 2026.",
    tecnologias: ["Flutter", "Dart"],
    url: "https://github.com/constanzacauchupan/lab02_formulario"
  }
];
