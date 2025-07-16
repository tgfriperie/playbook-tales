document.addEventListener("DOMContentLoaded", () => {
  // === LÓGICA DE ATIVAÇÃO DE LINK ===
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("aside nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (href.includes(currentPage)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // === MENU RESPONSIVO MOBILE ===
  const toggle = document.getElementById("toggleMenu");
  const sidebar = document.querySelector("aside");

  if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
});
