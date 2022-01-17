const X = "X";
const A = "A";
const B = "B";
const C = "C";
const Khong = "Khong";
const DT1 = "DT1";
const DT2 = "DT2";
const DT3 = "DT3";

function tinhDiem(params) {
  var khuVucValue = document.querySelector(
    'input[name="selectorKV"]:checked'
  ).value;


  var doiTuongThiValue = document.querySelector(
    'input[name="selector"]:checked'
  ).value;


  var diemMon1 = document.getElementById("subject1").value * 1;


  var diemMon2 = document.getElementById("subject2").value * 1;


  var diemMon3 = document.getElementById("subject3").value * 1;


  var diemChuan = document.getElementById("diemchuan").value * 1;


  var diemKhuVuc = tinhDiemKhuVuc(khuVucValue);


  var diemDoiTuong = tinhDiemDoiTuong(doiTuongThiValue);


  var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;


  if (tongDiem >= diemChuan) {
    document.getElementById("result").innerText =
      "ban da dau voi tong diem la: " + tongDiem;
  } else {
    document.getElementById("result").innerText =
      "ban da rot voi tong diem la: " + tongDiem;
  }

  function tinhDiemKhuVuc(khuVuc) {
    if (khuVuc === X) {
      return 0;
    }
    if (khuVuc === A) {
      return 2;
    }
    if (khuVuc === B) {
      return 1;
    }
    if (khuVuc === C) {
      return 0.5;
    }
  }

  function tinhDiemDoiTuong(doiTuong) {
    if (doiTuong === Khong) {
      return 0;
    }
    if (doiTuong === DT1) {
      return 2.5;
    }
    if (doiTuong === DT2) {
      return 1.5;
    }
    if (doiTuong === DT3) {
      return 1;
    }
  }
}
