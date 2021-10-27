import React from "react";
import TeamCard from "../TeamCard";
import { useSelector } from "react-redux";

const BadTeam = () => {
  const BadTeam = useSelector((state) => state.heroReducer.badTeam);

  const map = BadTeam.map((item, i) => (
    <div key={i}>
      <TeamCard superHero={item}></TeamCard>
    </div>
  ));
  return (
    <div className="m-2">
      <h1 id="team-bad-title">Bad Team</h1>
      {BadTeam.length === 0 ? (
        <p className="team-empty-text">No heros in Bad Team</p>
      ) : (
        <div className="container p-2 m-2 text-center" id="team-bad-container">
          {map}
        </div>
      )}
    </div>
  );
};

export default BadTeam;
