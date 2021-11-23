import React, { useEffect } from "react";
import DisplayHeroes from "./Display/DisplayHeroes";
import TeamPowerstats from "./Team/TeamPowerstats";
import SearchBar from "./SearchBar";
import AvgWeightHeight from "./Team/AvgWeightHeight";
import { useDispatch, useSelector } from "react-redux";
import { calculateAverage } from "../redux/actions/heroActions";
import Team from "./Team/Team";
import { weightAndHeightAvgSliced } from "../utils/functions";

const Home = () => {
  const dispatch = useDispatch();
  const bad = useSelector((state) => state.heroReducer.badTeam);
  const good = useSelector((state) => state.heroReducer.goodTeam);

  //Éste hook es necesario para calcular los promedios y modificar un poco el formato de los datos que viene de la API, cada vez que se suma un heroe/heroína nuevo al equipo.
  useEffect(() => {
    const ReduxTeam = [...good, ...bad];

    const avg = weightAndHeightAvgSliced(ReduxTeam);

    dispatch(calculateAverage(avg));
  }, [dispatch, bad, good]);

  return (
    <div className="container">
      <div className="row justify-content-around">
        <div className="order-2 col-lg-3 cont-badteam">
          <Team bad="true"></Team>
        </div>

        <div className="order-1 col-lg-4 cont-powerstats">
          <h1 id="team-powerstats-title">Team stats</h1>
          <TeamPowerstats></TeamPowerstats>
          <AvgWeightHeight></AvgWeightHeight>
        </div>

        <div className="order-3 col-lg-3 cont-goodteam">
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
