import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Superhero</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
