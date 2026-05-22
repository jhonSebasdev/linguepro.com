import {
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  FileSpreadsheet,
  Languages,
  MessageCircle,
  Sparkles,
  Video,
} from "lucide-react";

export const campusUrl = "https://campus.linguepro.com";

export const programs = [
  {
    title: "Ingles basico, intermedio y avanzado",
    description: "Domina vocabulario, gramatica y comprension con rutas por nivel.",
    duration: "12 a 24 semanas",
    modality: "Online con tutorias",
    icon: Languages,
    tag: "Idiomas",
  },
  {
    title: "Ingles conversacional",
    description: "Practica fluidez, pronunciacion y situaciones reales de comunicacion.",
    duration: "8 semanas",
    modality: "Clases en vivo",
    icon: MessageCircle,
    tag: "Speaking",
  },
  {
    title: "Lengua de Senas",
    description: "Aprende comunicacion inclusiva con ejercicios visuales y practicos.",
    duration: "10 semanas",
    modality: "Campus virtual",
    icon: BadgeCheck,
    tag: "Inclusivo",
  },
  {
    title: "Maquillaje Profesional",
    description: "Tecnicas aplicadas para rostro, colorimetria y portafolio profesional.",
    duration: "6 semanas",
    modality: "Online practico",
    icon: Sparkles,
    tag: "Creativo",
  },
  {
    title: "Excel",
    description: "Hojas de calculo, formulas, dashboards y productividad empresarial.",
    duration: "5 semanas",
    modality: "Online guiado",
    icon: FileSpreadsheet,
    tag: "Oficina",
  },
  {
    title: "Fotografia",
    description: "Composicion, luz, edicion y criterio visual para proyectos digitales.",
    duration: "6 semanas",
    modality: "Online practico",
    icon: Camera,
    tag: "Visual",
  },
  {
    title: "Produccion de Video",
    description: "Planifica, graba y edita piezas audiovisuales para redes y negocios.",
    duration: "7 semanas",
    modality: "Online practico",
    icon: Video,
    tag: "Contenido",
  },
  {
    title: "Habilidades Profesionales",
    description: "Comunica mejor, organiza tu trabajo y fortalece tu perfil laboral.",
    duration: "4 semanas",
    modality: "Microlearning",
    icon: BriefcaseBusiness,
    tag: "Carrera",
  },
];

export const benefits = [
  "Modalidad 100% online",
  "Campus virtual Moodle",
  "Certificacion",
  "Educacion inclusiva",
  "Cursos practicos",
  "Acompanamiento academico",
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
    role: "Lengua de Senas",
    quote:
      "El enfoque inclusivo se nota desde el primer modulo. Aprendi con recursos visuales y acompanamiento constante.",
  },
];

export const events = [
  {
    title: "Open Class: Ingles para entrevistas",
    date: "15 Jun",
    description: "Sesion gratuita para practicar respuestas, vocabulario y confianza.",
  },
  {
    title: "Seminario de Lengua de Senas",
    date: "22 Jun",
    description: "Introduccion a comunicacion inclusiva para instituciones y equipos.",
  },
  {
    title: "Workshop: Video para redes",
    date: "29 Jun",
    description: "Aprende a planificar y producir contenido audiovisual con criterio.",
  },
];
