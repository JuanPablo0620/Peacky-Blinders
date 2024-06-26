document.addEventListener('DOMContentLoaded', () => {
  // Carrusel de la sección "carrusel"
  let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
  }

  function nextSlide() {
      slideIndex = (slideIndex + 1) % totalSlides;
      showSlide(slideIndex);
  }

  function prevSlide() {
      slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
      showSlide(slideIndex);
  }

  showSlide(slideIndex);

  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');

  prevButton.addEventListener('click', () => {
      prevSlide();
      activateTransition(carousel);
  });

  nextButton.addEventListener('click', () => {
      nextSlide();
      activateTransition(carousel);
  });

  // Función para activar la transición
  function activateTransition(element) {
      element.style.transition = 'transform 1s ease-in-out';
  }

  // Carrusel de la sección "pasarella"
  let slideIndexPasarella = 0;
  const slidesPasarella = document.querySelectorAll('.pasarella-item');
  const totalSlidesPasarella = slidesPasarella.length;

  function showSlidePasarella(index) {
      slidesPasarella.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
  }

  function nextSlidePasarella() {
      slideIndexPasarella = (slideIndexPasarella + 1) % totalSlidesPasarella;
      showSlidePasarella(slideIndexPasarella);
  }

  function prevSlidePasarella() {
      slideIndexPasarella = (slideIndexPasarella - 1 + totalSlidesPasarella) % totalSlidesPasarella;
      showSlidePasarella(slideIndexPasarella);
  }

  showSlidePasarella(slideIndexPasarella);

  const prevButtonPasarella = document.querySelector('.pasarella-control.prev');
  const nextButtonPasarella = document.querySelector('.pasarella-control.next');

  prevButtonPasarella.addEventListener('click', () => {
      prevSlidePasarella();
      activateTransition(pasarella);
  });

  nextButtonPasarella.addEventListener('click', () => {
      nextSlidePasarella();
      activateTransition(pasarella);
  });

  function activateTransitionPasarella(element) {
      element.style.transition = 'transform 1s ease-in-out';
  }
});