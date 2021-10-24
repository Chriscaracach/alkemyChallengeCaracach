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

  const map = heroes.map((item) => {
    return <DisplayHeroesCard superHero={item}></DisplayHeroesCard>;
  });

  return <div className="container">{map}</div>;
};

export default DisplayHeroes;
