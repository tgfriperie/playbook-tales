document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMenu");
  const aside = document.querySelector("aside");

  if (toggleButton && aside) {
    toggleButton.addEventListener("click", () => {
      aside.classList.toggle("open");
    });
  } else {
    console.warn("Elemento não encontrado: toggleButton ou aside");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  console.log('JS carregado');
  const toggleButton = document.getElementById("toggleMenu");
  const aside = document.querySelector("aside");

  if (toggleButton && aside) {
    toggleButton.addEventListener("click", () => {
      aside.classList.toggle("open");
    });
  }
});
