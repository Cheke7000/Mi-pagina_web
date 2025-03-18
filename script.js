const botonModoOscuro = document.getElementById("modoOscuro");
const body = document.body;

botonModoOscuro.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    botonModoOscuro.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});