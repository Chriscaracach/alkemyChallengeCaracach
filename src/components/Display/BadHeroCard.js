import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBadHero, sumTeamStats } from "../../redux/actions/heroActions";

const BadHeroCard = ({ superHero }) => {
  const badHeroes = useSelector((state) => state.heroReducer.badTeam);
  const dispatch = useDispatch();

  const agregarHeroe = (id, superHero) => {
    dispatch(addBadHero(id));
    dispatch(sumTeamStats(superHero));
  };
  return (
    <div
      className="card m-2"
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
      <div className="card-body">
        <h5 className="card-title">{superHero.name}</h5>

        <span className="badge bg-danger mx-2">Bad</span>

        {badHeroes.length === 3 ? (
          <span className="badge bg-secondary my-3">Bad team complete</span>
        ) : (
          <button
            className="btn mx-2 fs-2"
            onClick={() => {
              agregarHeroe(superHero.id, superHero);
            }}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default BadHeroCard;
