document.addEventListener('DOMContentLoaded', function () {
    // Parallax

    if (window.simpleParallax) {
        new simpleParallax(document.querySelectorAll('.parallax-img'), {
            orientation: 'up',
            scale: 1.3,
            delay: 2,
            transition: 'cubic-bezier(0,0,0,1)'
        });
    }

    // Haumburger Button to open menu on smartphone

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainModal = document.getElementById('mainModal');
    const mainModalPanel = document.getElementById('mainModalPanel');
    const closeMainModalBtn = document.getElementById('closeMainModalBtn');

    function openModal() {
        mainModal.classList.remove('pointer-events-none', 'opacity-0');
        mainModal.classList.add('pointer-events-auto', 'opacity-100');
        mainModalPanel.classList.remove('-translate-y-full');
        mainModalPanel.classList.add('translate-y-0');
    }
    function closeModal() {
        mainModal.classList.add('opacity-0');
        mainModal.classList.remove('opacity-100', 'pointer-events-auto');
        mainModal.classList.add('pointer-events-none');
        mainModalPanel.classList.add('-translate-y-full');
        mainModalPanel.classList.remove('translate-y-0');

        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openModal);
    }

    if (closeMainModalBtn) {
        closeMainModalBtn.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function (e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && !mainModal.classList.contains('opacity-0')) {
            closeModal();
        }
    });

    // Our experience category swiper

    var swiper = new Swiper(".exp_swiper", {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        speed: 2000, // Slow transition between slides to 2 seconds
        breakpoints: {
            // when window width is >= 0px (smartphone)
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            // when window width is >= 768px (md size, and up)
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3
            }
        }
    });


    // featured Swiper with vertical thumbs swiper 

    var featuredThumbsSwiper = new Swiper(".featured-thumbs-swiper", {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        // loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    var featuredSwiper = new Swiper(".featured-swiper", {
        spaceBetween: 10,
        slidesPerView: 1,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        speed: 2000,
        pagination: {
            el: '.featured-swiper .swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        thumbs: {
            swiper: featuredThumbsSwiper,
        },
    });

    // Double Thumbnail slider

    var experiencesThumbsSwiper = new Swiper(".experiences-thumbs-swiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        grid: {
            rows: 2,
            fill: 'row',
        },
    });


    var experiencesSwiper = new Swiper(".experiences-swiper", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.experiences-swiper-container .swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        speed: 1000,
        thumbs: {
            swiper: experiencesThumbsSwiper,
        },
    });

    document.querySelectorAll('.featured-thumbs-swiper .swiper-slide').forEach(function (slide) {
        slide.addEventListener('mouseover', function (item) {
            console.log('bot');
            this.click();
        });
    });

    if (typeof AOS !== 'undefined' && AOS.init) {
        AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false
        });
    }
});