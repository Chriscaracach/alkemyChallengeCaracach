import React from "react";
import TeamCard from "../TeamCard";
import { useSelector } from "react-redux";

const GoodTeam = () => {
  const GoodTeam = useSelector((state) => state.heroReducer.goodTeam);

  const map = GoodTeam.map((item, i) => (
    <div key={i}>
      <TeamCard superHero={item}></TeamCard>
    </div>
  ));
  return (
    <div className="m-2">
      <h1 id="team-good-title">Good Team</h1>
      {GoodTeam.length === 0 ? (
        <p className="team-empty-text">No heros in Good Team</p>
      ) : (
        <div className="container p-2 m-2 text-center" id="team-good-container">
          {map}
        </div>
      )}
    </div>
  );
};

export default GoodTeam;
