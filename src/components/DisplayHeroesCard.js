import React from "react";
import { useDispatch } from "react-redux";

//TODO: Revisar animaciones de entrada y salida
//TODO: REvisar tamaños de cards
//TODO: Revisar Layout y Responsive

const DisplayHeroesCard = ({ superHero }) => {
  const dispatch = useDispatch();

  const agregarHeroe = (id, superHero) => {
    dispatch({ type: "AGREGAR_AL_EQUIPO", id });
    dispatch({ type: "SUMAR_STATS_EQUIPO", superHero });
  };
  return (
    <div
      class="card"
      style={{ width: "12rem", display: "inline-block" }}
      key={superHero.id}
    >
      <img
        src={superHero.image.url}
        className="card-img-top"
        alt={superHero.name}
        id="img"
      />
      <div class="card-body">
        <h5 class="card-title">{superHero.name}</h5>
        {superHero.biography.alignment === "bad" ? (
          <span className="badge bg-danger">Bad</span>
        ) : (
          <span className="badge bg-success">Good</span>
        )}
        <button
          href="a"
          class="btn btn-dark"
          onClick={() => {
            agregarHeroe(superHero.id, superHero);
          }}
        >
          Agregar
        </button>
        <button href="a" class="btn btn-dark">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default DisplayHeroesCard;
