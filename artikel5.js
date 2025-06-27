// artikel5.js
(function() { // Ini adalah IIFE (Immediately Invoked Function Expression)
    // Variabel dan konstanta yang spesifik untuk slider ini
    let currentSlide = 0;
    let totalSlides = 0; // Akan dihitung saat render
    let isMobile = false;

    // Data artikel untuk slider Tadabur Ayat
    const artikelData = [
        {
            img: "Gambar/cukur.png",
            date: "June 15, 2025",
            comments: "1",
            views: "1,000",
            title: "Tafsir Surat Ath-Thariq: Yang Datang pada Waktu Malam",
            desc: "Mendalami makna dan hikmah dari surat Ath-Thariq yang turun pada waktu malam..."
        },
        {
            img: "Gambar/Masjid.png",
            date: "June 10, 2025",
            comments: "0",
            views: "1,258",
            title: "Surat Al-Ghashiyah: Peristiwa yang Menyelubungi",
            desc: "Memahami pesan mendalam tentang hari akhir dalam surat Al-Ghashiyah..."
        },
        {
            img: "Gambar/Tidur.png",
            date: "June 5, 2025",
            comments: "3",
            views: "1,870",
            title: "Surat Al-Fajr: Fajar dan Sumpah Allah",
            desc: "Tadabur ayat-ayat Al-Fajr tentang kekuasaan Allah dan sejarah umat terdahulu..."
        },
        {
            img: "Gambar/Kerja.png",
            date: "May 29, 2025",
            comments: "2",
            views: "1,620",
            title: "Surat Al-Balad: Negeri yang Aman",
            desc: "Refleksi tentang kehidupan di dunia dan pilihan jalan yang benar..."
        },
        {
            img: "Gambar/Quran.png",
            date: "May 25, 2025",
            comments: "0",
            views: "1,120",
            title: "Surat Ash-Shams: Matahari dan Jiwa Manusia",
            desc: "Memahami perumpamaan matahari dengan penyucian jiwa manusia..."
        },
        {
            img: "Gambar/Tidur.png",
            date: "May 18, 2025",
            comments: "4",
            views: "2,005",
            title: "Surat Al-Lail: Malam dan Siang",
            desc: "Kontras antara malam dan siang sebagai simbol perbuatan manusia..."
        }
    ];

    // Dapatkan referensi elemen DOM hanya sekali
    const slidesContainer = document.getElementById('slidesContainer');
    const dotsContainer = document.getElementById('dotsContainer');
    const prevBtn = document.querySelector('.section-artikel5 .arrow-btn.prev'); // Lebih spesifik
    const nextBtn = document.querySelector('.section-artikel5 .arrow-btn.next'); // Lebih spesifik

    // Fungsi untuk merender/menggambar ulang seluruh konten slider
    function renderArtikel5Slider() {
        if (!slidesContainer || !prevBtn || !nextBtn || !dotsContainer) {
            console.warn("Salah satu elemen penting untuk slider artikel5 tidak ditemukan. Mungkin ID/class salah atau DOM belum siap.");
            return; // Berhenti jika elemen tidak ditemukan
        }

        slidesContainer.innerHTML = ''; // Bersihkan konten yang ada
        dotsContainer.innerHTML = '';    // Bersihkan dots yang ada

        const screenWidth = window.innerWidth;
        isMobile = screenWidth <= 767;

        if (isMobile) {
            // Mobile: Setiap artikel menjadi slide sendiri
            totalSlides = artikelData.length;
            artikelData.forEach(artikel => {
                const slideDiv = document.createElement('div');
                slideDiv.className = 'artikel5-slide';
                slideDiv.innerHTML = `
                    <div class="artikel5-item">
                        <a href="#">
                            <img src="${artikel.img}" alt="${artikel.title}">
                            <div class="artikel5-meta">
                                <span>🕒 ${artikel.date}</span>
                                <span>💬 ${artikel.comments}</span>
                                <span>🔥 ${artikel.views}</span>
                            </div>
                            <h3>${artikel.title}</h3>
                            <p>${artikel.desc}</p>
                            <span class="artikel5-more">Baca Selengkapnya</span>
                        </a>
                    </div>
                `;
                slidesContainer.appendChild(slideDiv);
            });
        } else {
            // Desktop: Kelompokkan 3 artikel per slide
            totalSlides = Math.ceil(artikelData.length / 3);
            for (let i = 0; i < totalSlides; i++) {
                const slideDiv = document.createElement('div');
                slideDiv.className = 'artikel5-slide';
                
                const startIdx = i * 3;
                const endIdx = Math.min(startIdx + 3, artikelData.length);
                const articlesForSlide = artikelData.slice(startIdx, endIdx);

                articlesForSlide.forEach(artikel => {
                    slideDiv.innerHTML += `
                        <div class="artikel5-item">
                            <a href="#">
                                <img src="${artikel.img}" alt="${artikel.title}">
                                <div class="artikel5-meta">
                                    <span>🕒 ${artikel.date}</span>
                                    <span>💬 ${artikel.comments}</span>
                                    <span>🔥 ${artikel.views}</span>
                                </div>
                                <h3>${artikel.title}</h3>
                                <p>${artikel.desc}</p>
                                <span class="artikel5-more">Baca Selengkapnya</span>
                            </a>
                        </div>
                    `;
                });
                slidesContainer.appendChild(slideDiv);
            }
        }
        
        // Pastikan currentSlide tidak melebihi totalSlides baru
        if (currentSlide >= totalSlides) {
            currentSlide = totalSlides > 0 ? totalSlides - 1 : 0;
        }
        if (currentSlide < 0) {
            currentSlide = 0;
        }

        updateSlidePosition();
        renderDots();
        updateNavButtons();
    }

    // Fungsi untuk memperbarui posisi slide
    function updateSlidePosition() {
        // Hanya update jika container sudah ada dan memiliki slides
        if (slidesContainer && slidesContainer.children.length > 0) {
            const translateX = -currentSlide * 100;
            slidesContainer.style.transform = `translateX(${translateX}%)`;
        }
    }

    // Fungsi untuk merender dots navigasi
    function renderDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (i === currentSlide) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Fungsi untuk memperbarui status tombol navigasi (disable/enable)
    function updateNavButtons() {
        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }
    }

    // Fungsi untuk memperbarui kelas 'active' pada dots
    function updateDotsActiveState() {
        const dots = document.querySelectorAll('.artikel5-dots .dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Fungsi navigasi Next
    function nextArtikel5Slide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlidePosition();
            updateNavButtons();
            updateDotsActiveState();
        }
    }

    // Fungsi navigasi Previous
    function prevArtikel5Slide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlidePosition();
            updateNavButtons();
            updateDotsActiveState();
        }
    }

    // Fungsi navigasi Langsung ke Slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlidePosition();
        updateNavButtons();
        updateDotsActiveState();
    }

    // --- Event Listeners ---
    document.addEventListener('DOMContentLoaded', () => {
        // Tambahkan event listener untuk tombol panah
        if (prevBtn) {
            prevBtn.addEventListener('click', prevArtikel5Slide);
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', nextArtikel5Slide);
        }

        // Panggil render awal slider
        renderArtikel5Slider();
    });

    // Panggil renderArtikel5Slider setiap kali ukuran jendela berubah
    window.addEventListener('resize', () => {
        clearTimeout(window.artikel5ResizeTimer);
        window.artikel5ResizeTimer = setTimeout(() => {
            const newIsMobile = window.innerWidth <= 767;
            if (newIsMobile !== isMobile) { // Hanya render ulang jika mode tampilan berubah
                renderArtikel5Slider();
            } else { // Jika hanya ukuran berubah tapi mode sama, hanya update posisi
                updateSlidePosition();
            }
            updateNavButtons();
            updateDotsActiveState();
        }, 250); // Delay 250ms
    });

    // --- Touch Support ---
    let startX = 0;
    let endX = 0;

    // Gunakan event delegation atau pastikan elemen target spesifik
    document.querySelector('.section-artikel5').addEventListener('touchstart', (e) => {
        if (e.target.closest('.artikel5-slider')) { // Hanya tangani jika sentuhan di dalam slider
            startX = e.touches[0].clientX;
        }
    }, { passive: true });

    document.querySelector('.section-artikel5').addEventListener('touchend', (e) => {
        if (e.target.closest('.artikel5-slider')) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        }
    });

    function handleSwipe() {
        const minSwipeDistance = 50;
        const swipeDistance = startX - endX;

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                nextArtikel5Slide();
            } else {
                prevArtikel5Slide();
            }
        }
    }

})(); // Tutup IIFE