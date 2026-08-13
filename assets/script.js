const boton = document.getElementById("modoOscuro");

boton.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
  boton.textContent = document.body.classList.contains("oscuro")
    ? "Cambiar a modo claro"
    : "Cambiar a modo oscuro";
});

// Contador simple usando localStorage
let visitas = localStorage.getItem("visitas") || 0;
visitas = parseInt(visitas) + 1;
localStorage.setItem("visitas", visitas);
document.getElementById("contador").textContent = `Visitas: ${visitas}`;

// Validación simple del enlace de contacto
const enlaceContacto = document.querySelector('#contacto a');
enlaceContacto.addEventListener("click", (e) => {
  const confirmado = confirm("¿Quieres abrir tu programa de correo?");
  if (!confirmado) e.preventDefault();
});