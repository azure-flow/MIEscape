document.addEventListener('DOMContentLoaded', function () {
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

    hamburgerBtn.addEventListener('click', openModal);

    closeMainModalBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && !mainModal.classList.contains('opacity-0')) {
            closeModal();
        }
    });
});





















// Paralax
document.addEventListener('DOMContentLoaded', function () {
    if (window.simpleParallax) {
        new simpleParallax(document.querySelectorAll('.parallax-img'), {
            orientation: 'up',
            scale: 1.3,
            delay: 2,
            transition: 'cubic-bezier(0,0,0,1)'
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: false,
        mirror: false
    });
});
window.addEventListener('load', function () {
    AOS.refresh();
});

document.addEventListener('DOMContentLoaded', function () {

    var swiper = new Swiper(".exp_swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        speed: 2000, // Slow transition between slides to 2 seconds
    });

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerBtn_sp = document.getElementById('hamburgerBtn_sp');
    const sideModal = document.getElementById('sideModal');
    const topSpModal = document.getElementById('topSpModal');
    const sideModalPanel = document.getElementById('sideModalPanel');
    const topSpModalPanel = document.getElementById('topSpModalPanel');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeSpModalBtn = document.getElementById('closeSpModalBtn');
    const sideModalBg = document.getElementById('sideModalBg');
    const topSpModalBg = document.getElementById('topSpModalBg');

    function openModal() {
        sideModal.classList.remove('pointer-events-none', 'opacity-0');
        sideModal.classList.add('pointer-events-auto', 'opacity-100');
        sideModalPanel.classList.remove('-translate-x-full');
        sideModalPanel.classList.add('translate-x-0');
    }
    function openSpModal() {
        topSpModal.classList.remove('pointer-events-none', 'opacity-0');
        topSpModal.classList.add('pointer-events-auto', 'opacity-100');
        topSpModalPanel.classList.remove('-translate-y-full');
        topSpModalPanel.classList.add('translate-y-0');
    }
    function closeModal() {
        sideModal.classList.add('opacity-0');
        sideModal.classList.remove('opacity-100', 'pointer-events-auto');
        sideModal.classList.add('pointer-events-none');
        sideModalPanel.classList.add('-translate-x-full');
        sideModalPanel.classList.remove('translate-x-0');

        document.body.style.overflow = '';
    }

    function closeSpModal() {
        topSpModal.classList.remove('opacity-100', 'pointer-events-auto');
        topSpModal.classList.add('opacity-0');
        topSpModal.classList.add('pointer-events-none');
        topSpModalPanel.classList.add('-translate-y-full');
        topSpModalPanel.classList.remove('translate-y-0');

        document.body.style.overflow = '';
    }
    hamburgerBtn.addEventListener('click', openModal);
    hamburgerBtn_sp.addEventListener('click', openSpModal);

    closeModalBtn.addEventListener('click', closeModal);
    sideModalBg.addEventListener('click', closeModal);

    topSpModalBg.addEventListener('click', closeSpModal);
    closeSpModalBtn.addEventListener('click', closeSpModal);

    document.addEventListener('keydown', function (e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && !sideModal.classList.contains('opacity-0')) {
            closeModal();
        }
    });
});
