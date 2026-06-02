const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const contactForm = document.querySelector(".contact-form");
const aiToggle = document.querySelector(".ai-agent-toggle");
const aiClose = document.querySelector(".ai-agent-close");
const aiForm = document.querySelector(".ai-agent-form");
const aiInput = document.querySelector("#ai-agent-input");
const aiBody = document.querySelector(".ai-agent-body");
const aiPromptButtons = document.querySelectorAll("[data-prompt]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageOptions = document.querySelectorAll("[data-language-option]");

const translations = {
  es: {
    "meta.title": "Kingdom Tech Group | Productos digitales con proposito",
    "nav.home": "Inicio",
    "nav.about": "About Us",
    "nav.products": "Productos",
    "nav.productsServices": "Productos y Servicios",
    "nav.approach": "Enfoque",
    "nav.pricing": "Pricing",
    "nav.support": "Soporte",
    "nav.contact": "Contacto",
    "nav.privacy": "Privacidad",
    "nav.terms": "Terminos",
    "hero.eyebrow": "Software con vision, operaciones con orden",
    "hero.copy":
      "Creamos plataformas digitales para iglesias, academias y organizaciones que necesitan administrar personas, aprendizaje, finanzas y procesos con excelencia.",
    "hero.productsCta": "Ver productos",
    "hero.contactCta": "Hablemos",
    "metrics.products": "lineas de producto",
    "metrics.operations": "orientado a operaciones reales",
    "metrics.ai": "automatizacion aplicada",
    "products.eyebrow": "Productos en desarrollo",
    "products.title": "Un ecosistema para servir mejor y administrar con claridad.",
    "products.copy":
      "Cada producto nace desde problemas concretos: seguimiento pastoral, entrenamiento, administracion financiera y flujos de trabajo que consumen tiempo. La meta es simple: menos friccion, mas visibilidad y decisiones mejor informadas.",
    "status.active": "Activo",
    "status.modernization": "Modernizacion",
    "status.exploration": "Exploracion",
    "status.pilot": "Piloto",
    "status.concept": "Concepto",
    "product.churchhub.copy":
      "CRM ministerial para personas, visitas, familias, grupos, seguimiento y reportes. Pensado para equipos que quieren cuidar mejor sin perder contexto.",
    "product.churchhub.item1": "Perfiles de miembros y visitantes",
    "product.churchhub.item2": "Seguimiento por estado, ministerio y notas",
    "product.churchhub.item3": "Vista operacional para lideres y equipos",
    "product.lms.copy":
      "Plataforma de aprendizaje para cursos, cohortes, evaluaciones y progreso de estudiantes en programas de formacion.",
    "product.lms.item1": "Catalogo de cursos y lecciones",
    "product.lms.item2": "Progreso por estudiante",
    "product.lms.item3": "Panel para instructores",
    "product.finance.copy":
      "Herramientas para ingresos, egresos, depositos, cuentas bancarias y trazabilidad contable en organizaciones de fe.",
    "product.finance.item1": "Control de transacciones",
    "product.finance.item2": "Depositos y conciliacion",
    "product.finance.item3": "Historial auditable",
    "product.ai.copy":
      "Automatizaciones para reducir tareas repetitivas: resumenes, clasificacion, asistencia administrativa y apoyo en decisiones operacionales.",
    "product.ai.item1": "Asistentes internos",
    "product.ai.item2": "Reportes automatizados",
    "product.ai.item3": "Integraciones a medida",
    "product.signage.copy":
      "Plataforma de digital signage para anuncios, pantallas informativas, eventos, calendarios y comunicacion visual en iglesias, escuelas y organizaciones.",
    "product.signage.item1": "Programacion de contenido por pantalla",
    "product.signage.item2": "Anuncios, videos e imagenes",
    "product.signage.item3": "Control centralizado de comunicacion visual",
    "product.voting.title": "Voto Electronico",
    "product.voting.copy":
      "Solucion para procesos de votacion digital con registro de participantes, control de elegibilidad, conteo rapido y trazabilidad del proceso.",
    "product.voting.item1": "Votaciones seguras y organizadas",
    "product.voting.item2": "Resultados y reportes",
    "product.voting.item3": "Experiencia simple para participantes",
    "approach.eyebrow": "Nuestro enfoque",
    "approach.title": "Productos sobrios, utiles y listos para crecer.",
    "approach.design.title": "Diseno operacional",
    "approach.design.copy": "Interfaces limpias para usuarios que entran todos los dias a trabajar, no a perderse.",
    "approach.data.title": "Datos accionables",
    "approach.data.copy": "Paneles y reportes enfocados en decisiones, seguimiento y responsabilidad.",
    "approach.arch.title": "Arquitectura escalable",
    "approach.arch.copy": "Bases modernas para crecer por modulos, integrar servicios y mantener control tecnico.",
    "roadmap.title": "De prototipo a plataforma comercial.",
    "roadmap.phase1": "Fase 1",
    "roadmap.phase2": "Fase 2",
    "roadmap.phase3": "Fase 3",
    "roadmap.validation.title": "Validacion",
    "roadmap.validation.copy": "Definir casos de uso, demos y mensajes comerciales por producto.",
    "roadmap.launch.title": "Lanzamiento",
    "roadmap.launch.copy": "Publicar paginas de producto, formularios de interes y material de venta.",
    "roadmap.scale.title": "Escala",
    "roadmap.scale.copy": "Medir adopcion, priorizar integraciones y convertir clientes piloto.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Construyamos el proximo producto con intencion.",
    "contact.copy":
      "Usa esta seccion para conectar un formulario, calendario o correo directo. Por ahora queda lista como punto de conversion para prospectos, iglesias y organizaciones.",
    "form.name": "Nombre",
    "form.namePlaceholder": "Tu nombre",
    "form.product": "Producto de interes",
    "form.message": "Mensaje",
    "form.messagePlaceholder": "Cuentame que necesitas",
    "form.submit": "Enviar mensaje",
    "agent.kicker": "Agente IA",
    "agent.welcome":
      "Hola. Soy el asistente de Kingdom Tech Group. Puedo orientarte sobre productos, recomendar una solucion y ayudarte a iniciar una conversacion con el equipo.",
    "agent.inputLabel": "Escribe tu mensaje",
    "agent.placeholder": "Preguntame sobre los productos...",
    "agent.send": "Enviar",
    "agent.prompt.churchhub": "Demo ChurchHub",
    "agent.prompt.courses": "Cursos",
    "agent.prompt.signage": "Signage",
    "agent.prompt.voting": "Votacion",
    "agent.prompt.automation": "Automatizar",
    "footer.copy": "Productos digitales con proposito.",
    "legal.updated": "Ultima actualizacion: 29 de mayo de 2026",
    "privacy.title": "Politica de Privacidad",
    "privacy.intro":
      "Esta politica explica como Kingdom Tech Group recopila, usa y protege informacion cuando visitantes, clientes o prospectos interactuan con nuestro sitio, productos y comunicaciones.",
    "privacy.notice":
      "Esta pagina es una plantilla operacional para preparativos de aprobacion y debe revisarse con asesoria legal antes de depender de ella como documento definitivo.",
    "privacy.info.title": "Informacion que recopilamos",
    "privacy.info.copy":
      "Podemos recopilar nombre, correo electronico, telefono, organizacion, producto de interes, mensajes enviados por formularios, informacion tecnica del navegador y cualquier detalle que usted decida compartir.",
    "privacy.use.title": "Como usamos la informacion",
    "privacy.use.copy":
      "Usamos la informacion para responder solicitudes, coordinar demos, proveer soporte, mejorar nuestros productos, operar comunicaciones autorizadas y cumplir obligaciones legales o de seguridad.",
    "privacy.sms.title": "Comunicaciones por SMS y mensajeria",
    "privacy.sms.copy":
      "Si usted proporciona su numero telefonico y acepta recibir mensajes, podemos enviar comunicaciones relacionadas con demos, soporte, actualizaciones de servicio o solicitudes que usted haya iniciado. El consentimiento para SMS no es condicion para comprar productos o servicios.",
    "privacy.sms.items":
      "Puede responder STOP para cancelar mensajes y HELP para ayuda. Pueden aplicar tarifas de mensajes y datos. La frecuencia de mensajes puede variar.",
    "privacy.sharing.title": "Compartir informacion",
    "privacy.sharing.copy":
      "No vendemos informacion personal. No compartimos informacion movil, numeros telefonicos ni consentimiento de SMS con terceros para fines promocionales o de marketing. Podemos compartir informacion con proveedores que nos ayudan a operar el sitio, comunicaciones, hosting o soporte, siempre bajo una finalidad comercial razonable.",
    "privacy.security.title": "Seguridad y retencion",
    "privacy.security.copy":
      "Aplicamos medidas razonables para proteger informacion. Conservamos datos solo durante el tiempo necesario para los fines descritos, obligaciones legales, resolucion de disputas o continuidad operacional.",
    "privacy.rights.title": "Sus opciones",
    "privacy.rights.copy":
      "Puede solicitar acceso, correccion o eliminacion de informacion, o cancelar comunicaciones, escribiendo a privacy@kingdomtechgroup.org.",
    "privacy.contact.title": "Contacto",
    "privacy.contact.copy": "Para preguntas sobre privacidad, escriba a privacy@kingdomtechgroup.org.",
    "terms.title": "Terminos de Servicio",
    "terms.intro":
      "Estos terminos describen las reglas generales para usar el sitio, productos, demostraciones y comunicaciones de Kingdom Tech Group.",
    "terms.notice":
      "Estos terminos son una base inicial para preparativos de aprobacion y deben revisarse con asesoria legal antes de usarse como documento final.",
    "terms.acceptance.title": "Aceptacion",
    "terms.acceptance.copy":
      "Al usar nuestro sitio o solicitar informacion, usted acepta estos terminos y cualquier politica aplicable publicada por Kingdom Tech Group.",
    "terms.services.title": "Servicios",
    "terms.services.copy":
      "Kingdom Tech Group desarrolla y ofrece productos digitales como ChurchHub, LMS Platform, Finanzas Iglesia, AI Workflows, KTG-Signage y Voto Electronico. Algunas funciones pueden estar en piloto, beta o desarrollo.",
    "terms.sms.title": "Terminos de mensajeria",
    "terms.sms.copy":
      "Al optar por recibir mensajes, usted autoriza a Kingdom Tech Group a enviar SMS o mensajes relacionados con demos, soporte, seguimiento comercial o servicios solicitados. Puede cancelar respondiendo STOP y pedir ayuda respondiendo HELP. Pueden aplicar tarifas de mensajes y datos. La frecuencia de mensajes puede variar.",
    "terms.use.title": "Uso aceptable",
    "terms.use.copy":
      "Usted acepta no usar el sitio o servicios para actividades ilegales, abuso de sistemas, acceso no autorizado, interrupcion de servicios o transmision de contenido danino.",
    "terms.ip.title": "Propiedad intelectual",
    "terms.ip.copy":
      "El contenido, marca, diseno, software y materiales de Kingdom Tech Group pertenecen a Kingdom Tech Group o a sus licenciantes, salvo que se indique lo contrario.",
    "terms.disclaimer.title": "Limitaciones",
    "terms.disclaimer.copy":
      "El sitio y materiales se proporcionan con fines informativos. Productos en beta, piloto o concepto pueden cambiar. No garantizamos disponibilidad continua ni ausencia total de errores.",
    "terms.contact.title": "Contacto",
    "terms.contact.copy": "Para preguntas sobre estos terminos, escriba a legal@kingdomtechgroup.org.",
    "about.title": "About Us",
    "about.intro":
      "Kingdom Tech Group desarrolla productos digitales para organizaciones que quieren operar con excelencia, claridad y una vision moderna del servicio.",
    "about.mission.title": "Nuestra mision",
    "about.mission.copy":
      "Crear tecnologia practica para iglesias, academias y organizaciones que necesitan cuidar personas, administrar procesos y tomar mejores decisiones.",
    "about.values.title": "Como trabajamos",
    "about.values.copy":
      "Construimos con sobriedad, enfoque operacional, seguridad y respeto por el contexto real de cada equipo.",
    "about.why.title": "Por que KTG",
    "about.why.copy":
      "Combinamos experiencia tecnica, sensibilidad ministerial y pensamiento de producto para convertir necesidades reales en plataformas utiles.",
    "productsPage.title": "Productos y Servicios",
    "productsPage.intro":
      "Un portafolio de plataformas y servicios para administracion, aprendizaje, finanzas, senalizacion digital, votacion y automatizacion.",
    "services.strategy.title": "Consultoria de producto",
    "services.strategy.copy":
      "Ayudamos a definir alcance, roadmap, experiencia de usuario y arquitectura para convertir ideas en productos listos para lanzar.",
    "services.integration.title": "Integraciones",
    "services.integration.copy":
      "Conectamos herramientas, bases de datos, formularios, reportes, automatizaciones y servicios externos para reducir trabajo manual.",
    "services.ai.title": "Agentes y automatizacion IA",
    "services.ai.copy":
      "Disenamos asistentes, flujos inteligentes y automatizaciones para soporte, ventas, operaciones internas y analisis.",
    "pricing.title": "Pricing",
    "pricing.intro":
      "Planes flexibles segun producto, usuarios, integraciones y nivel de soporte. Estos rangos son una guia inicial para conversaciones comerciales.",
    "pricing.starter.title": "Starter",
    "pricing.starter.copy": "Para validar una necesidad, lanzar una demo o iniciar un piloto pequeno.",
    "pricing.starter.item1": "Discovery inicial",
    "pricing.starter.item2": "Demo o piloto",
    "pricing.starter.item3": "Alcance definido",
    "pricing.growth.title": "Growth",
    "pricing.growth.copy": "Para organizaciones que necesitan operar con usuarios reales, soporte y configuracion inicial.",
    "pricing.growth.item1": "Configuracion inicial",
    "pricing.growth.item2": "Soporte operacional",
    "pricing.growth.item3": "Usuarios y modulos clave",
    "pricing.custom.title": "Custom",
    "pricing.custom.copy": "Para implementaciones con integraciones, automatizaciones, migraciones o requerimientos especificos.",
    "pricing.custom.item1": "Integraciones",
    "pricing.custom.item2": "Migraciones",
    "pricing.custom.item3": "Automatizaciones IA",
    "pricing.cta": "Solicitar cotizacion",
    "support.title": "Soporte Tecnico",
    "support.intro":
      "Soporte para productos KTG, incidentes, preguntas tecnicas, solicitudes de configuracion y acompanamiento de implementacion.",
    "support.channels.title": "Canales de soporte",
    "support.channels.copy":
      "Puedes iniciar una solicitud por email, formulario de contacto o mediante el equipo asignado a tu implementacion.",
    "support.response.title": "Prioridad",
    "support.response.copy":
      "Clasificamos solicitudes por impacto: consulta general, configuracion, incidente funcional o interrupcion critica.",
    "support.prepare.title": "Antes de escribir",
    "support.prepare.copy":
      "Incluye producto, organizacion, descripcion del problema, capturas si aplica y pasos para reproducir el caso.",
    "contactPage.title": "Contacto",
    "contactPage.intro":
      "Hablemos de tu organizacion, producto de interes o proceso que quieres mejorar con tecnologia.",
  },
  en: {
    "meta.title": "Kingdom Tech Group | Purpose-built digital products",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.productsServices": "Products & Services",
    "nav.approach": "Approach",
    "nav.pricing": "Pricing",
    "nav.support": "Support",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",
    "hero.eyebrow": "Software with vision, operations with order",
    "hero.copy":
      "We build digital platforms for churches, academies, and organizations that need to manage people, learning, finances, and processes with excellence.",
    "hero.productsCta": "View products",
    "hero.contactCta": "Let's talk",
    "metrics.products": "product lines",
    "metrics.operations": "built for real operations",
    "metrics.ai": "applied automation",
    "products.eyebrow": "Products in development",
    "products.title": "An ecosystem to serve better and operate with clarity.",
    "products.copy":
      "Every product starts with practical problems: pastoral follow-up, training, financial administration, and workflows that take too much time. The goal is simple: less friction, more visibility, and better-informed decisions.",
    "status.active": "Active",
    "status.modernization": "Modernization",
    "status.exploration": "Exploration",
    "status.pilot": "Pilot",
    "status.concept": "Concept",
    "product.churchhub.copy":
      "A ministry CRM for people, visits, families, groups, follow-up, and reporting. Built for teams that want to care better without losing context.",
    "product.churchhub.item1": "Member and visitor profiles",
    "product.churchhub.item2": "Follow-up by status, ministry, and notes",
    "product.churchhub.item3": "Operational view for leaders and teams",
    "product.lms.copy":
      "A learning platform for courses, cohorts, assessments, and student progress in training programs.",
    "product.lms.item1": "Course and lesson catalog",
    "product.lms.item2": "Student progress tracking",
    "product.lms.item3": "Instructor dashboard",
    "product.finance.copy":
      "Tools for income, expenses, deposits, bank accounts, and accounting traceability for faith-based organizations.",
    "product.finance.item1": "Transaction control",
    "product.finance.item2": "Deposits and reconciliation",
    "product.finance.item3": "Auditable history",
    "product.ai.copy":
      "Automations to reduce repetitive work: summaries, classification, administrative assistance, and operational decision support.",
    "product.ai.item1": "Internal assistants",
    "product.ai.item2": "Automated reports",
    "product.ai.item3": "Custom integrations",
    "product.signage.copy":
      "A digital signage platform for announcements, informational displays, events, calendars, and visual communication in churches, schools, and organizations.",
    "product.signage.item1": "Content scheduling by screen",
    "product.signage.item2": "Announcements, videos, and images",
    "product.signage.item3": "Centralized visual communication control",
    "product.voting.title": "Electronic Voting",
    "product.voting.copy":
      "A solution for digital voting processes with participant registration, eligibility control, fast counting, and process traceability.",
    "product.voting.item1": "Secure and organized voting",
    "product.voting.item2": "Results and reports",
    "product.voting.item3": "Simple participant experience",
    "approach.eyebrow": "Our approach",
    "approach.title": "Focused, useful products that are ready to grow.",
    "approach.design.title": "Operational design",
    "approach.design.copy": "Clean interfaces for people who log in every day to work, not to get lost.",
    "approach.data.title": "Actionable data",
    "approach.data.copy": "Dashboards and reports focused on decisions, follow-up, and accountability.",
    "approach.arch.title": "Scalable architecture",
    "approach.arch.copy": "Modern foundations to grow by modules, integrate services, and maintain technical control.",
    "roadmap.title": "From prototype to commercial platform.",
    "roadmap.phase1": "Phase 1",
    "roadmap.phase2": "Phase 2",
    "roadmap.phase3": "Phase 3",
    "roadmap.validation.title": "Validation",
    "roadmap.validation.copy": "Define use cases, demos, and product messaging.",
    "roadmap.launch.title": "Launch",
    "roadmap.launch.copy": "Publish product pages, interest forms, and sales material.",
    "roadmap.scale.title": "Scale",
    "roadmap.scale.copy": "Measure adoption, prioritize integrations, and convert pilot customers.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's build the next product with intention.",
    "contact.copy":
      "Use this section to connect a form, calendar, or direct email. For now, it is ready as a conversion point for prospects, churches, and organizations.",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.product": "Product of interest",
    "form.message": "Message",
    "form.messagePlaceholder": "Tell me what you need",
    "form.submit": "Send message",
    "agent.kicker": "AI Agent",
    "agent.welcome":
      "Hi. I am the Kingdom Tech Group assistant. I can guide you through our products, recommend a solution, and help you start a conversation with the team.",
    "agent.inputLabel": "Write your message",
    "agent.placeholder": "Ask me about the products...",
    "agent.send": "Send",
    "agent.prompt.churchhub": "ChurchHub demo",
    "agent.prompt.courses": "Courses",
    "agent.prompt.signage": "Signage",
    "agent.prompt.voting": "Voting",
    "agent.prompt.automation": "Automate",
    "footer.copy": "Purpose-built digital products.",
    "legal.updated": "Last updated: May 29, 2026",
    "privacy.title": "Privacy Policy",
    "privacy.intro":
      "This policy explains how Kingdom Tech Group collects, uses, and protects information when visitors, customers, or prospects interact with our website, products, and communications.",
    "privacy.notice":
      "This page is an operational template for approval preparation and should be reviewed with legal counsel before relying on it as a final document.",
    "privacy.info.title": "Information we collect",
    "privacy.info.copy":
      "We may collect name, email address, phone number, organization, product of interest, form messages, browser technical information, and any details you choose to share.",
    "privacy.use.title": "How we use information",
    "privacy.use.copy":
      "We use information to respond to requests, coordinate demos, provide support, improve our products, operate authorized communications, and comply with legal or security obligations.",
    "privacy.sms.title": "SMS and messaging communications",
    "privacy.sms.copy":
      "If you provide your phone number and consent to receive messages, we may send communications related to demos, support, service updates, or requests you initiated. SMS consent is not a condition of purchasing products or services.",
    "privacy.sms.items":
      "You may reply STOP to opt out and HELP for help. Message and data rates may apply. Message frequency may vary.",
    "privacy.sharing.title": "Sharing information",
    "privacy.sharing.copy":
      "We do not sell personal information. We do not share mobile information, phone numbers, or SMS consent with third parties for promotional or marketing purposes. We may share information with providers that help us operate the website, communications, hosting, or support under a reasonable business purpose.",
    "privacy.security.title": "Security and retention",
    "privacy.security.copy":
      "We use reasonable measures to protect information. We retain data only as long as needed for the purposes described, legal obligations, dispute resolution, or operational continuity.",
    "privacy.rights.title": "Your choices",
    "privacy.rights.copy":
      "You may request access, correction, or deletion of information, or opt out of communications, by contacting privacy@kingdomtechgroup.org.",
    "privacy.contact.title": "Contact",
    "privacy.contact.copy": "For privacy questions, contact privacy@kingdomtechgroup.org.",
    "terms.title": "Terms of Service",
    "terms.intro":
      "These terms describe the general rules for using Kingdom Tech Group's website, products, demonstrations, and communications.",
    "terms.notice":
      "These terms are an initial base for approval preparation and should be reviewed with legal counsel before being used as a final document.",
    "terms.acceptance.title": "Acceptance",
    "terms.acceptance.copy":
      "By using our website or requesting information, you accept these terms and any applicable policy published by Kingdom Tech Group.",
    "terms.services.title": "Services",
    "terms.services.copy":
      "Kingdom Tech Group develops and offers digital products such as ChurchHub, LMS Platform, Finanzas Iglesia, AI Workflows, KTG-Signage, and Electronic Voting. Some features may be in pilot, beta, or development.",
    "terms.sms.title": "Messaging terms",
    "terms.sms.copy":
      "By opting in to receive messages, you authorize Kingdom Tech Group to send SMS or messages related to demos, support, sales follow-up, or requested services. You can opt out by replying STOP and request help by replying HELP. Message and data rates may apply. Message frequency may vary.",
    "terms.use.title": "Acceptable use",
    "terms.use.copy":
      "You agree not to use the website or services for illegal activity, system abuse, unauthorized access, service disruption, or transmission of harmful content.",
    "terms.ip.title": "Intellectual property",
    "terms.ip.copy":
      "Kingdom Tech Group content, branding, design, software, and materials belong to Kingdom Tech Group or its licensors unless otherwise stated.",
    "terms.disclaimer.title": "Limitations",
    "terms.disclaimer.copy":
      "The website and materials are provided for informational purposes. Products in beta, pilot, or concept may change. We do not guarantee continuous availability or a complete absence of errors.",
    "terms.contact.title": "Contact",
    "terms.contact.copy": "For questions about these terms, contact legal@kingdomtechgroup.org.",
    "about.title": "About Us",
    "about.intro":
      "Kingdom Tech Group builds digital products for organizations that want to operate with excellence, clarity, and a modern vision of service.",
    "about.mission.title": "Our mission",
    "about.mission.copy":
      "Create practical technology for churches, academies, and organizations that need to care for people, manage processes, and make better decisions.",
    "about.values.title": "How we work",
    "about.values.copy":
      "We build with restraint, operational focus, security, and respect for the real context of each team.",
    "about.why.title": "Why KTG",
    "about.why.copy":
      "We combine technical experience, ministry awareness, and product thinking to turn real needs into useful platforms.",
    "productsPage.title": "Products & Services",
    "productsPage.intro":
      "A portfolio of platforms and services for administration, learning, finance, digital signage, voting, and automation.",
    "services.strategy.title": "Product consulting",
    "services.strategy.copy":
      "We help define scope, roadmap, user experience, and architecture to turn ideas into products ready to launch.",
    "services.integration.title": "Integrations",
    "services.integration.copy":
      "We connect tools, databases, forms, reports, automations, and external services to reduce manual work.",
    "services.ai.title": "AI agents and automation",
    "services.ai.copy":
      "We design assistants, intelligent flows, and automations for support, sales, internal operations, and analysis.",
    "pricing.title": "Pricing",
    "pricing.intro":
      "Flexible plans based on product, users, integrations, and support level. These ranges are an initial guide for commercial conversations.",
    "pricing.starter.title": "Starter",
    "pricing.starter.copy": "For validating a need, launching a demo, or starting a small pilot.",
    "pricing.starter.item1": "Initial discovery",
    "pricing.starter.item2": "Demo or pilot",
    "pricing.starter.item3": "Defined scope",
    "pricing.growth.title": "Growth",
    "pricing.growth.copy": "For organizations that need to operate with real users, support, and initial configuration.",
    "pricing.growth.item1": "Initial setup",
    "pricing.growth.item2": "Operational support",
    "pricing.growth.item3": "Key users and modules",
    "pricing.custom.title": "Custom",
    "pricing.custom.copy": "For implementations with integrations, automations, migrations, or specific requirements.",
    "pricing.custom.item1": "Integrations",
    "pricing.custom.item2": "Migrations",
    "pricing.custom.item3": "AI automations",
    "pricing.cta": "Request quote",
    "support.title": "Technical Support",
    "support.intro":
      "Support for KTG products, incidents, technical questions, configuration requests, and implementation guidance.",
    "support.channels.title": "Support channels",
    "support.channels.copy":
      "You can start a request by email, contact form, or through the team assigned to your implementation.",
    "support.response.title": "Priority",
    "support.response.copy":
      "We classify requests by impact: general question, configuration, functional incident, or critical interruption.",
    "support.prepare.title": "Before contacting us",
    "support.prepare.copy":
      "Include product, organization, problem description, screenshots if applicable, and steps to reproduce the case.",
    "contactPage.title": "Contact",
    "contactPage.intro":
      "Let's talk about your organization, product of interest, or process you want to improve with technology.",
  },
};

function getCurrentLanguage() {
  return localStorage.getItem("ktg-language") || "es";
}

function applyLanguage(language) {
  const activeLanguage = translations[language] ? language : "es";
  localStorage.setItem("ktg-language", activeLanguage);
  document.documentElement.lang = activeLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[activeLanguage][key];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = translations[activeLanguage][key];
    if (value) element.setAttribute("placeholder", value);
  });

  const titleElement = document.querySelector("title[data-i18n]");
  const titleKey = titleElement?.dataset.i18n;
  if (titleKey && translations[activeLanguage][titleKey]) {
    document.title = translations[activeLanguage][titleKey];
  }

  if (languageToggle) {
    languageToggle.textContent = activeLanguage === "es" ? "EN" : "ES";
    languageToggle.setAttribute(
      "aria-label",
      activeLanguage === "es" ? "Change language to English" : "Cambiar idioma a espanol",
    );
  }

  languageOptions.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.languageOption === activeLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.languageOption === activeLanguage));
  });
}

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const isEnglish = getCurrentLanguage() === "en";
  const subject = encodeURIComponent(
    `${isEnglish ? "Interest in" : "Interes en"} ${formData.get("product")}`,
  );
  const body = encodeURIComponent(
    [
      `${isEnglish ? "Name" : "Nombre"}: ${formData.get("name") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `${isEnglish ? "Product" : "Producto"}: ${formData.get("product") || ""}`,
      "",
      formData.get("message") || "",
    ].join("\n"),
  );

  window.location.href = `mailto:contacto@kingdomtechgroup.com?subject=${subject}&body=${body}`;
});

const productResponses = [
  {
    keywords: ["church", "iglesia", "miembro", "visitante", "pastoral", "crm", "demo"],
    es:
      "Para seguimiento de miembros, visitantes y equipos ministeriales, la mejor opcion es ChurchHub. Te ayuda a centralizar perfiles, estados, ministerios y notas para que el equipo tenga contexto antes de actuar. Puedo ayudarte a preparar una solicitud de demo de ChurchHub.",
    en:
      "For member, visitor, and ministry team follow-up, ChurchHub is the best fit. It helps centralize profiles, statuses, ministries, and notes so your team has context before taking action. I can help you prepare a ChurchHub demo request.",
  },
  {
    keywords: ["curso", "lms", "academia", "estudiante", "clase", "leccion", "formacion"],
    es:
      "Para cursos y programas de formacion, recomiendo LMS Platform. Esta pensado para organizar cursos, lecciones, cohortes, progreso de estudiantes y paneles para instructores. Si me dices cuantos cursos quieres lanzar, puedo sugerir una estructura inicial.",
    en:
      "For courses and training programs, I recommend LMS Platform. It is designed to organize courses, lessons, cohorts, student progress, and instructor dashboards. If you tell me how many courses you want to launch, I can suggest an initial structure.",
  },
  {
    keywords: ["finanza", "contable", "egreso", "ingreso", "deposito", "banco", "conciliacion"],
    es:
      "Para administracion financiera de iglesias, Finanzas Iglesia puede cubrir ingresos, egresos, depositos, cuentas bancarias e historial auditable. Puedo ayudarte a identificar que modulo financiero conviene priorizar.",
    en:
      "For church financial administration, Finanzas Iglesia can cover income, expenses, deposits, bank accounts, and auditable history. I can help identify which financial module should be prioritized.",
  },
  {
    keywords: ["ia", "ai", "automatizar", "automatizacion", "repetitiva", "asistente", "workflow"],
    es:
      "Para reducir trabajo repetitivo, AI Workflows puede ayudar con asistentes internos, resumenes, clasificacion de solicitudes, reportes automaticos e integraciones a medida. Cuentame que proceso consume mas tiempo y te propongo un flujo automatizado.",
    en:
      "To reduce repetitive work, AI Workflows can help with internal assistants, summaries, request classification, automated reports, and custom integrations. Tell me which process takes the most time and I can suggest an automated flow.",
  },
  {
    keywords: ["signage", "pantalla", "pantallas", "anuncio", "anuncios", "digital signage", "comunicacion visual"],
    es:
      "Para pantallas digitales, anuncios y comunicacion visual, KTG-Signage es la opcion indicada. Puede ayudar a programar contenido, mostrar eventos, publicar avisos y controlar multiples pantallas desde un lugar central. Si me dices cuantas pantallas necesitas administrar, puedo sugerir una configuracion inicial.",
    en:
      "For digital displays, announcements, and visual communication, KTG-Signage is the right option. It can help schedule content, show events, publish notices, and control multiple screens from one central place. If you tell me how many screens you need to manage, I can suggest an initial setup.",
  },
  {
    keywords: ["voto", "votacion", "eleccion", "electronico", "asamblea", "participante", "elegibilidad"],
    es:
      "Para procesos de votacion digital, Voto Electronico puede apoyar con registro de participantes, control de elegibilidad, emision de votos, conteo rapido y reportes del resultado. Puedo ayudarte a definir si necesitas votacion presencial asistida, remota o hibrida.",
    en:
      "For digital voting processes, Electronic Voting can support participant registration, eligibility control, vote submission, fast counting, and result reports. I can help define whether you need assisted in-person, remote, or hybrid voting.",
  },
  {
    keywords: ["precio", "costo", "plan", "licencia", "cotizacion"],
    es:
      "Los precios pueden variar segun producto, cantidad de usuarios, integraciones y nivel de soporte. Lo ideal es levantar el caso de uso y preparar una cotizacion clara. Puedo llevarte al formulario de contacto para coordinar una conversacion.",
    en:
      "Pricing can vary by product, number of users, integrations, and support level. The best next step is to define the use case and prepare a clear quote. I can point you to the contact form to coordinate a conversation.",
  },
];

const fallbackResponse = {
  es:
    "Puedo orientarte sobre ChurchHub, LMS Platform, Finanzas Iglesia, AI Workflows, KTG-Signage y Voto Electronico. Dime si buscas administrar personas, cursos, finanzas, pantallas digitales, votaciones o automatizar procesos, y te recomiendo el camino mas adecuado.",
  en:
    "I can guide you through ChurchHub, LMS Platform, Finanzas Iglesia, AI Workflows, KTG-Signage, and Electronic Voting. Tell me whether you need to manage people, courses, finances, digital displays, voting, or automation, and I will recommend the right path.",
};

function setAgentOpen(isOpen) {
  document.body.classList.toggle("ai-agent-open", isOpen);
  aiToggle?.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    window.setTimeout(() => aiInput?.focus(), 80);
  }
}

function addAgentMessage(text, sender = "bot") {
  if (!aiBody) return;

  const message = document.createElement("div");
  message.className = `ai-message ${sender}`;

  const avatar = document.createElement("span");
  avatar.className = "ai-avatar";
  avatar.textContent = sender === "bot" ? "KTG" : getCurrentLanguage() === "en" ? "YOU" : "TU";

  const copy = document.createElement("p");
  copy.textContent = text;

  message.append(avatar, copy);
  aiBody.append(message);
  aiBody.scrollTop = aiBody.scrollHeight;
}

function getAgentReply(message) {
  const normalizedMessage = message.toLowerCase();
  const match = productResponses.find((item) =>
    item.keywords.some((keyword) => normalizedMessage.includes(keyword)),
  );

  const language = getCurrentLanguage();
  if (!match) return fallbackResponse[language];
  return match[language];
}

function sendAgentMessage(message) {
  const trimmedMessage = message.trim();
  if (!trimmedMessage) return;

  addAgentMessage(trimmedMessage, "user");
  aiInput.value = "";

  window.setTimeout(() => {
    addAgentMessage(getAgentReply(trimmedMessage), "bot");
  }, 350);
}

aiToggle?.addEventListener("click", () => {
  setAgentOpen(!document.body.classList.contains("ai-agent-open"));
});

aiClose?.addEventListener("click", () => {
  setAgentOpen(false);
});

aiForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  sendAgentMessage(aiInput.value);
});

aiPromptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sendAgentMessage(button.dataset.prompt || "");
  });
});

languageToggle?.addEventListener("click", () => {
  applyLanguage(getCurrentLanguage() === "es" ? "en" : "es");
});

languageOptions.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption || "es");
  });
});

applyLanguage(getCurrentLanguage());
