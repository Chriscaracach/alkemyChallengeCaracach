import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { formatDataFromAPI } from "../../utils/functions";

const TeamPowerstats = () => {
  const powerStats = useSelector((state) => state.heroReducer.powerStats);

  const powerStatsInNewFormat = formatDataFromAPI(powerStats);

  const map = powerStatsInNewFormat.map((item, i) => (
    <div key={i} className="my-1 team-powerstats-highlight">
      <p className="d-inline">{item.name}</p>
      <div className="float-end">
        <CountUp start={0} end={item.power} duration={1} />
      </div>
    </div>
  ));

  return (
    <>
      <div className="card p-4 col" id="team-powerstats">
        {map}
      </div>
    </>
  );
};

export default TeamPowerstats;
