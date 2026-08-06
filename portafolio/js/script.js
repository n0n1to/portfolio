// Esperar a que la página cargue por completo
document.addEventListener("DOMContentLoaded", () => {
    const botonCorazon = document.getElementById("boton-corazon");
    const contadorLikes = document.getElementById("contador-likes");
    
    let likes = 0;
    let interactuado = false;

    botonCorazon.addEventListener("click", () => {
        if (!interactuado) {
            likes++;
            contadorLikes.textContent = likes;
            botonCorazon.classList.add("activo");
            interactuado = true; // Evita que sume infinitamente si solo queremos 1 por usuario
        } else {
            likes--;
            contadorLikes.textContent = likes;
            botonCorazon.classList.remove("activo");
            interactuado = false;
        }
    });
});