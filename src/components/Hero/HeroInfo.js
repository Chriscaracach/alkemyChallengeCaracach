import React from "react";

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
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={img} alt={nombre} />
        </div>
        <div className="col-md-8">
          <h1>Ponele que Robin{nombre}</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <p className="lead">Peso: {peso}</p>
            </li>
            <li className="list-group-item">
              <p className="lead">Altura: {altura}</p>
            </li>
            <li className="list-group-item">
              <p className="lead">Alias: {alias}</p>
            </li>
            <li className="list-group-item">
              <p className="lead">Color de Ojos: {colorOjos}</p>
            </li>
            <li className="list-group-item">
              <p className="lead">Color de Cabello: {colorCabello}</p>
            </li>
            <li className="list-group-item">
              <p className="lead">Lugar de trabajo: {lugarTrabajo}</p>
            </li>
          </ul>
          <button className="btn btn-dark">Volver</button>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
