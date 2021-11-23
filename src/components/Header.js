import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteToken } from "../token/AuthFunctions";
import { logoutUser } from "../redux/actions/loginActions";
import { resetSearch, resetDetailHero } from "../redux/actions/heroActions";

const Header = () => {
  const logged = useSelector((state) => state.loginReducer.userLogged);
  const dispatch = useDispatch();

  function Logout() {
    deleteToken();
    dispatch(logoutUser());
    dispatch(resetSearch());
    dispatch(resetDetailHero());
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Superhero</h3>
        </Link>
        {logged ? (
          <button className="btn" onClick={Logout}>
            Log out
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
