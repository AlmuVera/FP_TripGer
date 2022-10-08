import React from "react";
import logo from '../../logo_tripger.png';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-bg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="logo-nav"
            src={logo}
            alt="TrpGer Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
