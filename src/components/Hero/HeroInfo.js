import "./Hero.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeroInfo = () => {
  const hero = useSelector((state) => state.heroReducer.heroDetailSelected);

  return (
    <div
      className="container w-75 border rounded p-2 m-auto my-3"
      id="Hero-container"
    >
      <div className="row">
        <div className="col-md-4">
          <img
            src={hero.image.url}
            alt={hero.name}
            className="img-fluid rounded"
            id="Hero-img"
          />
        </div>
        <div className="col-md-8 p-3">
          <Link to="/">
            <button className="btn btn-close btn-lg action-button float-end"></button>
          </Link>
          <h1 id="Hero-title">{hero.name}</h1>
          <ul className="list-group ul-custom p-2 m-1">
            <li className="list-group-item li-custom">
              <p className="lead p-custom m-auto">
                Weight: {hero.appearance.weight[1]}
              </p>
            </li>
            <li className="list-group-item li-custom">
              <p className="lead p-custom m-auto">
                Height: {hero.appearance.height[1]}
              </p>
            </li>
            <li className="list-group-item li-custom">
              <p className="lead p-custom m-auto">
                Alias:
                {hero.biography.aliases.map((item) => {
                  return " / " + item;
                })}
              </p>
            </li>
            <li className="list-group-item li-custom">
              <p className="lead p-custom m-auto">
                {/*EL guión de 'eye-color' molestaba para acceder a los datos*/}
                Eye color: {hero["appearance"]["eye-color"]}
              </p>
            </li>
            <li className="list-group-item li-custom">
              <p className="lead p-custom m-auto">
                {/*Idem 'eye-color'*/}
                Hair color: {hero["appearance"]["hair-color"]}
              </p>
            </li>
            <li className="list-group-item li-custom">
              <p className="lead p-custom m-auto">Work: {hero.work.base}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
