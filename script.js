// Modo Oscuro
const btnModoOscuro = document.getElementById("modoOscuro");
btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
});

// Botón para subir
const btnSubir = document.getElementById("subir");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
});

btnSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});