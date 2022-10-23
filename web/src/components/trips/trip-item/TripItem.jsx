import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import "./TripItem.css";

function TripItem({ city, coverPhoto, startDate, endDate,id }) {

  return (
    <Link to={`/${id}`}>
      <div className="card text-white border-0 mx-auto">
        <img className="card-img rounded" src={coverPhoto} alt={city} />
        <div className="card-img-overlay">
          <h1 className="card-title d-flex justify-content-center h1-card">{city} </h1>
          <h5 className="card-title d-flex justify-content-center h1-card">{moment(startDate).format("D MMM YYYY")} <i className="date-arrow fa-solid fa-arrow-right-long" />{moment(endDate).format("D MMM YYYY")}</h5>
          <h5 className="card-title d-flex justify-content-center h1-card">{moment(startDate).fromNow()} </h5>

          {/* <p className="card-text p-card">
            This is a wider card with supporting text below 
          </p>
          <p className="card-text p-card">Poner aqui countdown</p> */}
        </div>
        
      </div>

    </Link>
  );
}

export default TripItem;
