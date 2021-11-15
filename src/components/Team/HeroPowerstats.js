import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeBadHero,
  removeGoodHero,
  subTeamStats,
  showDetailHero,
} from "../../redux/actions/heroActions";
import { BAD, GOOD } from "../../constants/constants";
import { formatDataFromAPI } from "../../utils/functions";

const HeroPowerstats = ({ powerStats, superHero }) => {
  const dispatch = useDispatch();

  const removeFromTeam = () => {
    if (superHero.biography.alignment === BAD) {
      dispatch(removeBadHero(superHero));
      dispatch(subTeamStats(superHero));
    }
    if (superHero.biography.alignment === GOOD) {
      dispatch(removeGoodHero(superHero));
      dispatch(subTeamStats(superHero));
    }
  };

  const powerStatsInNewFormat = formatDataFromAPI(powerStats);

  const map = powerStatsInNewFormat.map((item, i) => (
    <div key={i}>
      <p className="d-inline">{item.name}</p>
      <div className="float-end">{item.power}</div>
    </div>
  ));

  return (
    <div className="card p-1 h-100 w-100" id="heroPowerstats">
      <div className="row">
        <div className="col-8">{map}</div>
        <div className="col-4 p-1">
          <Link to="/HeroInfo" style={{ textDecoration: "none" }}>
            <button
              className="btn btn mx-1"
              onClick={() => {
                dispatch(showDetailHero(superHero));
              }}
            >
              <i className="bi bi-info-circle"></i>
            </button>
          </Link>

          <button
            href="a"
            className="btn mx-1"
            onClick={() => {
              removeFromTeam(superHero.id);
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPowerstats;
