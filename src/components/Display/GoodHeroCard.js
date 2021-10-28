import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoodHero, sumTeamStats } from "../../redux/actions/heroActions";

const GoodHeroCard = ({ superHero }) => {
  const goodHeroes = useSelector((state) => state.heroReducer.goodTeam);
  const dispatch = useDispatch();

  const agregarHeroe = (id, superHero) => {
    dispatch(addGoodHero(id));
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

        <span className="badge bg-success mx-2">Good</span>

        {goodHeroes.length < 3 ? (
          <button
            className="btn mx-2 fs-2"
            onClick={() => {
              agregarHeroe(superHero.id, superHero);
            }}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        ) : (
          <span className="badge bg-secondary my-3">Good team complete</span>
        )}
      </div>
    </div>
  );
};

export default GoodHeroCard;
