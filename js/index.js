document.addEventListener("DOMContentLoaded", () => {
  const BtnShare = document.getElementById("share");
  const linkBox = document.getElementById("linkBox");
  const cardUsuario = document.querySelector(".card__usuario");

  if (BtnShare && linkBox && cardUsuario) {
    BtnShare.addEventListener("click", () => {
      linkBox.classList.toggle("active"); // Alterna la visibilidad del cuadro de compartir
      cardUsuario.classList.toggle("active"); // Alterna la visibilidad del bloque de usuario
    });

    // Cerrar el cuadro al hacer clic fuera de él
    document.addEventListener("click", (e) => {
      if (!linkBox.contains(e.target) && e.target !== BtnShare) {
        linkBox.classList.remove("active");
        cardUsuario.classList.remove("active");
      }
    });
  } else {
    console.error("No se encontraron los elementos share o linkBox");
  }
});
