import React, { useState } from "react";
import HeroPowerstats from "./HeroPowerstats";
import "./Team.css";

const TeamCard = ({ superHero }) => {
  const [isShowingInfo, setIsShowingInfo] = useState(false);

  const showInfo = () => {
    console.log("show");
    setIsShowingInfo(!isShowingInfo);
  };

  return (
    <div className="card m-2" id="teamcard-container" onClick={showInfo}>
      {isShowingInfo ? (
        <div className="w-100 h-100" id="powerstats">
          <HeroPowerstats
            powerStats={superHero.powerstats}
            superHero={superHero}
          ></HeroPowerstats>
        </div>
      ) : (
        <div className="w-100 h-100 p-1" id="teamcard">
          <div className="row">
            <div className="col-5 d-flex align-items-center justify-content-center">
              <img
                src={superHero.image.url}
                className="h-75 w-75 rounded-circle"
                alt={superHero.name}
                id="img"
              />
            </div>
            <div className="col-7 teamcard-name d-flex flex-column justify-content-center align-items-between">
              <p>{superHero.name}</p>
              <p className="small" id="teamcard-tapForInfo">
                Tap for info
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
