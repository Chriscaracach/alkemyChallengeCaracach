import React from "react";
import { useDispatch } from "react-redux";

const DisplayHeroesCard = ({ superHero }) => {
  const dispatch = useDispatch();

  const agregarAlEquipo = (id) => {
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
            agregarAlEquipo(superHero.id);
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
