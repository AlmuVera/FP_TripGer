import React from "react";
import moment from "moment";
import './Events.css'

export default function Events(props) {
  return (
    <>
      <div className="border-box d-flex justify-content-between bg-white mb-2 rounded p-2 text-capitalize">
        <div className="d-flex ">
          <img
            src={props.images[1].url}
            className="w-25 rounded fill"
            alt={props.element}
          />
          <div className="d-flex flex-column event-info pt-2 ">
            <h6 className="card-title event-info text-dark">{props.name}</h6>
            <p className="card-text text-muted event-info">
              {moment(props.dates.start.dateTime).format("D MMM YYYY")}
              <br />
              {props._embedded.venues[0].name}
            </p>
            {/* see file btn: */}
            <a href={props.url} target="blank" className="link-event">
              <i className="fa-regular fa-eye list-see-icon"></i> <span className="text-dark">Ver evento</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
