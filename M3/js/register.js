let button = document.getElementById("registering");
button.addEventListener("click", function () {
  let password = document.getElementById("password").value;
  let passwordc = document.getElementById("passwordc").value;
  console.log(password);
  if (password === passwordc) {
    window.location.href = "login.html";
  } else {
    alert("passwords don't match");
  }
  document.getElementById("password").value = "";
  document.getElementById("passwordc").value = "";
});
