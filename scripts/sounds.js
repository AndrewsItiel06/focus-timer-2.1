import { volControlForest , volControlRaining , volControlCity , volControlFlame,} from "./elements.js"

export function soundCards () {

  const forestBg = new Audio("https://github.com/AndrewsItiel06/focus-timer-2.1/blob/main/audios/Floresta.wav?raw=true");
  const rainingBg = new Audio("https://github.com/AndrewsItiel06/focus-timer-2.1/blob/main/audios/Chuva.wav?raw=true");
  const cityBg = new Audio("https://github.com/AndrewsItiel06/focus-timer-2.1/blob/main/audios/Cafeteria.wav?raw=true");
  const flameBg = new Audio("https://github.com/AndrewsItiel06/focus-timer-2.1/blob/main/audios/Lareira.wav?raw=true");

  function volForest (attVal) {
    forestBg.volume = attVal/100;
  };

  function volRaining (attVal) {
    rainingBg.volume = attVal/100;
  };

  function volCity (attVal) {
    cityBg.volume = attVal/100;
  };

  function volFlame (attVal) {
    flameBg.volume = attVal/100;
  };

  return{
    forestBg,
    rainingBg,
    cityBg,
    flameBg,
    volForest,
    volRaining,  
    volCity,
    volFlame,
  }
}

