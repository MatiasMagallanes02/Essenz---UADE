document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.getElementById("carrusel");
  const dots = document.querySelectorAll(".dot");
  const videos = document.querySelectorAll("video");
  let currentSlide = 0;

  function goToSlide(index) {
    currentSlide = index;
    carrusel.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    videos.forEach((video, i) => {
      video.pause();
      video.currentTime = 0;
    });

    const video = videos[index];
    video.play().catch(err => console.warn("Error de autoplay:", err));
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));
      goToSlide(index);
    });
  });

  videos.forEach((video, index) => {
    video.addEventListener("ended", () => {
      const nextIndex = (index + 1) % videos.length;
      goToSlide(nextIndex);
    });
  });

  goToSlide(0);
});

const perfumeCarrusel = document.querySelector('.perfume-carrusel');
const flechaIzq = document.querySelector('.flecha.izq');
const flechaDer = document.querySelector('.flecha.der');

let posicion = 0;
const cantidadVisible = 3;
const perfumes = document.querySelectorAll('.perfume');
const totalPerfumes = perfumes.length;

flechaIzq.addEventListener('click', () => {
  if (posicion > 0) {
    posicion--;
    actualizarCarrusel();
  }
});

flechaDer.addEventListener('click', () => {
  if (posicion < totalPerfumes - cantidadVisible) {
    posicion++;
    actualizarCarrusel();
  }
});

function actualizarCarrusel() {
  const porcentaje = -(100 / cantidadVisible) * posicion;
  perfumeCarrusel.style.transform = `translateX(${porcentaje}%)`;
}
