import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HeroPowerstats from "./HeroPowerstats";
import "./Team.css";

//TODO: Linkear con HeroInfo ida y vuelta
//TODO: Revisar columnas
//TODO: Transiciones

const TeamCard = ({ superHero }) => {
  return (
    <div class="card m-2" id="teamcard">
      <div className="row">
        <div className="col-5">
          <img
            src={superHero.image.url}
            className="img-fluid w-100 h-100"
            alt={superHero.name}
            id="img"
          />
          <div
            className="position-absolute top-0 start-0 w-100"
            id="powerstats"
          >
            <HeroPowerstats
              powerStats={superHero.powerstats}
              superHero={superHero}
            ></HeroPowerstats>
          </div>
        </div>
        <div className="col-7">
          <div className="text-center">
            <p>{superHero.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
