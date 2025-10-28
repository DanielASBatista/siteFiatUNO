// ===== MENU ATIVO AO ROLAR (com IntersectionObserver) =====
const navLinks = document.querySelectorAll(".menu a");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.menu a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove("active"));
        if (link) link.classList.add("active");
      }
    });
  },
  {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0.1,
  }
);

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// ===== ROLAGEM SUAVE COM ACESSIBILIDADE =====
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      targetSection.setAttribute("tabindex", "-1");
      targetSection.focus();
    }
  });
});

// ===== VOTAÇÃO NA PÁGINA MIDAS-DEMO =====
function registrarVoto() {
  const contador = document.getElementById("contadorVotos");
  if (!contador) return;

  const texto = contador.textContent;
  const votos = parseInt(texto.replace(/\D/g, "")) || 0;
  contador.textContent = `Votos: ${votos + 1}`;
}
