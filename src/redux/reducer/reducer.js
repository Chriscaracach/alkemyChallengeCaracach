const initialState = {
  superHeroes: [],
  equipo: [],
  powerStats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  },
  pesoPromedio: 0,
  alturaPromedio: 0,
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUSCAR_SUPERHEROE":
      return {
        ...state,
        superHeroes: state.superHeroes.concat(action.results),
      };
    case "RESET_SUPERHEROE":
      return {
        ...state,
        superHeroes: [],
      };
    case "AGREGAR_AL_EQUIPO":
      return {
        ...state,
        superHeroes: state.superHeroes.filter((item) => item.id !== action.id), //REVISAR
        equipo: [
          ...state.equipo,
          state.superHeroes.filter((item) => item.id === action.id)[0],
        ],
      };
    case "QUITAR_DEL_EQUIPO":
      return {
        ...state,
        equipo: state.equipo.filter((item) => item.id !== action.superHero.id),
        superHeroes: state.superHeroes.concat(action.superHero),
      };
    case "SUMAR_STATS_EQUIPO":
      //CUANDO los stats que vienen de la APi son null, se arruina la cuenta. REVISAR
      return {
        ...state,
        powerStats: {
          intelligence:
            state.powerStats.intelligence +
            Number(action.superHero.powerstats.intelligence),
          strength:
            state.powerStats.strength +
            Number(action.superHero.powerstats.strength),
          speed:
            state.powerStats.speed + Number(action.superHero.powerstats.speed),
          durability:
            state.powerStats.durability +
            Number(action.superHero.powerstats.durability),
          power:
            state.powerStats.power + Number(action.superHero.powerstats.power),
          combat:
            state.powerStats.combat +
            Number(action.superHero.powerstats.combat),
        },
        //NO FUNCIONAN, problema con el tipo de dato, viene un string, necesito un numero
        pesoPromedio:
          state.pesoPromedio + Number(action.superHero.appearance.weight[1]),
        alturaPromedio:
          state.alturaPromedio + Number(action.superHero.appearance.height[1]),
      };
    case "RESTAR_STATS_EQUIPO":
      return {
        ...state,
        powerStats: {
          intelligence:
            state.powerStats.intelligence -
            Number(action.superHero.powerstats.intelligence),
          strength:
            state.powerStats.strength -
            Number(action.superHero.powerstats.strength),
          speed:
            state.powerStats.speed - Number(action.superHero.powerstats.speed),
          durability:
            state.powerStats.durability -
            Number(action.superHero.powerstats.durability),
          power:
            state.powerStats.power - Number(action.superHero.powerstats.power),
          combat:
            state.powerStats.combat -
            Number(action.superHero.powerstats.combat),
        },
        pesoPromedio:
          state.pesoPromedio - Number(action.superHero.appearance.weight[1]),
        alturaPromedio:
          state.alturaPromedio - Number(action.superHero.appearance.height[1]),
      };
    default:
      return state;
  }
};
