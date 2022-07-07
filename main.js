import './style.css'

let textArea = document.querySelector("#text-area");
const convertBtn = document.querySelector("#convert-btn")
convertBtn.addEventListener("click", convertTextToSpeech); 
function convertTextToSpeech(){
  let speech = new SpeechSynthesisUtterance(); 
  speech.lang = "hi"; 
  speech.rate = 1; 
  speech.pitch =1; 
  speech.text = textArea.value; 
  speech.volume = 1; 
  speechSynthesis.speak(speech);
  console.log(textArea.value); 
}
