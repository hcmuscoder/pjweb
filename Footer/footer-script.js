// 1. Xử lý nút Back to Top
const bttButton = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        bttButton.style.display = "block";
    } else {
        bttButton.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2. Xử lý Slider Tin tức
const btnRight = document.getElementById('slideRight');
const btnLeft = document.getElementById('slideLeft');
const slider = document.getElementById('newsSlider');

if (btnRight && slider) {
    btnRight.onclick = function () { slider.scrollLeft += 200; };
}
if (btnLeft && slider) {
    btnLeft.onclick = function () { slider.scrollLeft -= 200; };
}