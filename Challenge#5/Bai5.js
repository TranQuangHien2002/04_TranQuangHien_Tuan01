// Dữ liệu 1
const diemDolphins1 = [44, 23, 71];
const diemKoalas1 = [65, 54, 49];

// Dữ liệu 2
const diemDolphins2 = [85, 54, 41];
const diemKoalas2 = [23, 34, 27];

const tinhDiemTrungBinh = (diem) => diem.reduce((tong, diem) => tong + diem, 0) / diem.length;

const kiemTraNguoiThang = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins thắng (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas thắng (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("Không có đội nào thắng.");
  }
};

const avgDolphins1 = tinhDiemTrungBinh(diemDolphins1);
const avgKoalas1 = tinhDiemTrungBinh(diemKoalas1);
const avgDolphins2 = tinhDiemTrungBinh(diemDolphins2);
const avgKoalas2 = tinhDiemTrungBinh(diemKoalas2);

//in kết quả
console.log("Dữ liệu 1:");
kiemTraNguoiThang(avgDolphins1, avgKoalas1);
console.log("\nDữ liệu 2:");
kiemTraNguoiThang(avgDolphins2, avgKoalas2);
