import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//TODO: Revisar animaciones de entrada y salida

const DisplayHeroesCard = ({ superHero }) => {
  const badHeroes = useSelector((state) => state.heroReducer.badTeam);
  const goodHeroes = useSelector((state) => state.heroReducer.goodTeam);
  const badTeamComplete = useSelector(
    (state) => state.heroReducer.badTeamComplete
  );
  const goodTeamComplete = useSelector(
    (state) => state.heroReducer.goodTeamComplete
  );
  const dispatch = useDispatch();

  const agregarHeroe = (id, superHero) => {
    if (superHero.biography.alignment === "bad") {
      if (badHeroes.length < 3) {
        dispatch({ type: "ADD_BAD_HERO", id });
        dispatch({ type: "SUMAR_STATS_EQUIPO", superHero });
      }
      if (badHeroes.length === 3) {
        dispatch({ type: "BAD_TEAM_COMPLETE" });
      }
    } else {
      if (goodHeroes.length < 3) {
        dispatch({ type: "ADD_GOOD_HERO", id });
        dispatch({ type: "SUMAR_STATS_EQUIPO", superHero });
      }
      if (goodHeroes.length === 3) {
        dispatch({ type: "GOOD_TEAM_COMPLETE" });
      }
    }
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
        {superHero.biography.alignment === "bad" ? (
          <span className="badge bg-danger mx-2">Bad</span>
        ) : (
          <span className="badge bg-success mx-2">Good</span>
        )}

        {superHero.biography.alignment === "good" && goodTeamComplete ? (
          <span class="badge bg-secondary my-3">Good team complete</span>
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

        {superHero.biography.alignment === "bad" && badTeamComplete ? (
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

export default DisplayHeroesCard;
