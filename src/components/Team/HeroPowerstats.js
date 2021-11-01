import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeBadHero,
  removeGoodHero,
  subTeamStats,
  showDetailHero,
} from "../../redux/actions/heroActions";
import { POWERSTATS_NAMES, BAD, GOOD } from "../../constants/constants";

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

  //Era necesario darle otro formato a los datos que venían de la API
  const powerstatsValues = Object.values(powerStats);
  const powerstatsNewFormat = [];
  for (let i = 0; i < POWERSTATS_NAMES.length; i++) {
    let stat = {
      name: POWERSTATS_NAMES[i],
      power: powerstatsValues[i],
    };
    powerstatsNewFormat.push(stat);
  }
  //Con éste sort() ordeno los datos para que salga primero el que más puntos tiene
  powerstatsNewFormat.sort(function (a, b) {
    return a.power > b.power ? -1 : a.power < b.power ? 1 : 0;
  });
  const map = powerstatsNewFormat.map((item, i) => (
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
