let typedKeys = "";
const secretCode = "tales";

document.addEventListener("keydown", (e) => {
  typedKeys += e.key.toLowerCase();
  typedKeys = typedKeys.slice(-secretCode.length); // mantém o tamanho do código secreto

  if (typedKeys === secretCode) {
    activateEasterEgg();
  }

  if (e.key === "Escape") {
    deactivateEasterEgg();
  }
});

function activateEasterEgg() {
  if (document.querySelector(".easter-egg-container")) return; // evita duplicar

  const container = document.createElement("div");
  container.classList.add("easter-egg-container");

  const tope = document.createElement("img");
  tope.src = "../assets/img/tope.png";
  tope.className = "easter-img bounce tope";

  const sibely = document.createElement("img");
  sibely.src = "../assets/img/sibely.png";
  sibely.className = "easter-img bounce sibely";

  container.appendChild(tope);
  container.appendChild(sibely);
  document.body.appendChild(container);
}

function deactivateEasterEgg() {
  const container = document.querySelector(".easter-egg-container");
  if (container) container.remove();
}
