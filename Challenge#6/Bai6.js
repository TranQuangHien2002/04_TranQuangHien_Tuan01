// Dữ liệu kiểm tra: mảng bills
const bills = [125, 555, 44];

// Hàm tính tiền tip dựa trên giá trị hóa đơn
function calcTip(giaHoaDon) {
    return giaHoaDon >= 50 && giaHoaDon <= 300 ? giaHoaDon * 0.15 : giaHoaDon * 0.2;
}

// Kiểm tra hàm calcTip với giá trị hóa đơn là 100
const giaHoaDonTest = 100;
const tienTip = calcTip(giaHoaDonTest);
console.log(`Tip cho hóa đơn ${giaHoaDonTest} là $${tienTip}`);

// Tính tiền tip cho mỗi hóa đơn sử dụng hàm calcTip và lưu trữ trong mảng 'tips'
const tips = bills.map(calcTip);

// Tính tổng giá trị (hóa đơn + tiền tip) và lưu trữ trong mảng 'total'
const total = bills.map((giaHoaDon, index) => giaHoaDon + tips[index]);

console.log("Giá trị hóa đơn:", bills);
console.log("Số tiền tip:", tips);
console.log("Tổng giá trị:", total);
