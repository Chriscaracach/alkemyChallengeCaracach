import React from "react";
import TeamCard from "./TeamCard";
import { useSelector } from "react-redux";

const Team = ({ bad, good }) => {
  const BadTeam = useSelector((state) => state.heroReducer.badTeam);
  const GoodTeam = useSelector((state) => state.heroReducer.goodTeam);

  const mapBad = BadTeam.map((item, i) => (
    <div key={i}>
      <TeamCard superHero={item}></TeamCard>
    </div>
  ));
  const mapGood = GoodTeam.map((item, i) => (
    <div key={i}>
      <TeamCard superHero={item}></TeamCard>
    </div>
  ));
  return (
    <>
      {good === "true" ? (
        <div className="m-2">
          <h1 id="team-good-title">Good Team</h1>
          {GoodTeam.length === 0 ? (
            <p className="team-empty-text">No heros in Good Team</p>
          ) : (
            <div
              className="container p-2 m-2 text-center"
              id="team-good-container"
            >
              {mapGood}
            </div>
          )}
        </div>
      ) : null}
      {bad === "true" ? (
        <div className="m-2">
          <h1 id="team-bad-title">Bad Team</h1>
          {BadTeam.length === 0 ? (
            <p className="team-empty-text">No heros in Bad Team</p>
          ) : (
            <div
              className="container p-2 m-2 text-center"
              id="team-bad-container"
            >
              {mapBad}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Team;
