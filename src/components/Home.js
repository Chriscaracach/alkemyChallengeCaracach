import React, { useEffect } from "react";
import DisplayHeroes from "./Display/DisplayHeroes";
import TeamPowerstats from "./Team/TeamPowerstats";
import SearchBar from "./SearchBar";
import AvgWeightHeight from "./Team/AvgWeightHeight";
import { useDispatch, useSelector } from "react-redux";
import { calculateAverage } from "../redux/actions/heroActions";
import Team from "./Team/Team";

const Home = () => {
  const dispatch = useDispatch();
  const bad = useSelector((state) => state.heroReducer.badTeam);
  const good = useSelector((state) => state.heroReducer.goodTeam);

  //Éste hook es necesario para calcular los promedios y modificar un poco el formato de los datos que viene de la API, cada vez que se suma un heroe/heroína nuevo al equipo.
  useEffect(() => {
    const ReduxTeam = [...good, ...bad];
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
    dispatch(calculateAverage(avg));
  }, [dispatch, bad, good]);

  return (
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-lg-3 cont-badteam">
          <Team bad="true"></Team>
        </div>

        <div className="col-lg-4 cont-powerstats">
          <h1 id="team-powerstats-title">Team stats</h1>
          <TeamPowerstats></TeamPowerstats>
          <AvgWeightHeight></AvgWeightHeight>
        </div>

        <div className="col-lg-3 cont-goodteam">
          <Team good="true"></Team>
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
