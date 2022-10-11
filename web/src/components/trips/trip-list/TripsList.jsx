import React, { useState, useEffect} from 'react'
import * as tripService from "../../../services/trip-services";
import TripItem from "../trip-item/TripItem";

function TripsList() {
  const [trips, setTrips] = useState([]);
  
  useEffect(() => {
    tripService.getTrips()
      .then(trips => { console.log(trips.data); setTrips(trips.data)})
      .catch(error => console.error(error));
  }, [])

  return (
    <div >
    
      {trips.map((trip) => (
        <div  key={trip.id}>
          <TripItem {...trip} />
        </div>
      ))}
    </div>
  )
}

export default TripsList