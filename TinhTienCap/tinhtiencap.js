const CN = "cn";
const DN = "dn";

function tinhTienCap(params) {
  var maKhachHang = document.getElementById("usercode").value;

  var loaiKhachHang = document.querySelector(
    'input[name="selector"]:checked'
  ).value;

  var soKetNoiValue = document.getElementById("soketnoi").value * 1;

  var soKenhKetNoiValue = document.getElementById("sokenh").value * 1;

  var total;

  if (loaiKhachHang == CN) {
    total = 4.5 + 20.5 + 7.5 * soKenhKetNoiValue;
  } else if (loaiKhachHang == DN) {
    total =
      15 +
      tinhPhiDichVuCoBanDoanhNghiep(soKenhKetNoiValue) +
      50 * soKenhKetNoiValue;
  }

  document.getElementById("result").innerText =
    "Khach hang " + maKhachHang + " phai thanh toan: $" + total;

  function tinhPhiDichVuCoBanDoanhNghiep(soketnoi) {
    if (soketnoi <= 10) {
      return 7.5 * soketnoi;
    } else {
      return 75 + 5 * (soketnoi - 10);
    }
  }

  function disable(params) {
    document.getElementById("soketnoi").disabled = true;
  }
  
  function enable(params) {
    document.getElementById("soketnoi").disabled = false;
  }
}
