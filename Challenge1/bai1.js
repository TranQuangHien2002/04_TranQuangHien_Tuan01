function tinhBMI(canNang, chieuCao) {
    return canNang / (chieuCao ** 2);
}

function soSanhBMI(canNangMark, chieuCaoMark, canNangJohn, chieuCaoJohn) {
    const bmiMark = tinhBMI(canNangMark, chieuCaoMark);
    const bmiJohn = tinhBMI(canNangJohn, chieuCaoJohn);
    return bmiMark > bmiJohn;
}

// Dữ liệu 1
const canNangMark1 = 78;
const chieuCaoMark1 = 1.69;
const canNangJohn1 = 92;
const chieuCaoJohn1 = 1.95;
const kq1 = soSanhBMI(canNangMark1, chieuCaoMark1, canNangJohn1, chieuCaoJohn1);

// Dữ liệu 2
const canNangMark2 = 95;
const chieuCaoMark2 = 1.88;
const canNangJohn2 = 85;
const chieuCaoJohn2 = 1.76;
const kq2 = soSanhBMI(canNangMark2, chieuCaoMark2, canNangJohn2, chieuCaoJohn2);

// In kết quả
console.log("Dữ liệu 1:");
console.log("BMI của Mark:", tinhBMI(canNangMark1, chieuCaoMark1));
console.log("BMI của John:", tinhBMI(canNangJohn1, chieuCaoJohn1));
console.log("Mark có BMI cao hơn John không?:", kq1);

console.log("\nDữ liệu 2:");
console.log("BMI của Mark:", tinhBMI(canNangMark2, chieuCaoMark2));
console.log("BMI của John:", tinhBMI(canNangJohn2, chieuCaoJohn2));
console.log("Mark có BMI cao hơn John không?:", kq2);
