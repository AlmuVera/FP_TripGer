import React, { useState, useEffect } from "react";
import * as tripService from "../../../services/trip-services";
import moment from "moment";
import TripItem from "../trip-item/TripItem";

function TripsList(props) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    tripService
      .getTrips()
      .then((trips) => {
        setTrips(trips.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const tripSort = (property) => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a, b) => {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  return (
    <div>
      {trips.sort(tripSort("-startDate")).map((trip) => (
        <div key={trip.id}>
          {moment(trip.startDate).fromNow().includes(props.tripFilter) && (
            <TripItem {...trip} />
          )}
        </div>
      ))}
    </div>
  );
}

export default TripsList;
