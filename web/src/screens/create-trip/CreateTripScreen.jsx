import React from "react";
import { TripForm } from "../../components";
import "./CreateTripScreen.css";

function CreateTripScreen() {
  return (
    <>
      {/* <div className="mb-2">
        <h2 className="section-header m-0 fw-light fs-4 text-center">
          ¿A dónde vamos?
          <i className="fa-solid fa-suitcase m-2"></i>
        </h2>  
      </div> */}

      <TripForm />
    </>
  );
}

export default CreateTripScreen;
