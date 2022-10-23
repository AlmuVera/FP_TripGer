import React, { useContext } from "react";
import logo from "../../logo_tripger.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/auth-services";

import "./NavBar.css";

function NavBar() {
  const { user, setUser } = useContext(AuthContext);

  const handleClick = () => {
    logout()
      .then(() => {
        localStorage.clear();
        setUser(null);
      })
      .catch((error) => console.error(error));
  };

  if (!user) {
    return (
      <nav className="navbar navbar-bg sticky-top">
        <div className="container-fluid position-relative">
          <Link
            className="navbar-brand position-absolute top-50 start-50 translate-middle"
            to="/"
          >
            <img className="logo-nav " src={logo} alt="TrpGer Logo" />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item nav-i position-absolute start-100 translate-middle">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link " : "nav-link "
                }
              >
                <i className="fa fa-user"></i> Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-bg sticky-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand position-absolute top-50 start-50 translate-middle"
            to="/"
          >
            <img className="logo-nav " src={logo} alt="TrpGer Logo" />
          </Link>
          <button
            className="navbar-toggler custom-toggler position-absolute top-50 end-0 translate-middle"
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
                  data-target=".navbar-collapse.show"
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
                    isActive ? "nav-link active-link " : "nav-link"
                  }
                >
                  <i className="fa fa-plane"></i> Mis viajes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/crear-viaje"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  <i className="fa fa-plus"></i> Nuevo viaje
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

              {/* Logout Button */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  <i
                    className="fa-solid fa-power-off"
                    onClick={handleClick}
                  ></i>{" "}
                  Logout
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

              
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn " type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
