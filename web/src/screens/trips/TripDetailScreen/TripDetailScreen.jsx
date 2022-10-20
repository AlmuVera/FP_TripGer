import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { Section } from "../../../components";
import { getTrip } from "../../../services/trip-services";

function TripDetailScreen() {
  const [trip, setTrip] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getTrip(id).then((trip) => setTrip(trip));
  }, [id]);

  if (!trip) {
    return <></>;
  }

  return (
   <>
      {console.log(trip.data.city)}
      <div className="row">
        <div className="col-12">
        <h3>{trip.data.city}</h3>
          <img src={trip.data.coverPhoto} alt="coverPhoto" className="w-100" />
        </div>
        <div className="col-8">
          
          <p>{trip.data.description}</p>
          <p>{trip.data.startDate}</p>
          <p>{trip.data.endDate}</p>
          {/* <p>
            <a href={trip.data.url} target="_blank" rel="noreferrer">
              {trip.data.url}
            </a>
          </p>        */}
        </div>
      </div>
      </>
   
  );
}

export default TripDetailScreen;
