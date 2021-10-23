import React from "react";
import TeamCard from "./TeamCard";
import { useSelector } from "react-redux";

const Team = () => {
  const Team = useSelector((state) => state.heroReducer.equipo);

  const map = Team.map((item, i) => (
    <div className="col-md-4" key={i}>
      <TeamCard superHero={item}></TeamCard>
    </div>
  ));
  console.log(Team);
  console.log(map);
  return (
    <>
      <div className="container">
        <h1>Tu equipo</h1>
        {map}
      </div>
    </>
  );
};

export default Team;
