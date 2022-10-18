import React from "react";
import { TripForm } from "../../components";

function CreateTripScreen() {
  return (
    <>
      <h2 className="m-0 fw-light text-center">Aquí comienza tu viaje</h2>
      <hr className="mt-1 mb-3 " />

      <TripForm />
    </>
  );
}

export default CreateTripScreen;
