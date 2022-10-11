import React from "react";
import { Link } from "react-router-dom";

import "./TripItem.css";

function TripItem({ city, coverPhoto, id }) {
  return (
    <Link to={`/${id}`}>
      <div className="card text-white mx-auto">
        <img className="card-img" src={coverPhoto} alt={city} />
        <div className="card-img-overlay">
          <h1 className="card-title d-flex justify-content-center h1-card">{city} </h1>
          <p className="card-text p-card">
            This is a wider card with supporting text below 
          </p>
          <p className="card-text p-card">Poner aqui countdown</p>
        </div>
      </div>


      {/* <div className="d-flex trip-item flex-column">
        <div className="d-flex my-2 justify-content-between align-items-baseline">
          <h3 className="m-0 fs-4 fw-lighter">{city}</h3>
        </div>
        <img className="cover-img rounded-1" src={coverPhoto} alt={city} />
      </div> */}
    </Link>
  );
}

export default TripItem;
