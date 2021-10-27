import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const GoodHeroCard = ({ superHero }) => {
  const dispatch = useDispatch();
  const goodHeroes = useSelector((state) => state.heroReducer.goodTeam);

  const agregarHeroe = (id, superHero) => {
    dispatch({ type: "ADD_GOOD_HERO", id });
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

        <span className="badge bg-success mx-2">Good</span>

        {goodHeroes.length < 3 ? (
          <button
            class="btn mx-2 fs-2"
            onClick={() => {
              agregarHeroe(superHero.id, superHero);
            }}
          >
            <i class="bi bi-plus-circle"></i>
          </button>
        ) : (
          <span class="badge bg-secondary my-3">Good team complete</span>
        )}
      </div>
    </div>
  );
};

export default GoodHeroCard;
