export default function Controls({
    buttonPlay,
    buttonPausa,
    buttonSet,
    buttonStop,
    minutes
}){
    
    function Pause(){
        buttonPausa.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function Play(){
        buttonPlay.classList.add('hide')
        buttonPausa.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPausa.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }
    
    function getMinutes(){
        let newMinutes = prompt('quantos minutos?')  
        if(!newMinutes){
            return false
        }
        
        return newMinutes
    }

        return{
            reset,
            Play,
            Pause,
            getMinutes
        }
}