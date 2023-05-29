let audio = document.getElementById("audio");

// If Enter is pressed, go to blindH.html page
document.addEventListener("keyup", function (event) {
  if (event.key === " ") {
    audio.play();
  }
  if (event.key === "Enter") {
    window.location.href = "blindLogin.html";
  }
});

// If not blind button is clicked, go to login.html page
document
  .getElementById("notBlindButton")
  .addEventListener("click", function () {
    window.location.href = "login.html";
  });
