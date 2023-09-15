// Dữ liệu kiểm tra: mảng bills
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Hàm tính tiền tip dựa trên giá trị hóa đơn
function calcTip(giaHoaDon) {
    return giaHoaDon >= 50 && giaHoaDon <= 300 ? giaHoaDon * 0.15 : giaHoaDon * 0.2;
}

// Mảng để lưu trữ tiền tip và tổng giá trị (hóa đơn + tiền tip)
const tips = [];
const totals = [];

// Tính tiền tip và tổng giá trị cho từng giá trị hóa đơn sử dụng vòng lặp for
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    
    const total = bills[i] + tip;
    totals.push(total);
}

console.log("Bill values:", bills);
console.log("Tip values:", tips);
console.log("Total values:", totals);

// Hàm tính giá trị trung bình của mảng
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Tính giá trị trung bình của mảng 'totals' và in ra màn hình
const averageTotal = calcAverage(totals);
console.log(`Giá trị trung bình của tổng giá trị là ${averageTotal}`);
