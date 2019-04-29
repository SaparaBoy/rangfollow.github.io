var txtbox = document.getElementById("txt");
var dbox = document.getElementById("dbox");
var no = document.getElementById("num");
var face = document.getElementById("emoji");
txtbox.value = 0;
txtbox.addEventListener("input", function(e) {
  txtL = txtbox.value;
  no.textContent = txtL;
  dbox.style.left = +txtL + "%";
  console.log(txtL);

  if (txtL >= 25 && txtL < 50) {
    face.src = "emoji/emoji2.png";
  } else if (txtL >= 50 && txtL < 75) {
    face.src = "emoji/emoji3.png";
  } else if (txtL >= 75 && txtL < 90) {
    face.src = "emoji/emoji4.png";
  } else if (txtL >= 90) {
    face.src = "emoji/emoji5.png";
  } else {
    face.src = "emoji/emoji1.png";
  }
});
//<i class="far fa-laugh-beam"></i> <i class="far fa-smile"></i>
