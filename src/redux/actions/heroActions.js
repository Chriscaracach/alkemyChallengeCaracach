export const searchSuperHero = (results) => {
  return {
    type: "SEARCH_SUPERHERO",
    payload: results,
  };
};
export const resetSearch = () => {
  return {
    type: "RESET_SEARCH",
  };
};
export const setIsLoading = () => {
  return {
    type: "SET_IS_LOADING",
  };
};
export const resetIsLoading = () => {
  return {
    type: "RESET_IS_LOADING",
  };
};
export const addBadHero = (id) => {
  return {
    type: "ADD_BAD_HERO",
    payload: id,
  };
};
export const addGoodHero = (id) => {
  return {
    type: "ADD_GOOD_HERO",
    payload: id,
  };
};
export const sumTeamStats = (superHero) => {
  return {
    type: "SUM_TEAM_STATS",
    payload: superHero,
  };
};
export const subTeamStats = (superHero) => {
  return {
    type: "SUB_TEAM_STATS",
    payload: superHero,
  };
};

export const removeBadHero = (superHero) => {
  return {
    type: "REMOVE_BAD_HERO",
    payload: superHero,
  };
};
export const removeGoodHero = (superHero) => {
  return {
    type: "REMOVE_GOOD_HERO",
    payload: superHero,
  };
};

export const showDetailHero = (superHero) => {
  return {
    type: "SHOW_DETAIL_HERO",
    payload: superHero,
  };
};
export const resetDetailHero = () => {
  return {
    type: "RESET_DETAIL_HERO",
  };
};
export const calculateAverage = (average) => {
  return {
    type: "CALCULATE_AVERAGE",
    payload: average,
  };
};
