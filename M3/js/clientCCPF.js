let radioPart = document.getElementById("part");
let radioFull = document.getElementById("full");
let dis = document.getElementById("dis");
let pay = document.getElementById("pay");

if (radioPart.checked === true) {
  dis.disabled = true;
}

radioFull.addEventListener("click", (e) => {
  radioFull.checked = true;
  radioPart.checked = false;
  dis.disabled = false;
});

radioPart.addEventListener("click", (e) => {
  radioPart.checked = true;
  radioFull.checked = false;
  dis.disabled = true;
});

pay.addEventListener("click", (e) => {
  alert("paid successfully");
  window.location.href = "clientH.html";
});
