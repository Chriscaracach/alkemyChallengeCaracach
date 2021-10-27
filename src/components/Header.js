import React from "react";
import { Link } from "react-router-dom";
import { deleteToken } from "../token/AuthFunctions";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const closeSession = () => {
    deleteToken();
    dispatch({ type: "LOGOUT_USER" });
    dispatch({ type: "RESET_SUPERHEROE" });
  };
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Superhero</h3>
        </Link>
        <button className="btn" onClick={closeSession}>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default Header;
