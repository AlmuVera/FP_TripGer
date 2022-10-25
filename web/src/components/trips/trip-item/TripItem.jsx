import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./TripItem.css";

function TripItem({ city, coverPhoto, startDate, endDate, id }) {
  return (
    <Link to={`/${id}`}>
      <div className="card text-white border-0 mx-auto">
        <img className="card-img rounded" src={coverPhoto} alt={city} />
        <div className="card-img-overlay">
          <div className="d-flex justify-content-between">
          <h1 className="card-title d-flex h1-card text-capitalize">
            {city}
          </h1>
          <h6 className="card-title d-flex justify-content-center h1-card">
            {moment(startDate).fromNow()}
          </h6>
          </div>
          
          <h6 className="card-title d-flex h1-card">
            {moment(startDate).format("D MMM YYYY")}
            <i className="date-arrow fa-solid fa-arrow-right-long" />
            {moment(endDate).format("D MMM YYYY")}
          </h6>
          
        </div>
      </div>
    </Link>
  );
}

export default TripItem;
