// Obtén todas las etiquetas h5
const etiquetasH5 = document.querySelectorAll('h5');

// Función para generar un color aleatorio (verde, azul o rojo)
function generarColorAleatorio() {
  const colores = ['green', 'blue', 'red'];
  const indiceAleatorio = Math.floor(Math.random() * colores.length);
  return colores[indiceAleatorio];
}

// Función para aplicar los colores aleatorios cuando se hace clic en una etiqueta h5
function aplicarColoresAleatorios() {
  const colorAleatorio = generarColorAleatorio();
  etiquetasH5.forEach((etiqueta) => {
    etiqueta.style.color = colorAleatorio;
  });
}

// Asigna el evento de clic a todas las etiquetas h5
etiquetasH5.forEach((etiqueta) => {
  etiqueta.addEventListener('click', aplicarColoresAleatorios);
});