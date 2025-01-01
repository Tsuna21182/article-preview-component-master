document.addEventListener("DOMContentLoaded", () => {
  const BtnShare = document.getElementById("share");
  const linkBox = document.getElementById("linkBox");
  const cardUsuario = document.querySelector(".card__usuario");

  if (BtnShare && linkBox && cardUsuario) {
    BtnShare.addEventListener("click", () => {
      // Alternar visibilidad del cuadro de compartir
      linkBox.classList.toggle("active");

      // Solo en pantallas menores a 1440px, alternar visibilidad de card__usuario
      if (window.innerWidth < 1440) {
        cardUsuario.classList.toggle("active");
      }
    });

    // Cerrar el cuadro al hacer clic fuera de él
    document.addEventListener("click", (e) => {
      if (!linkBox.contains(e.target) && e.target !== BtnShare) {
        linkBox.classList.remove("active");

        // Solo en pantallas menores a 1440px, restablecer visibilidad de card__usuario
        if (window.innerWidth < 1440) {
          cardUsuario.classList.remove("active");
        }
      }
    });
  } else {
    console.error("No se encontraron los elementos share o linkBox");
  }
});
