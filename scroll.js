// Scroll horizontal al acercar el ratón a los bordes (PC)
document.addEventListener("mousemove", (e) => {
  const borde = 120; // pixeles desde el borde
  const velocidad = 15; // px por evento

  const catalogo = document.querySelector(".catalogo");

  if (!catalogo) return;

  if (e.clientX > window.innerWidth - borde) {
    catalogo.scrollLeft += velocidad;
  }

  if (e.clientX < borde) {
    catalogo.scrollLeft -= velocidad;
  }
});
