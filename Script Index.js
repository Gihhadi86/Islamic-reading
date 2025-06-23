
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'grid' : 'none';
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  showSlide(0);
});














document.addEventListener("DOMContentLoaded", function () {
  const sliderTrack = document.querySelector('.slider-track');
  const sliderContainer = document.querySelector('.slider-container');
  const dots = document.querySelectorAll('.slider-horizontal .dot');
  const prevBtn = document.querySelector('.slider-horizontal .prev-btn');
  const nextBtn = document.querySelector('.slider-horizontal .next-btn');
  const articles = document.querySelectorAll('.slider-horizontal .article');
  let slideIndex = 0;

  function updateSlider() {
    const slideWidth = articles[0].offsetWidth + 15;
    sliderContainer.scrollTo({
      left: slideWidth * slideIndex,
      behavior: 'smooth'
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === slideIndex);
    });
  }

  nextBtn?.addEventListener('click', () => {
    if (slideIndex < articles.length - 1) {
      slideIndex++;
      updateSlider();
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (slideIndex > 0) {
      slideIndex--;
      updateSlider();
    }
  });

  sliderContainer?.addEventListener('scroll', () => {
    const index = Math.round(sliderContainer.scrollLeft / articles[0].offsetWidth);
    slideIndex = index;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  });
});












document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById('bulughul-slider');
  const prevBtn = document.querySelector('.bulughul-prev');
  const nextBtn = document.querySelector('.bulughul-next');

  if (slider && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: slider.clientWidth * 0.9, behavior: 'smooth' });
    });
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -slider.clientWidth * 0.9, behavior: 'smooth' });
    });
  }
});













document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.artikel5-slide');
  const dots = document.querySelectorAll('.artikel5-dots .dot');
  const nextBtn = document.querySelector('.artikel5-nav .next');
  const prevBtn = document.querySelector('.artikel5-nav .prev');
  let currentSlide = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      showSlide(index);
    });
  });

  showSlide(currentSlide);
});



