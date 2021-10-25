import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//TODO: Linkear, hacer funcionar
//TODO: Pasar a inglés

const HeroInfo = ({
  peso,
  altura,
  nombre,
  alias,
  colorOjos,
  colorCabello,
  lugarTrabajo,
  img,
}) => {
  const hero = useSelector((state) => state.heroReducer.heroDetailSelected);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={hero.image.url} alt={hero.name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1>{hero.name}</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <p className="lead">Weight: {hero.appearance.weight[1]}</p>
            </li>
            <li className="list-group-item">
              <p className="lead">Height: {hero.appearance.height[1]}</p>
            </li>
            <li className="list-group-item">
              <p className="lead">
                Alias:
                {hero.biography.aliases.map((item) => {
                  return " / " + item;
                })}
              </p>
            </li>
            <li className="list-group-item">
              <p className="lead">Color de Ojos:</p>
            </li>
            <li className="list-group-item">
              <p className="lead">Color de Cabello:</p>
            </li>
            <li className="list-group-item">
              <p className="lead">Lugar de trabajo: {hero.work.base}</p>
            </li>
          </ul>
          <Link to="/">
            <button className="btn btn-dark">Volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
