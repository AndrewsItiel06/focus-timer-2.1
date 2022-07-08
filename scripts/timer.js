  // import { userMinutes } from "./index.js"
  import { controls } from "./controls.js"
  
  let controlsOpt = controls()
  
  export function timer(timerMinutes , timerSeconds, minutes) {
    let timeOut
    let userMinutes = minutes;

    function countdown(){
    timeOut = setTimeout(() => {
      let seconds = Number(timerSeconds.textContent)
     
      if(timerMinutes.textContent == "00" && seconds == "0" ){
        resetTimer()
        controlsOpt.atPressStop()
        return
      }

      if(seconds == "0"){
        timerMinutes.textContent = String(--timerMinutes.textContent).padStart(2 , "0");
        seconds= 2;
      }

      timerSeconds.textContent = String(--seconds).padStart(2 , "0")

      countdown()
    }, 1000)
    }

    function resetTimer(){
      timerMinutes.textContent = String(userMinutes).padStart(2 , "0");
      timerSeconds.textContent = "00";
      clearTimeout(timeOut)
    }

    function attMinutes(value){
      minutes += value
      if(Number(minutes) < 5) {
        minutes = 0
      }
      console.log(minutes)

      timerMinutes.textContent = String(minutes).padStart(2 , "0");

      userMinutes = minutes
    }
     

    return {countdown , resetTimer , attMinutes}
}
