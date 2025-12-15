const catalogo = document.querySelector(".catalogo");
let scrollDir = 0; // -1 = izquierda, 1 = derecha, 0 = parado
const borde = 120; // pixeles desde el borde
const velocidad = 5; // velocidad de scroll

// Detecta la posición del mouse
document.addEventListener("mousemove", (e) => {
  if (e.clientX > window.innerWidth - borde) {
    scrollDir = 1; // mover a la derecha
  } else if (e.clientX < borde) {
    scrollDir = -1; // mover a la izquierda
  } else {
    scrollDir = 0; // parar
  }
});

// Loop de animación para scroll suave
function animarScroll() {
  if (scrollDir !== 0) {
    catalogo.scrollLeft += scrollDir * velocidad;
  }
  requestAnimationFrame(animarScroll);
}

animarScroll();
