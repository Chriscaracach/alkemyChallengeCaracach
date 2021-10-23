import React from "react";
import DisplayHeroes from "./DisplayHeroes";
import Powerstats from "./Hero/Powerstats";
import SearchBar from "./SearchBar";
import Team from "./Team/Team";
import AvgWeightHeight from "./Team/AvgWeightHeight";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Team></Team>
        </div>
        <div className="col-4">
          <h1>Stats de tu equipo</h1>
          <Powerstats></Powerstats>
          <AvgWeightHeight></AvgWeightHeight>
        </div>
      </div>

      <div className="text-center mt-5">
        <SearchBar></SearchBar>
        <DisplayHeroes></DisplayHeroes>
      </div>
    </div>
  );
};

export default Home;
