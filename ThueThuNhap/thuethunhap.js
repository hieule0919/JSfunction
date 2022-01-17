function tinhThue() {
    
    var username = document.getElementById("ten").value;
    console.log(username);

    var income = document.getElementById("money").value*1;
    console.log(income);

    var peopleDepend = document.getElementById("people").value*1;
    console.log(peopleDepend);

    var incomeChiuThue = income - 4 - (peopleDepend*1.6);
    console.log(incomeChiuThue);

    var thue = 0;

    if (incomeChiuThue <= 60) {
        thue = incomeChiuThue /100 * 5;
    } else if (incomeChiuThue >60 && incomeChiuThue <= 120) {
        thue = incomeChiuThue / 100 * 10;
    } else if (incomeChiuThue>120 && incomeChiuThue <= 210){
        thue = incomeChiuThue / 100 * 15;
    } else if (incomeChiuThue>210 && incomeChiuThue <= 384){
        thue = incomeChiuThue / 100 * 20;
    } else if (incomeChiuThue>384 && incomeChiuThue <= 624){
        thue = incomeChiuThue / 100 * 25;
    } else if (incomeChiuThue>624 && incomeChiuThue <= 960){
        thue = incomeChiuThue / 100 * 30;
    } else if (incomeChiuThue>960){
        thue = incomeChiuThue / 100 * 35;
    }

    document.getElementById("result").innerText="Thue thu nhap ca nhan ban phai dong la: " + thue;
    
}