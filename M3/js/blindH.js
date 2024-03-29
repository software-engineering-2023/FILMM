const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
document.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    audio.play();
    setTimeout(function () {
      recognition.start();
    }, 8000);
  }
});

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  if (text === "view transactions") {
    window.location.href = "transactionsBC.html";
  }
  if (text === "view credit card transactions") {
    window.location.href = "CCtransactionsBC.html";
  }
  if (
    text === "report theft" ||
    text === "report damage" ||
    text === "report stolen"
  ) {
    window.location.href = "reportTheftVI.html";
  }
  if (
    text === "report technical issue" ||
    text === "report technical problem"
  ) {
    window.location.href = "reportTechVI.html";
  }

  if (text === "log out" || text === "sign out") {
    window.location.href = "index.html";
  }
  p.innerText = text;
});
