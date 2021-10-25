import React, { useEffect } from "react";
import { getToken, deleteToken } from "../token/AuthFunctions";
import DisplayHeroes from "./DisplayHeroes";
import Powerstats from "./Hero/Powerstats";
import SearchBar from "./SearchBar";
import Team from "./Team/Team";
import AvgWeightHeight from "./Team/AvgWeightHeight";
import { useDispatch, useSelector } from "react-redux";

/*
  TODO: Unificar Powerstats y avgs en un solo componente
  TODO: Manejar selector desde el componente de powerstats, el unificado, para que quede mas prolijo
  TODO: Revisar Layout
  TODO: Revisar Responsive


*/

const Home = () => {
  const dispatch = useDispatch();
  const ReduxTeam = useSelector((state) => state.heroReducer.equipo);

  useEffect(() => {
    ReduxTeam.forEach((hero) => {});
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

  const closeSession = () => {
    deleteToken();
    dispatch({ type: "LOGOUT_USER" });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Team></Team>
          <button className="btn btn-danger" onClick={closeSession}>
            Cerrar sesión
          </button>
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
