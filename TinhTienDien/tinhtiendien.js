function tinhTien(params) {
  var username = document.getElementById("ten").value;

  var soDienValue = document.getElementById("sodien").value * 1;

  console.log(soDienValue);

  var tongTien = 0;
  if (soDienValue <= 50) {
    tongTien = soDienValue * 500;
  } else if (soDienValue >= 51 && soDienValue <= 100) {
    tongTien = 500 * 50 + (soDienValue - 50) * 650;
  } else if (soDienValue >= 101 && soDienValue <= 200) {
    tongTien = 500 * 50 + 650 * 50 + (soDienValue - 100) * 850;
  } else if (soDienValue >= 201 && soDienValue <= 350) {
    tongTien = 500 * 50 + 650 * 50 + 850 * 100 + (soDienValue - 200) * 1100;
  } else {
    tongTien =
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (soDienValue - 350) * 1300;
  }

  document.getElementById("result").innerText =
    "Khach hang " + username + " phai tra so tien dien la: " + tongTien;
}
