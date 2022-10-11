import React from "react";
import logo from "../../logo_tripger.png";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo-nav " src={logo} alt="TrpGer Logo" />
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="fa fa-home"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/mis-viajes"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="fa fa-plane" ></i>  Mis viajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/crear-viaje"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="fa fa-plus" ></i>  Nuevo viaje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/inspiracion"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="fa-regular fa-lightbulb"></i> Inspirate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="fa-solid fa-circle-info"></i> Info
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn " type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
