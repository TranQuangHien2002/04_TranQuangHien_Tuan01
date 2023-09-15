// Dữ liệu kiểm tra
const giaHoaDon = [275, 40, 430];

giaHoaDon.forEach((hoaDon) => {
   // const tienTip = hoaDon < 50 ? 0 : hoaDon <= 300 ? hoaDon * 0.15 : hoaDon * 0.2;
    const tienTip = hoaDon >= 50 && hoaDon <= 300 ? hoaDon * 0.15 : hoaDon * 0.2;
    const tongTien = hoaDon + tienTip;

    console.log(`Hóa đơn là ${hoaDon}, số tiền tip là ${tienTip}, và tổng giá trị ${tongTien}`);
});

