const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
let audio = document.getElementById("audio");

document.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    audio.play();
    setTimeout(function () {
      recognition.start();
    }, 6000);
  }
  if (e.key === "Enter") {
    window.location.href = "blindH.html";
  }
});

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  if (text === "view transactions") {
    window.location.href = "login.html";
  }
  if (text === "view credit card transactions") {
  }
  if (text === "view notifications") {
  }
  if (
    text === "report damage" ||
    text === "report damage" ||
    text === "report stolen"
  ) {
  }
  if (text === "report technical issue") {
  }

  p.innerText = text;
});
