import { volControlForest , volControlRaining , volControlCity , volControlFlame,} from "./elements.js"

export function soundCards () {

  const forestBg = new Audio("./audios/Floresta.wav");
  const rainingBg = new Audio("./audios/Chuva.wav");
  const cityBg = new Audio("./audios/Cidade.wav");
  const flameBg = new Audio("./audios/Chama.wav");

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

