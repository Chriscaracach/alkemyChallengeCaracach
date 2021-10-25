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
    <>
      <p className="m-0 mt-2">Good Team</p>
      <div className="container p-2 border rounded m-2">{map}</div>
    </>
  );
};

export default GoodTeam;
