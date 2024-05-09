// Ini JavaScript

function validation() {
    console.log('Good');
}

document.getElementById('home-btn').addEventListener('click', () => validation())

let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  const intervalTime = 3000;

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel();
  }

  function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  }

 
  setInterval(() => {
    moveSlide(1);
  }, intervalTime);


