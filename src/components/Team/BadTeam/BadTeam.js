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
    <>
      <p className="m-0 mt-2">Bad Team</p>
      <div className="container p-2 border rounded m-2">{map}</div>
    </>
  );
};

export default BadTeam;
