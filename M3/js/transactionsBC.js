document.addEventListener("keyup", function (event) {
  if (event.key === " ") {
    for (let i = 3; i < 13; i++) {
      let content1 = null;
      let content = null;
      let concated = null;
      if (i === 12) {
        concated = "press enter to go back";
      } else if (i % 3 === 0) {
        content1 = document.getElementById(0);
        content = document.getElementById(i);
        concated = content1.innerText.concat(content.innerText);
      } else if (i % 3 === 1) {
        content1 = document.getElementById(1);
        content = document.getElementById(i);
        concated = content1.innerText.concat(content.innerText);
      } else if (i % 3 === 2) {
        content1 = document.getElementById(2);
        content = document.getElementById(i);
        concated = content1.innerText.concat(content.innerText);
      }
      let utterance = new SpeechSynthesisUtterance(concated);
      window.speechSynthesis.speak(utterance);
    }
  }
  if (event.key === "Enter") {
    window.location.href = "blindH.html";
  }
});
