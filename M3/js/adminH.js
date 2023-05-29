let send = document.getElementById("send");
let ta = document.getElementById("freeform");

send.addEventListener("click", () => {
  alert("sent successfully");
  ta.value = "";
});
