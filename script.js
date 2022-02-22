const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.continuous = true;
recognition.lang = 'es-ES';

window.onload = () => {
    recognition.start()
}

const microphone = document.getElementById("microphone")

microphone.addEventListener("click",()=>{
    recognition.start()
})

recognition.onresult = (event) => {
    let current = event.resultIndex
    let transcript = event.results[current][0].transcript
    console.log(transcript)
}

function speak(message){
    let voice = new SpeechSynthesisUtterance()
    voice.text = message
    voice.volume = 1
    voice.rate = 1
    voice.pitch = 1

    window.speechSynthesis.speak(voice)
}