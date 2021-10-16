import React from "react";
import CountUp from "react-countup";

const Powerstats = ({ powerstats }) => {
  const powerstatsNames = Object.keys(powerstats);
  const powerstatsValues = Object.values(powerstats);
  const powerstatsNewFormat = [];
  for (let i = 0; i < powerstatsNames.length; i++) {
    let stat = {
      name: powerstatsNames[i],
      power: powerstatsValues[i],
    };
    powerstatsNewFormat.push(stat);
  }
  const map = powerstatsNewFormat.map((item, i) => (
    <div key={i} className="my-1">
      <p className="d-inline">{item.name}</p>
      <div className="float-end">
        <CountUp start={0} end={item.power} duration={1} />
      </div>
    </div>
  ));

  return <div className="card p-4">{map}</div>;
};

export default Powerstats;
