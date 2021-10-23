import React from "react";
import { useSelector } from "react-redux";
import DisplayHeroesCard from "./DisplayHeroesCard";

const DisplayHeroes = () => {
  const heroes = useSelector((state) => state.heroReducer.superHeroes);

  const map = heroes.map((item) => {
    return <DisplayHeroesCard superHero={item}></DisplayHeroesCard>;
  });

  return <div className="container">{map}</div>;
};

export default DisplayHeroes;
