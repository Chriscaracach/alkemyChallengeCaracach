import React from "react";
import "./display.css";
import { useSelector } from "react-redux";
import BadHeroCard from "./BadHeroCard";
import GoodHeroCard from "./GoodHeroCard";
import { BAD, GOOD, NULL } from "../../constants/constants";

const DisplayHeroes = () => {
  const heroes = useSelector((state) => state.heroReducer.superHeroes);
  const heroesNullTo0 = [];
  //Quitamos los valores null de los powerstats de los heroes, porque arruinan los powerstats del equipo al sumarse
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
  const map = heroesNullTo0.map((item) => {
    if (item.biography.alignment === BAD) {
      return <BadHeroCard superHero={item}></BadHeroCard>;
    }
    if (item.biography.alignment === GOOD) {
      return <GoodHeroCard superHero={item}></GoodHeroCard>;
    }
    return null;
  });

  return <div className="container">{map}</div>;
};

export default DisplayHeroes;
