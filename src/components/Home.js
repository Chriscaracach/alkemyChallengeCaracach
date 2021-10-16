import React from "react";
import Powerstats from "./Hero/Powerstats";
import SearchBar from "./SearchBar";
import Team from "./Team/Team";

const powerstatsfake = {
  intelligence: 26,
  strength: 62,
  speed: 6,
  durability: 34,
  power: 12,
  combat: 99,
};
const Home = () => {
  return (
    <div>
      <Team></Team>
      {/* <SearchBar></SearchBar> */}

      {/* <Powerstats powerstats={powerstatsfake}></Powerstats> */}
    </div>
  );
};

export default Home;
