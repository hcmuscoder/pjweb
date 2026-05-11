{
    // =========================================
    // TÍNH NĂNG GỬI BÌNH LUẬN (Dành riêng cho trang bài viết)
    // =========================================
    const btnSend = document.querySelector('.btn-send');
    const commentBox = document.querySelector('.comment-section textarea');

    if (btnSend && commentBox) {
        btnSend.addEventListener('click', function() {
            if (commentBox.value.trim() === '') {
                alert('Vui lòng nhập nội dung bình luận trước khi gửi!');
                return; 
            }
            alert('Cảm ơn bạn! Bình luận của bạn đã được ghi nhận và đang chờ duyệt.');
            commentBox.value = ''; // Xóa trắng ô nhập
        });
    }
}