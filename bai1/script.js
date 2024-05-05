document.getElementById("submit-btn").addEventListener("submit", function(event) {
    event.preventDefault();
    // Xử lý logic gửi form ở đây, ví dụ: gửi dữ liệu form đến một API hoặc địa chỉ email

    // Hiển thị thông báo gửi thành công
    var successMessage = document.createElement("div");
    successMessage.textContent = "Gửi thành công!";
    successMessage.classList.add("success-message");
    document.getElementById("response-message").appendChild(successMessage);

    // Xóa thông báo sau một khoảng thời gian
    setTimeout(function() {
        successMessage.remove();
    }, 3000); // 3 giây
});