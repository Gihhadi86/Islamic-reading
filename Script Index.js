
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








// artikel sembilan.js
(function() {
    const artikelData = [
        { // Artikel 1 (akan tampil di halaman 1)
            pageTitle: "Faedah Dari Imam Ibnul Qayyim",
            img: "Gambar/Ilmu.png", // Ganti dengan path gambar Anda
            author: "Muhammad Abduh Tuasikal, MSc",
            date: "October 30, 2024",
            comments: "1",
            views: "5,220",
            title: "Dampak Mengutamakan Dunia: Kehidupan Fana vs Keabadian Akhirat",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam eos possimus culpa, harum ullam autem obcaecati? Officiis illum ducimus enim velit saepe recusandae perferendis ut doloremque aliquid non modi repellat ratione ab laborum quam, cupiditate perspiciatis veniam autem aliquam dicta! Sunt voluptatum nisi at, obcaecati cumque impedit labore natus?",
            readmoreLink: "#artikel9-dampak-dunia"
        },
        { // Artikel 2 (akan tampil di halaman 1, di bawah artikel 1)
            pageTitle: "Faedah Dari Imam Ibnul Qayyim",
            img: "Gambar/Cukur.png", // Ganti dengan path gambar Anda
            author: "Muhammad Abduh Tuasikal, MSc",
            date: "November 6, 2024",
            comments: "0",
            views: "4,633",
            title: "Tiga Syarat Meraih Surga: Cinta, Khawatir, dan Amal",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam eos possimus culpa, harum ullam autem obcaecati? Officiis illum ducimus enim velit saepe recusandae perferendis ut doloremque aliquid non modi repellat ratione ab laborum quam, cupiditate perspiciatis veniam autem aliquam dicta!",
            readmoreLink: "#artikel9-tiga-syarat-surga"
        },
        { // Artikel 3 (akan tampil di halaman 2)
            pageTitle: "Faedah Dari Imam Ibnul Qayyim",
            img: "Gambar/Masjid.png", // Contoh gambar lain
            author: "Penulis A",
            date: "November 10, 2024",
            comments: "5",
            views: "7,000",
            title: "Hikmah Dibalik Ujian: Sabar dan Tawakal dalam Kehidupan Muslim",
            description: "Ujian adalah bagian tak terpisahkan dari kehidupan, pahami hikmah di baliknya dengan sabar dan tawakal kepada Allah SWT.",
            readmoreLink: "#artikel9-ujian-hidup-1"
        },
        { // Artikel 4 (akan tampil di halaman 2, di bawah artikel 3)
            pageTitle: "Faedah Dari Imam Ibnul Qayyim",
            img: "https://via.placeholder.com/800x450/FFC107/FFFFFF?text=Artikel+Selanjutnya+2", // Contoh gambar lain
            author: "Penulis B",
            date: "November 15, 2024",
            comments: "2",
            views: "3,500",
            title: "Pentingnya Menjaga Lisan: Dampak Baik dan Buruknya",
            description: "Lisan adalah pedang bermata dua. Artikel ini membahas mengapa menjaga lisan sangat penting dalam Islam.",
            readmoreLink: "#artikel9-menjaga-lisan-2"
        },
        { // Artikel 5 (akan tampil di halaman 3)
            pageTitle: "Faedah Dari Imam Ibnul Qayyim",
            img: "https://via.placeholder.com/800x450/9C27B0/FFFFFF?text=Artikel+Selanjutnya+3",
            author: "Penulis C",
            date: "November 20, 2024",
            comments: "8",
            views: "9,200",
            title: "Kisah Inspiratif Para Sahabat Nabi dalam Berdakwah",
            description: "Pelajari kisah-kisah luar biasa dari para sahabat Nabi dalam menyebarkan agama Islam di berbagai penjuru dunia.",
            readmoreLink: "#artikel9-kisah-sahabat-3"
        }
        // Tambahkan artikel lain jika Anda memiliki lebih banyak konten
    ];

    // currentArticleIndex akan menjadi indeks artikel PERTAMA dari pasangan yang ditampilkan
    let currentArticleIndex = 0;

    // Dapatkan referensi elemen DOM
    const articleContainer = document.querySelector('.artikel9-article-container');
    const pageTitleElement = document.querySelector('.artikel9-page-title');
    const prevBtn = document.querySelector('.artikel9-pagination-btn.prev-article');
    const nextBtn = document.querySelector('.artikel9-pagination-btn.next-article');

    function createArtikelHtml(article) {
        return `
            <div class="artikel9-item">
                <div class="artikel9-image-wrapper">
                    <img src="${article.img}" alt="${article.title}">
                    <div class="artikel9-overlay-content">
                        <div class="artikel9-meta-overlay">
                            <span class="artikel9-meta-item"><i class="fas fa-user-circle"></i> ${article.author}</span>
                            <span class="artikel9-meta-item"><i class="far fa-clock"></i> ${article.date}</span>
                            <span class="artikel9-meta-item"><i class="far fa-comment"></i> ${article.comments}</span>
                            <span class="artikel9-meta-item"><i class="fas fa-fire"></i> ${article.views}</span>
                        </div>
                        <h3 class="artikel9-title">${article.title}</h3>
                    </div>
                </div>
                <p class="artikel9-description">${article.description}</p>
                <a href="${article.readmoreLink}" class="artikel9-readmore-btn">Baca Selengkapnya »</a>
            </div>
        `;
    }

    // Fungsi untuk merender SATU ATAU DUA artikel
    function renderArticles(startIndex) {
        if (startIndex < 0) startIndex = 0; // Pastikan tidak negatif
        
        // Halaman ini akan menampilkan artikel di startIndex dan startIndex + 1
        const article1 = artikelData[startIndex];
        const article2 = artikelData[startIndex + 1]; // Mungkin undefined

        // Kosongkan container
        articleContainer.innerHTML = '';

        // Update judul utama halaman (jika ada)
        if (pageTitleElement && article1 && article1.pageTitle) {
            pageTitleElement.textContent = article1.pageTitle;
        }

        // Render artikel pertama
        if (article1) {
            articleContainer.innerHTML += createArtikelHtml(article1);
        }

        // Render artikel kedua (jika ada dan ada cukup data)
        if (article2) {
            articleContainer.innerHTML += createArtikelHtml(article2);
        }
        
        currentArticleIndex = startIndex; // Perbarui indeks artikel awal yang sedang ditampilkan
        updatePaginationButtons();
    }

    function updatePaginationButtons() {
        // nextBtn akan disabled jika artikel terakhir yang ditampilkan adalah artikelData.length - 1 atau artikelData.length - 2 (jika hanya ada 1 artikel tersisa di akhir)
        // prevBtn akan disabled jika kita menampilkan artikel pertama (indeks 0)
        prevBtn.disabled = currentArticleIndex === 0;
        nextBtn.disabled = currentArticleIndex >= artikelData.length - 2; // Jika hanya 1 artikel tersisa, next sudah disabled
    }

    function nextArticleSet() {
        // Lompat 2 artikel sekaligus
        if (currentArticleIndex < artikelData.length - 2) { // Pastikan ada setidaknya 2 artikel lagi
            renderArticles(currentArticleIndex + 2);
        } else if (currentArticleIndex < artikelData.length -1) { // Jika hanya ada 1 artikel tersisa
             renderArticles(currentArticleIndex + 1);
        }
    }

    function prevArticleSet() {
        // Mundur 2 artikel sekaligus
        if (currentArticleIndex > 0) {
            renderArticles(currentArticleIndex - 2 < 0 ? 0 : currentArticleIndex - 2); // Pastikan tidak mundur ke indeks negatif
        }
    }

    // Event Listeners
    document.addEventListener('DOMContentLoaded', () => {
        if (prevBtn && nextBtn && articleContainer && pageTitleElement) {
            prevBtn.addEventListener('click', prevArticleSet);
            nextBtn.addEventListener('click', nextArticleSet);

            // Render artikel pertama dan kedua saat DOMContentLoaded
            renderArticles(0);
        } else {
            console.warn("Elemen untuk Artikel 9 tidak ditemukan. Pastikan HTML sudah benar.");
        }
    });

})();


