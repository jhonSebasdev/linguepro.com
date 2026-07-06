import {
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Camera,
  Code2,
  FileSpreadsheet,
  Languages,
  Megaphone,
  MessageCircle,
  Palette,
  Sparkles,
  UsersRound,
  Video,
} from "lucide-react";

export const campusUrl = "https://campus.linguepro.com";
export const whatsappUrl = "https://wa.me/593000000000";

export const navItems = [
  ["Inicio", "/"],
  ["Cursos", "/cursos"],
  ["Blog", "/blog"],
  ["Live", "/live"],
  ["Precios", "/precios"],
  ["Contacto", "/contacto"],
];

export const schools = [
  {
    title: "English Academy",
    slug: "english-academy",
    description: "Rutas por nivel para hablar, escribir y comprender ingles con seguridad.",
    courses: 5,
    color: "from-red-500 to-rose-400",
    icon: Languages,
  },
  {
    title: "Programacion",
    slug: "programacion",
    description: "Bases de desarrollo web, logica y herramientas digitales para empezar.",
    courses: 4,
    color: "from-red-500 to-orange-500",
    icon: Code2,
  },
  {
    title: "Marketing Digital",
    slug: "marketing-digital",
    description: "Estrategia, contenido, embudos y crecimiento para marcas modernas.",
    courses: 3,
    color: "from-rose-500 to-red-600",
    icon: Megaphone,
  },
  {
    title: "Diseno",
    slug: "diseno",
    description: "Criterio visual, fotografia, video, maquillaje y comunicacion grafica.",
    courses: 4,
    color: "from-fuchsia-500 to-red-500",
    icon: Palette,
  },
  {
    title: "Negocios",
    slug: "negocios",
    description: "Excel, productividad, reportes y habilidades aplicadas al trabajo.",
    courses: 3,
    color: "from-amber-400 to-red-500",
    icon: BarChart3,
  },
  {
    title: "Habilidades Blandas",
    slug: "habilidades-blandas",
    description: "Comunicacion, liderazgo, inclusion y crecimiento profesional.",
    courses: 3,
    color: "from-red-500 to-indigo-500",
    icon: UsersRound,
  },
];

export const courses = [
  {
    title: "Ingles basico, intermedio y avanzado",
    category: "ingles",
    description: "Domina vocabulario, gramatica, listening y comprension con rutas por nivel.",
    duration: "12 a 24 semanas",
    level: "Todos los niveles",
    modality: "Online con tutorias",
    image: "/linguepro-logo.png",
    icon: Languages,
    tag: "Idiomas",
  },
  {
    title: "Ingles conversacional",
    category: "ingles",
    description: "Practica fluidez, pronunciacion y situaciones reales de comunicacion.",
    duration: "8 semanas",
    level: "Intermedio",
    modality: "Clases en vivo",
    image: "/linguepro-logo.png",
    icon: MessageCircle,
    tag: "Speaking",
  },
  {
    title: "Lengua de Señas",
    category: "habilidades",
    description: "Aprende comunicacion inclusiva con ejercicios visuales y practicos.",
    duration: "10 semanas",
    level: "Inicial",
    modality: "Campus virtual",
    image: "/linguepro-logo.png",
    icon: BadgeCheck,
    tag: "Inclusivo",
  },
  {
    title: "Maquillaje Profesional",
    category: "diseno",
    description: "Tecnicas aplicadas para rostro, colorimetria y portafolio profesional.",
    duration: "6 semanas",
    level: "Inicial",
    modality: "Online practico",
    image: "/linguepro-logo.png",
    icon: Sparkles,
    tag: "Creativo",
  },
  {
    title: "Excel aplicado",
    category: "negocios",
    description: "Hojas de calculo, formulas, dashboards y productividad empresarial.",
    duration: "5 semanas",
    level: "Basico a intermedio",
    modality: "Online guiado",
    image: "/linguepro-logo.png",
    icon: FileSpreadsheet,
    tag: "Oficina",
  },
  {
    title: "Fotografia digital",
    category: "diseno",
    description: "Composicion, luz, edicion y criterio visual para proyectos digitales.",
    duration: "6 semanas",
    level: "Inicial",
    modality: "Online practico",
    image: "/linguepro-logo.png",
    icon: Camera,
    tag: "Visual",
  },
  {
    title: "Produccion de video",
    category: "marketing",
    description: "Planifica, graba y edita piezas audiovisuales para redes y negocios.",
    duration: "7 semanas",
    level: "Intermedio",
    modality: "Online practico",
    image: "/linguepro-logo.png",
    icon: Video,
    tag: "Contenido",
  },
  {
    title: "Habilidades profesionales",
    category: "habilidades",
    description: "Comunica mejor, organiza tu trabajo y fortalece tu perfil laboral.",
    duration: "4 semanas",
    level: "Profesional",
    modality: "Microlearning",
    image: "/linguepro-logo.png",
    icon: BriefcaseBusiness,
    tag: "Carrera",
  },
  {
    title: "Fundamentos de programacion",
    category: "programacion",
    description: "Aprende logica, estructuras basicas y mentalidad tecnica desde cero.",
    duration: "8 semanas",
    level: "Inicial",
    modality: "Online guiado",
    image: "/linguepro-logo.png",
    icon: Code2,
    tag: "Tech",
  },
];

export const programs = courses;

export const benefits = [
  {
    title: "Rutas guiadas",
    description: "Aprende por niveles, con una secuencia clara de clases, practicas y evaluaciones.",
    icon: BookOpenCheck,
  },
  {
    title: "Campus 24/7",
    description: "Accede a materiales, tareas y recursos desde una plataforma virtual organizada.",
    icon: Video,
  },
  {
    title: "Certificacion",
    description: "Valida tu avance con certificados y evidencias de aprendizaje aplicables.",
    icon: BadgeCheck,
  },
  {
    title: "Acompanamiento",
    description: "Recibe orientacion academica para elegir ruta, resolver dudas y sostener tu ritmo.",
    icon: UsersRound,
  },
];

export const teachers = [
  {
    name: "Andrea Morales",
    role: "English Coach",
    bio: "Especialista en conversacion, pronunciacion y evaluacion por niveles.",
  },
  {
    name: "Carlos Vega",
    role: "Instructor de productividad",
    bio: "Forma estudiantes en Excel, reportes y habilidades digitales para oficina.",
  },
  {
    name: "Valeria Ruiz",
    role: "Mentora creativa",
    bio: "Acompana cursos de fotografia, video y comunicacion visual aplicada.",
  },
];

export const testimonials = [
  {
    name: "Daniela M.",
    role: "Estudiante de ingles",
    quote:
      "La plataforma me ayudo a avanzar por niveles sin perderme. Las actividades son claras y puedo estudiar despues del trabajo.",
  },
  {
    name: "Jorge P.",
    role: "Programa de Excel",
    quote:
      "Me gusto que las clases fueran practicas. En pocas semanas pude aplicar formulas y reportes en mi trabajo.",
  },
  {
    name: "Camila R.",
    role: "Lengua de Señas",
    quote:
      "El enfoque inclusivo se nota desde el primer modulo. Aprendi con recursos visuales y acompanamiento constante.",
  },
];

export const liveClasses = [
  {
    title: "Open Class: Ingles para entrevistas",
    status: "proxima",
    date: "15 Jun 2026",
    time: "19:00",
    instructor: "Andrea Morales",
    description: "Sesion gratuita para practicar respuestas, vocabulario y confianza.",
  },
  {
    title: "Workshop: video para redes",
    status: "proxima",
    date: "22 Jun 2026",
    time: "18:30",
    instructor: "Valeria Ruiz",
    description: "Aprende a planificar y producir contenido audiovisual con criterio.",
  },
  {
    title: "Excel para reportes semanales",
    status: "pasada",
    date: "08 Jun 2026",
    time: "19:00",
    instructor: "Carlos Vega",
    description: "Clase practica sobre tablas, formulas y visualizacion basica.",
  },
];

export const events = liveClasses;

export const blogPosts = [
  {
    title: "Como elegir tu ruta de aprendizaje online",
    category: "Aprendizaje",
    date: "12 May 2026",
    summary: "Criterios simples para escoger cursos, medir avance y estudiar con constancia.",
    featured: true,
  },
  {
    title: "Ingles conversacional: que practicar cada semana",
    category: "Ingles",
    date: "02 May 2026",
    summary: "Una guia para mejorar pronunciacion, vocabulario y fluidez con sesiones cortas.",
    featured: true,
  },
  {
    title: "Excel sigue siendo una habilidad clave",
    category: "Negocios",
    date: "25 Abr 2026",
    summary: "Por que las hojas de calculo siguen impulsando productividad en equipos modernos.",
    featured: false,
  },
  {
    title: "Clases en vivo que complementan el campus virtual",
    category: "Live",
    date: "18 Abr 2026",
    summary: "Como combinar contenido asincronico, practica guiada y comunidad.",
    featured: false,
  },
];

export const pricingPlans = [
  {
    name: "Basico",
    price: "$19",
    description: "Para empezar con una ruta y acceso al campus.",
    features: ["1 curso activo", "Materiales grabados", "Evaluaciones basicas", "Soporte por correo"],
  },
  {
    name: "Pro",
    price: "$39",
    description: "Para estudiantes que quieren acompanamiento y clases en vivo.",
    features: ["3 cursos activos", "Clases live mensuales", "Certificados", "Soporte academico"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$69",
    description: "Para avanzar con varias rutas y seguimiento personalizado.",
    features: ["Cursos ilimitados", "Mentorias grupales", "Prioridad en soporte", "Recursos descargables"],
  },
  {
    name: "Empresarial",
    price: "A medida",
    description: "Capacitacion para equipos, instituciones y empresas.",
    features: ["Rutas por equipo", "Reportes de avance", "Onboarding", "Gestion academica"],
  },
];

export const faqs = [
  ["Puedo estudiar desde el celular?", "Si. El sitio y el campus estan pensados para funcionar en desktop, tablet y movil."],
  ["Los cursos tienen certificado?", "Si. Los planes con certificacion incluyen evaluaciones y constancia digital."],
  ["Como ingreso a la plataforma?", "Desde el boton Iniciar sesion o Ir a la plataforma, conectado al campus virtual."],
];
