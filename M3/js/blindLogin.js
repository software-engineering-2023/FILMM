const texts = document.querySelector(".texts");
const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

document.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    audio.play();
    setTimeout(function () {
      recognition.start();
    }, 6000);
    setTimeout(function () {
      audio2.play();
    }, 15000);
  }
});

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  if (text === "Google") {
    window.location.href = "blindH.html";
  }
});
