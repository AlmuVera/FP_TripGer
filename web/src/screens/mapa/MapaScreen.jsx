import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useLoadScript,
  GoogleMap,
  Autocomplete,
  MarkerF,
} from "@react-google-maps/api";

import Geocode from "react-geocode";
import Section from "../../components/section/Section";
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

const libraries = ["places"];

function MapaScreen(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const navigate = useNavigate();
  const originRef = useRef();

  const [map, setMap] = useState(null);
  const [geoLoc, setGeoLoc] = useState(null);
  const { city } = useParams();

  !geoLoc && getLongLat(city).then((result) => setGeoLoc(result));

  // if (!isLoaded) {
  //   console.log("loading...");
  // }

  return (
    <>
      <Section title="Itinerario" icon="map"></Section>
      <div
        className="container rounded"
        style={{ height: "50vh", width: "100%" }}
      >
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
            <MarkerF position={geoLoc} animation={2} />
          </GoogleMap>
        )}
      </div>

      <div className="form-group mb-1">
        <div className="mt-3 px-4">
          <label htmlFor="city">Buscar lugares favoritos</label>
          <Autocomplete>
            <input type="text" ref={originRef} className="form-control" />
          </Autocomplete>
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

export default MapaScreen;
