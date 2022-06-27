 import {counter , buttonPlay , buttonStop , buttonAddition , buttonReduction , soundButtonForest , soundButtonRaining , soundButtonCity , soundButtonFlame, volControlForest , volControlRaining , volControlCity , volControlFlame} from "./elements.js";
 import {soundCards} from "./sounds.js";

 let cards = soundCards()

 export function controls() {
  function atPressPlay(){
    buttonPlay.disabled = true;
    buttonAddition.disabled = true;
    buttonReduction.disabled = true;
    buttonStop.disabled = false;

    counter.classList.add("active")
  };
  
  function atPressStop(){
    buttonPlay.disabled = false;
    buttonAddition.disabled = false;
    buttonReduction.disabled = false;
    buttonStop.disabled = true;
    
    counter.classList.remove("active")
  };

  function forestCard() {
    soundButtonForest.classList.toggle("active");
  
    if(soundButtonForest.classList.contains("active")){
    cards.forestBg.play();
    } else{
      cards.forestBg.pause();
    };
  };

  function rainingCard() {
    soundButtonRaining.classList.toggle("active");
    
    if(soundButtonRaining.classList.contains("active")){
      cards.rainingBg.play();
      } else{
        cards.rainingBg.pause();
      };
  };

  function cityCard() {
    soundButtonCity.classList.toggle("active");
    
    if(soundButtonCity.classList.contains("active")){
      cards.cityBg.play();
      } else{
        cards.cityBg.pause();
      };
  };
  
  function flameCard() {
    soundButtonFlame.classList.toggle("active");

    if(soundButtonFlame.classList.contains("active")){
      cards.flameBg.play();
      } else{
        cards.flameBg.pause();
      };
  };
  
volControlForest.addEventListener("change", () => {
  let attVal = volControlForest.value;
  cards.volForest(attVal)
})

volControlRaining.addEventListener("change", () => {
  let attVal = volControlRaining.value;
  cards.volRaining(attVal)
})

volControlCity.addEventListener("change", () => {
  let attVal = volControlCity.value;
  cards.volCity(attVal)
})

volControlFlame.addEventListener("change", () => {
  let attVal = volControlFlame.value;
  cards.volFlame(attVal)
})

  return {atPressPlay , atPressStop , forestCard , rainingCard , cityCard , flameCard} 
}
