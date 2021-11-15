import React from "react";
import "./display.css";
import { useSelector } from "react-redux";
import BadHeroCard from "./BadHeroCard";
import GoodHeroCard from "./GoodHeroCard";
import { BAD, GOOD } from "../../constants/constants";
import { nullToZero } from "../../utils/functions";

const DisplayHeroes = () => {
  const heroes = useSelector((state) => state.heroReducer.superHeroes);

  const heroesNullTo0 = nullToZero(heroes);

  const map = heroesNullTo0.map((item) => {
    if (item.biography.alignment === BAD) {
      return <BadHeroCard superHero={item} key={item.id}></BadHeroCard>;
    }
    if (item.biography.alignment === GOOD) {
      return <GoodHeroCard superHero={item} key={item.id}></GoodHeroCard>;
    }
    return null;
  });

  return <div className="container">{map}</div>;
};

export default DisplayHeroes;
