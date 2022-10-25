import React, { useState } from "react";
import { useParams } from "react-router";
import {
  useLoadScript,
  GoogleMap,
  // Autocomplete,
  MarkerF,
} from "@react-google-maps/api";

import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");

const getLongLat = async (place) => {
  return await Geocode.fromAddress(place).then(
    (response) => {
      const center = { lat: 0, lng: 0 };
      const { lat, lng } = response.results[0].geometry.location;
      center.lat = lat;
      center.lng = lng;
      return center;
    },
    (error) => {
      console.error(error);
    }
  );
};

const libraries = ['places'];

function MapaScreen(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(null);
  const [geoLoc, setGeoLoc] = useState(null);
  const { city } = useParams();

  !geoLoc && getLongLat(city).then((result) => setGeoLoc(result));

  // if (!isLoaded) {
  //   console.log("loading...");
  // }

  return (
    <>
      <div style={{ height: "70vh", width: "100%" }}>
        {geoLoc && isLoaded && (
            <GoogleMap
              center={geoLoc}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              <MarkerF position={geoLoc} animation={{ animation:2 }} />
            </GoogleMap>
          )}
      </div>
    </>
  );
}

export default MapaScreen;
