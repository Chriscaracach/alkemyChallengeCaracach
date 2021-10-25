import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HeroPowerstats from "./HeroPowerstats";
import "./Team.css";

//TODO: Linkear con HeroInfo ida y vuelta
//TODO: Revisar columnas
//TODO: Transiciones

const TeamCard = ({ superHero }) => {
  const dispatch = useDispatch();
  const quitarDelEquipo = (id) => {
    //!QUË PASA CON ESE ID??
    dispatch({ type: "QUITAR_DEL_EQUIPO", superHero });
    dispatch({ type: "RESTAR_STATS_EQUIPO", superHero });
  };
  const showDetailHero = (hero) => {
    dispatch({ type: "SHOW_DETAIL_HERO", hero });
  };
  return (
    <div class="card" style={{ width: "12rem", display: "inline-block" }}>
      <img
        src={superHero.image.url}
        className="card-img-top"
        alt={superHero.name}
        id="img"
      />
      <div class="card-body">
        <h5 class="card-title">{superHero.name}</h5>
        <div className="position-absolute top-0 start-0 w-100" id="powerstats">
          <HeroPowerstats powerStats={superHero.powerstats}></HeroPowerstats>
        </div>
        <Link to="/HeroInfo" style={{ textDecoration: "none" }}>
          <button
            href="a"
            class="btn btn-dark"
            onClick={() => {
              showDetailHero(superHero);
            }}
          >
            Detalle
          </button>
        </Link>
        <button
          href="a"
          class="btn btn-dark"
          onClick={() => {
            quitarDelEquipo(superHero.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
