// Tính năng Back to Top (Lên đầu trang) 
const bttButton = document.getElementById("backToTop");

window.onscroll = function() {
    // Hiện nút khi người dùng cuộn xuống hơn 400px
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        bttButton.style.display = "block";
    } else {
        bttButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hiệu ứng cuộn mượt
    });
}

// Tính năng Slider cho phần Tin tức được quan tâm
const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const slider = document.getElementById('newsSlider');

// Khi bấm nút mũi tên phải
if (buttonRight && slider) {
    buttonRight.onclick = function () {
        slider.scrollLeft += 200; // Kéo sang phải 1 bài báo
    };
}

// Khi bấm nút mũi tên trái
if (buttonLeft && slider) {
    buttonLeft.onclick = function () {
        slider.scrollLeft -= 200; // Kéo sang trái 1 bài báo
    };
}
// Tính năng Gửi bình luận
const btnSend = document.querySelector('.btn-send');
const commentBox = document.querySelector('.comment-section textarea');

if (btnSend && commentBox) {
    btnSend.onclick = function() {
        // 1. Kiểm tra xem người dùng đã nhập nội dung chưa (tránh gửi bình luận trống)
        if (commentBox.value.trim() === '') {
            alert('Vui lòng nhập nội dung bình luận trước khi gửi!');
            return; // Dừng lại, không chạy tiếp
        }

        // 2. Hiện thông báo gửi thành công (Tùy chọn)
        alert('Cảm ơn bạn! Bình luận của bạn đã được ghi nhận và đang chờ duyệt.');

        // 3. Xóa trắng nội dung trong ô textbox sau khi gửi
        commentBox.value = '';
    };
}


