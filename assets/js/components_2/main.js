// Lấy tất cả các nút phân trang có số
const pageItems = document.querySelectorAll('.page-item:not(.next-btn)');

pageItems.forEach(item => {
    item.addEventListener('click', function() {
        // Xóa class active ở tất cả các nút khác
        pageItems.forEach(btn => btn.classList.remove('active'));
        
        // Thêm class active vào nút vừa nhấn
        this.classList.add('active');
        
        // Bạn có thể thực hiện load dữ liệu mới ở đây
        console.log("Đang chuyển sang trang: " + this.innerText);
    });
}); 