let index = 0;
const imagenes = document.querySelectorAll('#miCarrusel img');
const btnPrev = document.getElementById('prevBtn');
const btnNext = document.getElementById('nextBtn');

function mostrarImagen(i) {
  imagenes.forEach(img => img.classList.remove('active'));
  imagenes[i].classList.add('active');
}

btnPrev.addEventListener('click', () => {
  index = (index - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(index);
});

btnNext.addEventListener('click', () => {
  index = (index + 1) % imagenes.length;
  mostrarImagen(index);
});
