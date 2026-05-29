const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const contactForm = document.querySelector(".contact-form");
const aiToggle = document.querySelector(".ai-agent-toggle");
const aiClose = document.querySelector(".ai-agent-close");
const aiForm = document.querySelector(".ai-agent-form");
const aiInput = document.querySelector("#ai-agent-input");
const aiBody = document.querySelector(".ai-agent-body");
const aiPromptButtons = document.querySelectorAll("[data-prompt]");

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
  const subject = encodeURIComponent(`Interes en ${formData.get("product")}`);
  const body = encodeURIComponent(
    [
      `Nombre: ${formData.get("name") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Producto: ${formData.get("product") || ""}`,
      "",
      formData.get("message") || "",
    ].join("\n"),
  );

  window.location.href = `mailto:contacto@kingdomtechgroup.com?subject=${subject}&body=${body}`;
});

const productResponses = [
  {
    keywords: ["church", "iglesia", "miembro", "visitante", "pastoral", "crm", "demo"],
    answer:
      "Para seguimiento de miembros, visitantes y equipos ministeriales, la mejor opcion es ChurchHub. Te ayuda a centralizar perfiles, estados, ministerios y notas para que el equipo tenga contexto antes de actuar.",
    next: "Puedo ayudarte a preparar una solicitud de demo de ChurchHub.",
  },
  {
    keywords: ["curso", "lms", "academia", "estudiante", "clase", "leccion", "formacion"],
    answer:
      "Para cursos y programas de formacion, recomiendo LMS Platform. Esta pensado para organizar cursos, lecciones, cohortes, progreso de estudiantes y paneles para instructores.",
    next: "Si me dices cuantos cursos quieres lanzar, puedo sugerir una estructura inicial.",
  },
  {
    keywords: ["finanza", "contable", "egreso", "ingreso", "deposito", "banco", "conciliacion"],
    answer:
      "Para administracion financiera de iglesias, Finanzas Iglesia puede cubrir ingresos, egresos, depositos, cuentas bancarias e historial auditable.",
    next: "Puedo ayudarte a identificar que modulo financiero conviene priorizar.",
  },
  {
    keywords: ["ia", "ai", "automatizar", "automatizacion", "repetitiva", "asistente", "workflow"],
    answer:
      "Para reducir trabajo repetitivo, AI Workflows puede ayudar con asistentes internos, resumenes, clasificacion de solicitudes, reportes automaticos e integraciones a medida.",
    next: "Cuéntame que proceso consume mas tiempo y te propongo un flujo automatizado.",
  },
  {
    keywords: ["signage", "pantalla", "pantallas", "anuncio", "anuncios", "digital signage", "comunicacion visual"],
    answer:
      "Para pantallas digitales, anuncios y comunicacion visual, KTG-Signage es la opcion indicada. Puede ayudar a programar contenido, mostrar eventos, publicar avisos y controlar multiples pantallas desde un lugar central.",
    next: "Si me dices cuantas pantallas necesitas administrar, puedo sugerir una configuracion inicial.",
  },
  {
    keywords: ["voto", "votacion", "eleccion", "electronico", "asamblea", "participante", "elegibilidad"],
    answer:
      "Para procesos de votacion digital, Voto Electronico puede apoyar con registro de participantes, control de elegibilidad, emision de votos, conteo rapido y reportes del resultado.",
    next: "Puedo ayudarte a definir si necesitas votacion presencial asistida, remota o hibrida.",
  },
  {
    keywords: ["precio", "costo", "plan", "licencia", "cotizacion"],
    answer:
      "Los precios pueden variar segun producto, cantidad de usuarios, integraciones y nivel de soporte. Lo ideal es levantar el caso de uso y preparar una cotizacion clara.",
    next: "Puedo llevarte al formulario de contacto para coordinar una conversacion.",
  },
];

const fallbackResponse =
  "Puedo orientarte sobre ChurchHub, LMS Platform, Finanzas Iglesia, AI Workflows, KTG-Signage y Voto Electronico. Dime si buscas administrar personas, cursos, finanzas, pantallas digitales, votaciones o automatizar procesos, y te recomiendo el camino mas adecuado.";

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
  avatar.textContent = sender === "bot" ? "KTG" : "TU";

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

  if (!match) return fallbackResponse;
  return `${match.answer} ${match.next}`;
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
