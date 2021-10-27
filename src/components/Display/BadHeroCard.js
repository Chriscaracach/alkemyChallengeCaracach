import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const BadHeroCard = ({ superHero }) => {
  const dispatch = useDispatch();
  const badHeroes = useSelector((state) => state.heroReducer.badTeam);

  const agregarHeroe = (id, superHero) => {
    dispatch({ type: "ADD_BAD_HERO", id });
    dispatch({ type: "SUMAR_STATS_EQUIPO", superHero });
  };
  return (
    <div
      class="card m-2"
      style={{ width: "15rem", display: "inline-block" }}
      key={superHero.id}
    >
      <img
        src={superHero.image.url}
        className="card-img-top"
        alt={superHero.name}
        style={{ height: "35vh" }}
        id="img"
      />
      <div class="card-body">
        <h5 class="card-title">{superHero.name}</h5>

        <span className="badge bg-danger mx-2">Bad</span>

        {badHeroes.length === 3 ? (
          <span class="badge bg-secondary my-3">Bad team complete</span>
        ) : (
          <button
            class="btn mx-2 fs-2"
            onClick={() => {
              agregarHeroe(superHero.id, superHero);
            }}
          >
            <i class="bi bi-plus-circle"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default BadHeroCard;
