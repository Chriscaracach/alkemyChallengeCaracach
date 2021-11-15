import { POWERSTATS_NAMES, NULL } from "../constants/constants";

//Función usada en componente Home para dar formato a datos obtenidos de la API y
//calcular promedios
export const weightAndHeightAvgSliced = (team) => {
  let weight = 0;
  let height = 0;
  team.forEach((hero) => {
    let w = hero.appearance.weight[1].slice(0, -3);
    let h = hero.appearance.height[1].slice(0, -3);
    let wn = parseInt(w);
    let hn = parseInt(h);
    weight = weight + wn;
    height = height + hn;
  });
  let avg = {
    weight: weight / team.length,
    height: height / team.length,
  };
  return avg;
};

// Función que da formato a los datos de powerstats de la API
// y los ordena para mostrarlos
export const formatDataFromAPI = (powerStats) => {
  const powerstatsValues = Object.values(powerStats);
  const powerstatsNewFormat = [];
  for (let i = 0; i < POWERSTATS_NAMES.length; i++) {
    let stat = {
      name: POWERSTATS_NAMES[i],
      power: powerstatsValues[i],
    };
    powerstatsNewFormat.push(stat);
  }
  //Con éste sort() ordeno los datos para que salga primero el que más puntos tiene
  powerstatsNewFormat.sort(function (a, b) {
    return a.power > b.power ? -1 : a.power < b.power ? 1 : 0;
  });
  return powerstatsNewFormat;
};

//Función que transforma values NULL que vienen de la API
export const nullToZero = (heroes) => {
  const heroesNullTo0 = [];
  heroes.forEach((hero) => {
    if (hero.powerstats.intelligence === NULL) {
      hero.powerstats.intelligence = 0;
    }
    if (hero.powerstats.strength === NULL) {
      hero.powerstats.strength = 0;
    }
    if (hero.powerstats.speed === NULL) {
      hero.powerstats.speed = 0;
    }
    if (hero.powerstats.power === NULL) {
      hero.powerstats.power = 0;
    }
    if (hero.powerstats.combat === NULL) {
      hero.powerstats.combat = 0;
    }
    if (hero.powerstats.durability === NULL) {
      hero.powerstats.durability = 0;
    }
    heroesNullTo0.push(hero);
  });
  return heroesNullTo0;
};
