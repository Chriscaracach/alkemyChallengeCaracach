import {
  SEARCH_SUPERHERO,
  SET_IS_LOADING,
  RESET_IS_LOADING,
  RESET_SEARCH,
  ADD_GOOD_HERO,
  ADD_BAD_HERO,
  REMOVE_GOOD_HERO,
  REMOVE_BAD_HERO,
  GOOD_TEAM_COMPLETE,
  BAD_TEAM_COMPLETE,
  RESET_GOOD_COMPLETE,
  RESET_BAD_COMPLETE,
  SUM_TEAM_STATS,
  SUB_TEAM_STATS,
  CALCULATE_AVERAGE,
  SHOW_DETAIL_HERO,
  RESET_DETAIL_HERO,
} from "../../constants/constants";

const initialState = {
  superHeroes: [],
  isLoading: false,
  heroDetailSelected: {},
  badTeam: [],
  goodTeam: [],
  badTeamComplete: false,
  goodTeamComplete: false,
  powerStats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  },
  avgWeight: 0,
  avgHeight: 0,
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUPERHERO:
      return {
        ...state,
        superHeroes: state.superHeroes.concat(action.payload),
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_IS_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_SEARCH:
      return {
        ...state,
        superHeroes: [],
      };
    case ADD_GOOD_HERO:
      return {
        ...state,
        superHeroes: state.superHeroes.filter(
          (item) => item.id !== action.payload
        ),
        goodTeam: [
          ...state.goodTeam,
          state.superHeroes.filter((item) => item.id === action.payload)[0],
        ],
      };
    case ADD_BAD_HERO:
      return {
        ...state,
        superHeroes: state.superHeroes.filter(
          (item) => item.id !== action.payload
        ),
        badTeam: [
          ...state.badTeam,
          state.superHeroes.filter((item) => item.id === action.payload)[0],
        ],
      };
    case REMOVE_BAD_HERO:
      return {
        ...state,
        badTeam: state.badTeam.filter((item) => item.id !== action.payload.id),
        superHeroes: state.superHeroes.concat(action.payload),
      };
    case REMOVE_GOOD_HERO:
      return {
        ...state,
        goodTeam: state.goodTeam.filter(
          (item) => item.id !== action.payload.id
        ),
        superHeroes: state.superHeroes.concat(action.payload),
      };
    case GOOD_TEAM_COMPLETE:
      return {
        ...state,
        goodTeamComplete: true,
      };
    case BAD_TEAM_COMPLETE:
      return {
        ...state,
        badTeamComplete: true,
      };
    case RESET_GOOD_COMPLETE:
      return {
        ...state,
        goodTeamComplete: false,
      };
    case RESET_BAD_COMPLETE:
      return {
        ...state,
        badTeamComplete: false,
      };
    case SUM_TEAM_STATS:
      return {
        ...state,
        powerStats: {
          intelligence:
            state.powerStats.intelligence +
            Number(action.payload.powerstats.intelligence),
          strength:
            state.powerStats.strength +
            Number(action.payload.powerstats.strength),
          speed:
            state.powerStats.speed + Number(action.payload.powerstats.speed),
          durability:
            state.powerStats.durability +
            Number(action.payload.powerstats.durability),
          power:
            state.powerStats.power + Number(action.payload.powerstats.power),
          combat:
            state.powerStats.combat + Number(action.payload.powerstats.combat),
        },
      };
    case SUB_TEAM_STATS:
      return {
        ...state,
        powerStats: {
          intelligence:
            state.powerStats.intelligence -
            Number(action.payload.powerstats.intelligence),
          strength:
            state.powerStats.strength -
            Number(action.payload.powerstats.strength),
          speed:
            state.powerStats.speed - Number(action.payload.powerstats.speed),
          durability:
            state.powerStats.durability -
            Number(action.payload.powerstats.durability),
          power:
            state.powerStats.power - Number(action.payload.powerstats.power),
          combat:
            state.powerStats.combat - Number(action.payload.powerstats.combat),
        },
      };
    case CALCULATE_AVERAGE:
      return {
        ...state,
        avgWeight: action.payload.weight,
        avgHeight: action.payload.height,
      };
    case SHOW_DETAIL_HERO:
      return {
        ...state,
        heroDetailSelected: action.payload,
      };
    case RESET_DETAIL_HERO:
      return {
        ...state,
        heroDetailSelected: {},
      };
    default:
      return state;
  }
};
