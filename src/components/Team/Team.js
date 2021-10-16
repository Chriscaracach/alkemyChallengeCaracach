import React from "react";
import TeamCard from "./TeamCard";

const fakeTeam = [
  {
    name: "Robin",
    img: "https://placeimg.com/640/480/any",
    powerstats: {
      intelligence: 26,
      strength: 62,
      speed: 6,
      durability: 34,
      power: 12,
      combat: 99,
    },
  },
  {
    name: "Batman",
    img: "https://placeimg.com/640/480/any",
    powerstats: {
      intelligence: 26,
      strength: 62,
      speed: 6,
      durability: 34,
      power: 12,
      combat: 99,
    },
  },
  {
    name: "Superman",
    img: "https://placeimg.com/640/480/any",
    powerstats: {
      intelligence: 0,
      strength: 62,
      speed: 6,
      durability: 34,
      power: 100,
      combat: 99,
    },
  },
];
const Team = () => {
  const map = fakeTeam.map((item, i) => (
    <div className="col-md-4">
      <TeamCard
        name={item.name}
        img={item.img}
        powerstats={item.powerstats}
      ></TeamCard>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="row">{map}</div>
      </div>
    </>
  );
};

export default Team;
