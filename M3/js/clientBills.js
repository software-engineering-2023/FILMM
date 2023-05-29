let pay = document.getElementById("pay");
pay.addEventListener("click", (e) => {
  alert("paid successfully");
  window.location.href = "clientH.html";
});

let CC = document.getElementById("CC");
let BA = document.getElementById("BA");

CC.addEventListener("click", (e) => {
  prompt("enterCreditCardNumber", "12345");
});

BA.addEventListener("click", (e) => {
  prompt("enterAccountNumber", "12345");
});
