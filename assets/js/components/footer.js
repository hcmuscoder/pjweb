{
    // =========================================
    // 1. TÍNH NĂNG BACK TO TOP
    // =========================================
    const btnTop = document.getElementById("backToTop");

    if (btnTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                btnTop.style.display = "block";
            } else {
                btnTop.style.display = "none";
            }
        });

        btnTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =========================================
    // 2. TÍNH NĂNG SLIDER TIN TỨC FOOTER
    // =========================================
    const btnRight = document.getElementById('slideRight');
    const btnLeft = document.getElementById('slideLeft');
    const sliderBox = document.getElementById('newsSlider');

    if (btnRight && sliderBox) {
        btnRight.addEventListener('click', function () {
            sliderBox.scrollLeft += 200; 
        });
    }

    if (btnLeft && sliderBox) {
        btnLeft.addEventListener('click', function () {
            sliderBox.scrollLeft -= 200; 
        });
    }
}