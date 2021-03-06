import {timerMinutes , timerSeconds , buttonPlay , buttonStop , buttonAddition , buttonReduction , soundButtonForest , soundButtonRaining , soundButtonCity , soundButtonFlame , sunnyButton , moonButton} from "./elements.js";
import {timer} from "./timer.js";
import {controls} from "./controls.js";
import {modeSwitch} from "./mode-switch.js";
// export {userMinutes};

let minutes =  Number(timerMinutes.textContent);

let timerOpt = timer(timerMinutes, timerSeconds, minutes,);
let controlsOpt = controls();
let lightAndDark = modeSwitch(sunnyButton , moonButton);

buttonPlay.addEventListener("click", () => {
  timerOpt.countdown();
  controlsOpt.atPressPlay();
});

buttonStop.addEventListener("click" , () => {
  timerOpt.resetTimer();
  controlsOpt.atPressStop();
});

buttonAddition.addEventListener("click", () => {
  timerOpt.attMinutes(5);
});

buttonReduction.addEventListener("click", () => {
  timerOpt.attMinutes(-5);
});
  

soundButtonForest.addEventListener("click", () => {
  controlsOpt.forestCard()
})

soundButtonRaining.addEventListener("click", () => {
  controlsOpt.rainingCard()
})

soundButtonCity.addEventListener("click", () => {
  controlsOpt.cityCard()
})

soundButtonFlame.addEventListener("click", () => {
  controlsOpt.flameCard()
})

sunnyButton.addEventListener("click" , () => {
  lightAndDark.toggleModeButton();
  lightAndDark.toggleMode()
});

moonButton.addEventListener("click" , () => {
  lightAndDark.toggleModeButton();
  lightAndDark.toggleMode();
});

buttonStop.disabled = true;
