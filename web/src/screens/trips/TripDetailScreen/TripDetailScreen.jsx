import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  DiaryBox,
  DocumentsBox,
  MapBox,
  Events,
  Section,
} from "../../../components";
import { getTrip } from "../../../services/trip-services";
import { getEventsFromCity } from "../../../services/event-services";

import "./TripDetailScreen.css";

function TripDetailScreen() {
  const [trip, setTrip] = useState(null);
  const [events, setEvents] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTrip(id)
      .then((trip) => {
        setTrip(trip);
        return trip;
      })
      .then((tripdata) => {
        const result = getEventsFromCity(tripdata.data.city);
        return result;
      })
      .then((events) => setEvents(events.data.events));
  }, [id]);

  if (!trip) {
    return <></>;
  }

  return (
    <>
      <div className="col-12">
        <div className="">
        <div className="d-flex justify-content-between">
          <h1 className="card-title d-flex text-capitalize">
          {trip.data.city}
          </h1>
          <h6 className="card-title d-flex from-now">
            {moment(trip.data.startDate).fromNow()}
          </h6>
          </div>
          
          <h6 className="card-title d-flex h1-card d-flex align-items-end mb-3">
            {moment(trip.data.startDate).format("D MMM YYYY")}
            <i className="date-arrow fa-solid fa-arrow-right-long " />
            {moment(trip.data.endDate).format("D MMM YYYY")}
          </h6>
          <img
            src={trip.data.coverPhoto}
            alt="coverPhoto"
            className="w-100 rounded mb-3 "
          />
        </div>
       
      </div>
      
      {/* <----> */}
     
      <div class="square square-lg bg-white"></div>
      <div className="d-flex flex-wrap">
        <Link to={`/${id}/documentos`} type="button">
          <DocumentsBox />
        </Link>

        <Link to={`/${id}/mapa/${trip.data.city.split(',')[0]}`} type="button">
          <MapBox />
        </Link>

        <Link to={`/${id}/diario-de-viaje`} type="button">
          <DiaryBox />
        </Link>
      </div>
      <Section title={`Eventos en ${trip.data.city}`} icon="ticket"></Section>
      <div className="container">
        <div className="row row-cols-3">
          {events &&
            events.map((event, element) => (
              <div className="col-sm" key={event.id}>
                <Events element={element} {...event} />
              </div>
            ))}
        </div>
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
