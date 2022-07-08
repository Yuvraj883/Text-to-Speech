 import './style.css'

let textArea = document.querySelector("#text-area");
const convertBtn = document.querySelector("#convert-btn")
convertBtn.addEventListener("click", convertTextToSpeech); 
function convertTextToSpeech(){
  convertBtn.textContent = "Converting..."
  let speech = new SpeechSynthesisUtterance(); 
  speech.lang = "enUS"; 
  speech.rate = .9; 
  speech.pitch =.3; 
  speech.text = textArea.value; 
  speech.volume = 1; 
  speech.voice= 
  speechSynthesis.speak(speech);
  console.log("Button Clicked");

  setTimeout(function() {
    convertBtn.innerText = "Convert Text To Speech";
  },1000)
 // console.log(textArea.value); 
}
