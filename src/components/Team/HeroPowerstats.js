import React from "react";

//TODO: REvisar layout
//TODO: Cambiar nombre, tendría que ser team powerstats

const HeroPowerstats = ({ powerStats }) => {
  const powerstatsNames = [
    "Intelligence",
    "Strength",
    "Speed",
    "Durability",
    "Power",
    "Combat",
  ];
  const powerstatsValues = Object.values(powerStats);
  const powerstatsNewFormat = [];
  for (let i = 0; i < powerstatsNames.length; i++) {
    let stat = {
      name: powerstatsNames[i],
      power: powerstatsValues[i],
    };
    powerstatsNewFormat.push(stat);
  }
  powerstatsNewFormat.sort(function (a, b) {
    return a.power > b.power ? -1 : a.power < b.power ? 1 : 0;
  });
  const map = powerstatsNewFormat.map((item, i) => (
    <div key={i} className="my-1">
      <p className="d-inline">{item.name}</p>
      <div className="float-end">{item.power}</div>
    </div>
  ));

  return (
    <>
      <div className="card p-4 col">{map}</div>
    </>
  );
};

export default HeroPowerstats;
