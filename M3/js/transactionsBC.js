const content = document.getElementById("test");
console.log(content.innerText);
window.speechSynthesis.loadVoices();
let voices = window.speechSynthesis.getVoices();

document.addEventListener("click", function (event) {
  const utterance = new SpeechSynthesisUtterance(content.innerText);
  utterance.voice = voices[0];
  window.speechSynthesis.speak(utterance);
});
