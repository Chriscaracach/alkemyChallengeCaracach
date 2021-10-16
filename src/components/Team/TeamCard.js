import React from "react";
import Powerstats from "../Hero/Powerstats";
import "./Team.css";

const TeamCard = ({ name, img, powerstats }) => {
  return (
    <div class="card">
      <img src={img} className="card-img-top" alt={name} id="img" />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <div className="position-absolute top-0 start-0 w-100" id="powerstats">
          <Powerstats powerstats={powerstats}></Powerstats>
        </div>
        <button href="a" class="btn btn-dark">
          Detalle
        </button>
        <button href="a" class="btn btn-dark">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
