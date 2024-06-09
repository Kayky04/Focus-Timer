import Sounds from "./sounds.js"
export default function Timer({
minutesDisplay, 
secondsDisplay, 
resetControls,
minutes
}) {

let timerTimeOut

function DisplayUpdate(newMinutes, seconds){
    minutes = newMinutes || minutes
    seconds = seconds || 0
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function reset(){
    DisplayUpdate(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countDown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);
        
        if (seconds <= 0) {
            if (minutes <= 0) {
                // Quando os minutos e segundos chegam a 0, o contador para
                resetControls()
                DisplayUpdate()
                Sounds().timeEnd()
                return;
            }
            // Decrementar os minutos e redefinir os segundos para 59
            seconds = 59;
            minutes--;
            minutesDisplay.textContent = String(minutes).padStart(2, '0');
        } else {
            // Apenas decrementar os segundos
            seconds--;
        }
        
        // Atualizar a exibição dos segundos
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
        
        countDown();
    }, 1000);
}

function updateMinutes(newMinutes){
    minutes = newMinutes
}

function hold(){
    clearTimeout(timerTimeOut)
}

    return{
        countDown,
        reset,
        DisplayUpdate,
        updateMinutes,
        hold
    }
}