import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//TODO: REvisar layout
//TODO: Cambiar nombre, tendría que ser team powerstats

const HeroPowerstats = ({ powerStats, superHero }) => {
  const dispatch = useDispatch();
  const quitarDelEquipo = () => {
    if (superHero.biography.alignment === "bad") {
      dispatch({ type: "REMOVE_BAD_HERO", superHero });
      dispatch({ type: "RESTAR_STATS_EQUIPO", superHero });
    }
    if (superHero.biography.alignment === "good") {
      dispatch({ type: "REMOVE_GOOD_HERO", superHero });
      dispatch({ type: "RESTAR_STATS_EQUIPO", superHero });
    }
  };
  const showDetailHero = (hero) => {
    dispatch({ type: "SHOW_DETAIL_HERO", hero });
  };
  const powerstatsNames = [
    "Intelligence",
    "Strength",
    "Speed",
    "Durability",
    "Power",
    "Combat",
  ];
  const powerstatsValues = Object.values(powerStats);
  const powerstatsNewFormat = [];
  for (let i = 0; i < powerstatsNames.length; i++) {
    let stat = {
      name: powerstatsNames[i],
      power: powerstatsValues[i],
    };
    powerstatsNewFormat.push(stat);
  }
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
              class="btn btn mx-1"
              onClick={() => {
                showDetailHero(superHero);
              }}
            >
              <i class="bi bi-info-circle"></i>
            </button>
          </Link>

          <button
            href="a"
            class="btn mx-1"
            onClick={() => {
              quitarDelEquipo(superHero.id);
            }}
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPowerstats;
