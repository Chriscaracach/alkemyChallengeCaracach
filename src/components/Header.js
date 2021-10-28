import React from "react";
import { Link } from "react-router-dom";
import { deleteToken } from "../token/AuthFunctions";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/loginActions";
import { resetSearch, resetDetailHero } from "../redux/actions/heroActions";

const Header = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.loginReducer.userLogged);
  const logout = () => {
    deleteToken();
    dispatch(logoutUser());
    dispatch(resetSearch());
    dispatch(resetDetailHero());
  };
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Superhero</h3>
        </Link>
        {logged ? (
          <button className="btn" onClick={logout}>
            Log out
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
