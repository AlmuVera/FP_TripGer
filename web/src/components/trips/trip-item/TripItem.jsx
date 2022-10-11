import React from "react";
import { Link } from "react-router-dom";

function TripItem({ city, coverPhoto, id }) {
  return (
    <Link to={`/${id}`}>
      <div className="d-flex trip-item flex-column">
        <div className="d-flex my-2 justify-content-between align-items-baseline">
          <h3 className="m-0 fs-4 fw-lighter">{city}</h3>
        </div>
        <img className="cover-img rounded-1" src={coverPhoto} alt={city} />
      </div>
    </Link>
  );
}


export default TripItem;
