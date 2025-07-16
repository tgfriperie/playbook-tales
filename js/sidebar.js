document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("aside nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    // Garante que compara só o final do path (ex: tarefas.html)
    if (href.includes(currentPage)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
