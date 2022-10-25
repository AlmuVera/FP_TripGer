import React from "react";
import moment from "moment"

export default function Events(props) {
  return (
    <>
      {/* {console.log(props)} */}
      <div></div>
      <div className="card" style={{ width: 12 + "rem" }}>
        <img src={props.images[1].url} className="card-img-top" alt={props.element} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            {moment(props.dates.start.dateTime).format("D MMM YYYY")}
            <br />
            {props._embedded.venues[0].name}
          </p>
          <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Go to event
          </a>
        </div>
      </div>
    </>
  );
}
