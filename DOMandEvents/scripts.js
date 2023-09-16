// Khởi tạo biến
let score = 0;
let secretNumber = generateSecretNumber();

// Hàm trợ giúp để tạo số ngẫu nhiên từ 1 đến 100
function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Hàm để đặt lại trò chơi
function resetGame() {
    //khôi phục giá trị ban đầu của biến 'score' và 'secretNumber'.
    score = 0;
    secretNumber = generateSecretNumber();

    // Đặt lại các phần tử HTML
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Bắt đầu đoán...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    // phục hồi màu nền ban đầu (#222) và chiều rộng số (15rem).
    document.querySelector('.game').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}
// Chọn phần tử có lớp 'again' và đính kèm một trình xử lý sự kiện nhấp chuột.
document.querySelector('.again').addEventListener('click', resetGame);
