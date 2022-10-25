import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as tripService from "../../../services/trip-services";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import "./TripForm.css";

const libraries = ["places"];

function TripForm() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const originRef = useRef();

  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const changingDate = watch("startDate");

  useEffect(() => {
    reset((formValues) => ({ ...formValues, endDate: "" }));
  }, [reset, changingDate]);

  const isURL = (value) => {
    try {
      new URL(value);
      return true;
    } catch (error) {
      return false;
    }
  };
  const handleCreateTripSubmit = (data) => {
    // console.log( data);
    tripService
      .createTrip(data)
      .then((trip) => navigation(`/${trip.id}`))
      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors).forEach((error) => {
            setError(error, { message: errors[error].message });
          });
        }
      });
  };
  // en el input de cities quiero un imput select con listado de ciudades (google?)
  return (
    <div className="container">
      {isLoaded && (
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto pt-3">
            <div className="tab my-5 ">
              <div className="tab-content tabs">
                <h3 className="fw-light m-2">Comienza tu viaje</h3>
                <hr />

                <form
                  onSubmit={handleSubmit(handleCreateTripSubmit)}
                  className="form-horizontal"
                >
                  <div className=" form-group mb-1">
                    <label htmlFor="city">Ciudad de destino</label>
                    <Autocomplete>
                      <input
                        type="text"
                        ref={originRef}
                        className={`form-control ${
                          errors.city ? "is-invalid" : ""
                        }`}
                        {...register("city", {
                          required: "La ciudad de destino es requerida",
                          minLength: {
                            value: 4,
                            message: "caracteres minimos 4",
                          },
                          maxLength: {
                            value: 50,
                            message:
                              "Has sobrepasado el maximo de caracteres = 50",
                          },
                        })}
                      />
                    </Autocomplete>
                    {errors.city && (
                      <div className="invalid-feedback">
                        {errors.city.message}
                      </div>
                    )}
                  </div>
                  {/* // */}

                  <div className="form-group mb-1">
                    <label htmlFor="city">Añade una imagen a tu viaje</label>{" "}
                    <input
                      type="text"
                      className={`form-control ${
                        errors.coverPhoto ? "is-invalid" : ""
                      }`}
                      {...register("coverPhoto", {
                        required: "La imagen es requerida",
                        validate: (value) => isURL(value) || "URL no valida",
                      })}
                    />
                    {errors.coverPhoto && (
                      <div className="invalid-feedback">
                        {errors.coverPhoto.message}
                      </div>
                    )}
                  </div>

                  <div className="form-group mb-1">
                    <label htmlFor="city">Añade una descripción.Opcional</label>
                    <textarea
                      className="form-control"
                      {...register("description", {
                        // required: 'Description is required'
                      })}
                    />
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description.message}
                      </div>
                    )}
                  </div>

                  <div className="form-group mb-1">
                    <label htmlFor="city">Fecha de inicio</label>
                    <input
                      type="date"
                      // This makes the current today date in ISO standard, and removes the time part
                      min={new Date().toISOString().split("T")[0]}
                      className={`form-control fw ${
                        errors.startDate ? "is-invalid" : ""
                      }`}
                      label="fecha de inicio"
                      {...register("startDate", {
                        required: "La fecha de inicio en requerida",
                      })}
                    />
                    {errors.startDate && (
                      <div className="invalid-feedback">
                        {errors.startDate.message}
                      </div>
                    )}
                  </div>

                  <div className="form-group mb-1">
                    <label htmlFor="city">Fecha de finalización</label>
                    <input
                      type="date"
                      min={
                        watch("startDate")
                          ? new Date(watch("startDate"))
                              .toISOString()
                              .split("T")[0]
                          : new Date().toISOString().split("T")[0]
                      }
                      className={`form-control ${
                        errors.endDate ? "is-invalid" : ""
                      }`}
                      label="fecha de fin"
                      {...register("endDate", {
                        required: "La fecha de finalizacion en requerida",
                      })}
                    />
                    {errors.endDate && (
                      <div className="invalid-feedback">
                        {errors.endDate.message}
                      </div>
                    )}
                  </div>

                  <div className="d-grid mb-4 ">
                    <button
                      className="btn btn-primary btn-outline-primary"
                      type="submit"
                      disabled={!isValid}
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TripForm;
