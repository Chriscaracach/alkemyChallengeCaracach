import React, { useEffect } from "react";
import DisplayHeroes from "./Display/DisplayHeroes";
import TeamPowerstats from "./Team/TeamPowerstats";
import SearchBar from "./SearchBar";
import AvgWeightHeight from "./Team/AvgWeightHeight";
import { useDispatch, useSelector } from "react-redux";
import BadTeam from "./Team/BadTeam/BadTeam";
import GoodTeam from "./Team/GoodTeam/GoodTeam";
import BadTeamError from "./Team/BadTeam/BadTeamError";
import GoodTeamError from "./Team/GoodTeam/GoodTeamError";
/*
  TODO: Unificar Powerstats y avgs en un solo componente
  TODO: Manejar selector desde el componente de powerstats, el unificado, para que quede mas prolijo
  TODO: Revisar Layout
  TODO: Revisar Responsive


*/

const Home = () => {
  const dispatch = useDispatch();
  const bad = useSelector((state) => state.heroReducer.badTeam);
  const good = useSelector((state) => state.heroReducer.goodTeam);
  const badError = useSelector((state) => state.heroReducer.badTeamError);
  const goodError = useSelector((state) => state.heroReducer.GoodTeamError);
  const ReduxTeam = [...good, ...bad];

  useEffect(() => {
    let weight = 0;
    let height = 0;
    ReduxTeam.forEach((hero) => {
      let w = hero.appearance.weight[1].slice(0, -3);
      let h = hero.appearance.height[1].slice(0, -3);
      let wn = parseInt(w);
      let hn = parseInt(h);
      weight = weight + wn;
      height = height + hn;
    });
    let avg = {
      weight: weight / ReduxTeam.length,
      height: height / ReduxTeam.length,
    };
    dispatch({ type: "CALCULAR_PROMEDIOS", avg });
  }, [ReduxTeam]);

  return (
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-lg-3 cont-badteam">
          <BadTeam></BadTeam>
        </div>

        <div className="col-lg-4 cont-powerstats">
          <h1 id="team-powerstats-title">Team stats</h1>
          <TeamPowerstats></TeamPowerstats>
          <AvgWeightHeight></AvgWeightHeight>
        </div>

        <div className="col-lg-3 cont-goodteam">
          <GoodTeam></GoodTeam>
        </div>
      </div>
      {badError ? <BadTeamError></BadTeamError> : null}
      {goodError ? <GoodTeamError></GoodTeamError> : null}
      <div className="text-center mt-5">
        <SearchBar></SearchBar>
        <DisplayHeroes></DisplayHeroes>
      </div>
    </div>
  );
};

export default Home;
