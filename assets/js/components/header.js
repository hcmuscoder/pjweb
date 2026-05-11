       // 1. Tự động cập nhật Ngày, Giờ thực tế
        function updateDateTime() {
            const now = new Date();
            
            // Xử lý ngày
            const daysOfWeek = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
            const dayName = daysOfWeek[now.getDay()];
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            
            document.getElementById('date-display').innerText = `${dayName}, ${day}/${month}/${year}`;
            
            // Xử lý giờ
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            document.getElementById('time-display').innerText = `${hours}:${minutes}:${seconds}`;
        }
        
        // Gọi hàm mỗi giây
        setInterval(updateDateTime, 1000);
        updateDateTime(); // Chạy ngay khi load

        // 3. Toggle Menu cho Mobile
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mainNav = document.getElementById('main-nav');

        mobileBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Đổi icon từ hamburger sang X khi mở menu
            const icon = this.querySelector('i');
            if(mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        // Bắt sự kiện cuộn trang
// Bắt sự kiện cuộn trang (Đã sửa lỗi giật lag)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // Nếu cuộn xuống thật sâu (qua mốc 150px) thì mới bắt đầu thu nhỏ
    if (window.scrollY > 150) {
        header.classList.add('shrink'); 
    } 
    // Nếu cuộn ngược lên sát mép trên cùng (dưới 50px) thì mới cho to lại
    else if (window.scrollY < 50) {
        header.classList.remove('shrink'); 
    }
});