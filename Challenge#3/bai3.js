function tinhDiemTrungBinh(diem) {
    const tongDiem = diem.reduce((tong, diem) => tong + diem, 0);
    return tongDiem / diem.length;
}

function kiemTraNguoiThang(dolphins, koalas) {
    const diemTrungBinhDolphins = tinhDiemTrungBinh(dolphins);
    const diemTrungBinhKoalas = tinhDiemTrungBinh(koalas);

    if (diemTrungBinhDolphins >= 100 && diemTrungBinhDolphins > diemTrungBinhKoalas) {
        return "Dolphins chiến thắng!";
    } else if (diemTrungBinhKoalas >= 100 && diemTrungBinhKoalas > diemTrungBinhDolphins) {
        return "Koalas chiến thắng!";
    } else if (diemTrungBinhDolphins === diemTrungBinhKoalas && diemTrungBinhDolphins >= 100 && diemTrungBinhKoalas >= 100) {
        return "Hòa!";
    } else {
        return "Không có đội nào chiến thắng.";
    }
}


// Dữ liệu 1
const diemDolphins1 = [96, 108, 89];
const diemKoalas1 = [88, 91, 110];
// Dữ liệu 2
const diemDolphins2 = [97, 112, 101];
const diemKoalas2 = [109, 95, 123];
// Dữ liệu 3
const diemDolphins3 = [97, 112, 101];
const diemKoalas3 = [109, 95, 106];

//in kết quả
console.log("Dữ liệu 1:", kiemTraNguoiThang(diemDolphins1, diemKoalas1));
console.log("Dữ liệu 2:", kiemTraNguoiThang(diemDolphins2, diemKoalas2));
console.log("Dữ liệu 3:", kiemTraNguoiThang(diemDolphins3, diemKoalas3));
