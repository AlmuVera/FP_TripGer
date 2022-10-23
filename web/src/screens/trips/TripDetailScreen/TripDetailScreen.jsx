import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import { DiaryBox, DocumentsBox, MapBox } from "../../../components";
// import { Section } from "../../../components";
import { getTrip } from "../../../services/trip-services";

import "./TripDetailScreen.css";

function TripDetailScreen() {
  const [trip, setTrip] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTrip(id).then((trip) => setTrip(trip));
  }, [id]);


  if (!trip) {
    return <></>;
  }

  return (
    <>

      <div className="col-12">
        <img
          src={trip.data.coverPhoto}
          alt="coverPhoto"
          className="w-100 rounded"
        />
        <h2 className="my-3">{trip.data.city}</h2>
      </div>
      <div className="">
        <p>{trip.data.description}</p>
        <p className="m-0">{trip.data.startDate}</p>
        <p>{trip.data.endDate}</p>
      </div>

      {/* <div className="d-flex flex-row boxes">
        <DocumentsBox />
        <MapBox />
      </div> */}

      <div className="d-flex flex-row boxes">
        <Link to={`/${id}/documentos`} type="button">
          <DocumentsBox />
        </Link>

        <Link to={`/${id}/mapa`} type="button">
          <MapBox />
        </Link>

        <Link to={`/${id}/diario-de-viaje`} type="button">
          <DiaryBox />
        </Link>
      </div>
      <button
        className="border-0 bg-transparent mt-3 back-btn"
        onClick={() => navigate(-1)}
      >
        <h4>
          <i className="fa-solid fa-angle-left "></i> Back
        </h4>
      </button>

      
    </>
  );
}

export default TripDetailScreen;
