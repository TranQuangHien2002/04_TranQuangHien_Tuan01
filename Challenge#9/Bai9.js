// Hàm in dự báo nhiệt độ từ mảng
function printForecast(arr) {
    let forecast = "";
    for (let i = 0; i < arr.length; i++) {
        forecast += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(forecast);
}

// Dữ liệu kiểm tra
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log("Data 1:");
printForecast(data1);

console.log("\nData 2:");
printForecast(data2);
