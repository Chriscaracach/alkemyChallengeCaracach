import React from "react";
import { useSelector } from "react-redux";
import DisplayHeroesCard from "./DisplayHeroesCard";

/*
  TODO: UNificar Display y crear una carpeta
  TODO: REvisar tamaños de cards, son un poco grandes
  TODO: Crear Loader, revisar cómo hacemos eso con Redux, capaz creando una variable loading

*/

const DisplayHeroes = () => {
  const heroes = useSelector((state) => state.heroReducer.superHeroes);
  const heroesNullTo0 = [];
  heroes.forEach((hero) => {
    if (hero.powerstats.intelligence === "null") {
      hero.powerstats.intelligence = 0;
    }
    if (hero.powerstats.strength === "null") {
      hero.powerstats.strength = 0;
    }
    if (hero.powerstats.speed === "null") {
      hero.powerstats.speed = 0;
    }
    if (hero.powerstats.power === "null") {
      hero.powerstats.power = 0;
    }
    if (hero.powerstats.combat === "null") {
      hero.powerstats.combat = 0;
    }
    if (hero.powerstats.durability === "null") {
      hero.powerstats.durability = 0;
    }
    heroesNullTo0.push(hero);
  });
  const map = heroesNullTo0.map((item) => {
    return <DisplayHeroesCard superHero={item}></DisplayHeroesCard>;
  });

  return <div className="container">{map}</div>;
};

export default DisplayHeroes;
