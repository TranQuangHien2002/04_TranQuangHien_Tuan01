function tinhBMI(canNang, chieuCao) {
    return canNang / (chieuCao ** 2);
}

function soSanhBMI(canNangMark, chieuCaoMark, canNangJohn, chieuCaoJohn) {
    const bmiMark = tinhBMI(canNangMark, chieuCaoMark);
    const bmiJohn = tinhBMI(canNangJohn, chieuCaoJohn);

    if (bmiMark > bmiJohn) {
        return `BMI của Mark (${bmiMark.toFixed(1)}) cao hơn John (${bmiJohn.toFixed(1)})`;
    } else {
        return `BMI của John (${bmiJohn.toFixed(1)}) cao hơn Mark (${bmiMark.toFixed(1)})`;
    }
}

// Dữ liệu 1
const canNangMark1 = 78;
const chieuCaoMark1 = 1.69;
const canNangJohn1 = 92;
const chieuCaoJohn1 = 1.95;
const thongBao1 = soSanhBMI(canNangMark1, chieuCaoMark1, canNangJohn1, chieuCaoJohn1);

// Dữ liệu 2
const canNangMark2 = 95;
const chieuCaoMark2 = 1.88;
const canNangJohn2 = 85;
const chieuCaoJohn2 = 1.76;
const thongBao2 = soSanhBMI(canNangMark2, chieuCaoMark2, canNangJohn2, chieuCaoJohn2);

// In kết quả
console.log("Dữ liệu 1:");
console.log(thongBao1);
console.log("\nDữ liệu 2:");
console.log(thongBao2);
