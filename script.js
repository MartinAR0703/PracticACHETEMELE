// Seleccionamos el boton pos su ID
const button = document.getElementById("colorButton"); 

//Creacion de un arreglo con algunos colores claros y agradables
const colors = [
    ["#0f2027","#203a43"],
    ["#203a43","#2c5364"],
    ["#2c5364","#667eea"],
    ["#667eea","#764ba2"],
    ["#764ba2","#0f2027"]
];

//Variable de control del color
let gradientIndex =0;

//Agregamos un evento "click"
button.addEventListener("click",function(){

    gradientIndex = (gradientIndex + 1) % colors.length;
    const [color1, color2] = colors[gradientIndex];

    document.body.style.background =
        `linear-gradient(45deg, ${color1}, ${color2})`;

});

// Carrusel de Equipo de trabajo
const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextMemberBtn");
const dotsContainer = document.getElementById("dotsContainer");

// Obtener todas las tarjetas 
const cards = Array.from(track.querySelectorAll(".member-card"));
const total = cards.length;
let current = 0;

// CREAR puntos indicadores
cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i===0) dot.classList.add("active");

    // click en punto -> ir directo a este integrante
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
});

const dots =Array.from(dotsContainer.querySelectorAll(".dot"));

// Funcion primcipal de navegacion
function goTo(index) {
    current = index;
    track.style.transform= `translateX(-${current * 100}%)`;
    // Actualizar puntos
    dots.forEach((d, i) => d.classList.toggle("active", i=== current));

    // Actualizar texto del boton 
    if(current=== total -1) {
        nextBtn.textContent = "<- Volver al primero";
    } else {
        nextBtn.textContent = "Conoce a todos los integrantes ->";
    }
}
// ── Botón: avanza un integrante, al final vuelve al primero ──
nextBtn.addEventListener("click", () => {
    const next = (current + 1) % total;
    goTo(next);
});
