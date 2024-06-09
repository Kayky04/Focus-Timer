//EcmaScript - ES6 MODULES
import  Controls  from './controls.js'
import Timer  from './timer.js'
import Sound from './sounds.js'
import { elements } from './elements.js';

const {
    buttonPlay,
    buttonPausa,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
} = elements;

let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    buttonPlay,
    buttonPausa,
    buttonSet,
    buttonStop,
    minutes
}) 

const timer = Timer({
    minutesDisplay, 
    secondsDisplay,
    resetControls: controls.reset,
    minutes
    })

const sound = Sound()

buttonPlay.addEventListener('click', function(){ // escondendo o botão de play
    controls.Play()
    timer.countDown()
    sound.pressButton()
})

buttonPausa.addEventListener('click', function(){ //escondendo o botão de pause
    controls.Pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
})

buttonSet.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()
    if(!newMinutes){
        timer.reset()
        return
    }
    
    minutes = newMinutes
    timer.DisplayUpdate(minutes, 0)
    timer.updateMinutes(minutes)
})