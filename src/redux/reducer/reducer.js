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

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUSCAR_SUPERHEROE":
      return {
        ...state,
        superHeroes: state.superHeroes.concat(action.superHero),
      };
    default:
      return state;
  }
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_AL_EQUIPO":
      return {
        ...state,
        superHeroes: state.superHeroes.filter((s) => s.id !== action.id), //REVISAR
        equipo: [
          ...state.equipo,
          state.equipo.filter((s) => s.id === action.id)[0],
        ],
      };
    case "QUITAR_DEL_EQUIPO":
      return {
        ...state,
        equipo: state.equipo.filter((s) => s.id !== action.superHero.id),
        superHeroes: state.superHeroes.concat(action.superHero),
      };
    default:
      return state;
  }
};
