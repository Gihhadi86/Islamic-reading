// Menangani mode toggle (jika ada fitur dark mode)
const modeToggle = document.getElementById('mode-toggle');
if (modeToggle) {
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Menangani tombol hamburger untuk menu responsif
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Event listener untuk tombol hamburger
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Menangani sticky navbar yang muncul saat scroll ke atas
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

if (navbar) {
    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            // Scroll ke bawah: sembunyikan navbar
            navbar.classList.remove('navbar-visible');
            navbar.classList.add('navbar-hidden');
        } else {
            // Scroll ke atas: tampilkan navbar
            navbar.classList.remove('navbar-hidden');
            navbar.classList.add('navbar-visible');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Untuk mengatasi masalah scroll negatif
    });
}

let slideIndex = 0;

function changeSlide(direction) {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = document.querySelectorAll('.image-gallery').length;

    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateButtons();
}

function updateButtons() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (slideIndex === 0) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'block';
    } else if (slideIndex === document.querySelectorAll('.image-gallery').length - 1) {
        prevButton.style.display = 'block';
        nextButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }
}

// Panggil updateButtons untuk pertama kali saat halaman dimuat
updateButtons();