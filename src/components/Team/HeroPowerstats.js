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
    <div key={i} className="w-75 d-flex flex-row justify-content-between m-0">
      <div>
        <p class="heroPowerstats-p">{item.name}</p>
      </div>
      <div>
        <p class="heroPowerstats-p">{item.power}</p>
      </div>
    </div>
  ));

  return (
    <div className="p-3" id="heroPowerstats">
      <div className="row gx-1">
        <p className="lead m-0">{superHero.name}</p>
        <div className="col-9">
          <div className="d-flex flex-column align-items-center">{map}</div>
        </div>
        <div className="col-2">
          <div>
            <Link to="/HeroInfo" style={{ textDecoration: "none" }}>
              <button
                className="btn mx-1"
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
    </div>
  );
};

export default HeroPowerstats;
