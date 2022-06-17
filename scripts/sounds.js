import { volControlForest , volControlRaining , volControlCity , volControlFlame,} from "./elements.js"

export function soundCards () {

  const forestBg = new Audio("https://github.com/AndrewsItiel06/focus-timer-2.0/blob/main/audios/Floresta.wav?raw=true");
  const rainingBg = new Audio("https://github.com/AndrewsItiel06/focus-timer-2.0/blob/main/audios/Chuva.wav?raw=true");
  const cityBg = new Audio("https://github.com/AndrewsItiel06/focus-timer-2.0/blob/main/audios/Cafeteria.wav?raw=true");
  const flameBg = new Audio("https://github.com/AndrewsItiel06/focus-timer-2.0/blob/main/audios/Lareira.wav?raw=true");

  function volForest (attVal) {
    forestBg.volume = attVal/100
    console.log(forestBg.volume)
  }

  function volRaining (attVal) {
    rainingBg.volume = attVal/100
    console.log(rainingBg.volume)
  }

  function volCity (attVal) {
    cityBg.volume = attVal/100
    console.log(cityBg.volume)
  }

  function volFlame (attVal) {
    flameBg.volume = attVal/100
    console.log(flameBg.volume)
  }

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

