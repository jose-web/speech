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
    let transcript = event.results[current][0].transcript.toLowerCase()
    console.log(transcript)

    // if(transcript.includes("open ")){
    //     let index = transcript.indexOf("open ")+5
    //     console.log(index);
    //     window.open(transcript.slice(index))
    // }

    if(transcript.includes("repite esto ")){
        let index = transcript.indexOf("repite esto ")+12
        speak(transcript.slice(index))
    }
    
    if(transcript.includes("abre linkedin")){
        window.open("https://www.linkedin.com/in/jose-web")
    }
}

function speak(message){
    let voice = new SpeechSynthesisUtterance()
    voice.text = message
    voice.volume = 1
    voice.rate = 1
    voice.pitch = 1

    window.speechSynthesis.speak(voice)
}