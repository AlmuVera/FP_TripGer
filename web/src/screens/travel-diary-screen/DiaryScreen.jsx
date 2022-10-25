import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import * as tripService from "../../services/trip-services";
import { DiaryPostsList } from "../../components";

import "./DiaryScreen.css";

function DiaryScreen() {
  const { id } = useParams();
  const [refreshAfterUpload, setRefreshAfterUpload] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleUploadPost = (data) => {
    setRefreshAfterUpload(false);
    // console.log(data)
    // console.log(data.file[0], "diaryScreen");
    tripService
      .uploadPost(id, data.title, data.text, data.date, data.file[0])
      .then(() => setRefreshAfterUpload(true))
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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto pt-3">
            <div className="tab-post my-5 ">
              <div className="tab-content tabs">
                <h3 className="fw-light m-2">Añade un recuerdo de tu viaje</h3>
                <hr />

                <form
                  onSubmit={handleSubmit(handleUploadPost)}
                  className="form-horizontal"
                >
                  <div className=" form-group mb-1">
                    <label htmlFor="title">Ponle un nombre a tu recuerdo</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.title ? "is-invalid" : ""
                      }`}
                      {...register("title", {
                        required: "El nombre del archivo es requerido",
                      })}
                    />
                    {errors.title && (
                      <div className="invalid-feedback">
                        {errors.title.message}
                      </div>
                    )}
                  </div>
                  {/* // */}

                  <div className=" form-group mb-1">
                    <label htmlFor="textarea">Texto</label>
                    <textarea
                      type="textarea"
                      className={`form-control text-area ${
                        errors.text ? "is-invalid" : ""
                      }`}
                      {...register("text", {})}
                    />
                    {errors.text && (
                      <div className="invalid-feedback">
                        {errors.text.message}
                      </div>
                    )}
                  </div>
                  {/* // */}

                  <div className="form-group mb-1">
                    <label htmlFor="date">Selecciona una fecha</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className={`form-control fw ${
                        errors.date ? "is-invalid" : ""
                      }`}
                      label="fecha de inicio"
                      {...register("date", {
                        required: "Selecciona una fecha para agregar a tu post",
                      })}
                    />
                    {errors.date && (
                      <div className="invalid-feedback">
                        {errors.date.message}
                      </div>
                    )}
                  </div>

                  {/* // */}

                  <div className=" form-group mb-1">
                    <label htmlFor="image">Añade un archivo</label>
                    <input
                      type="file"
                      className={`form-control  ${
                        errors.file ? "is-invalid" : ""
                      }`}
                      {...register("file", {
                        required: "No has seleccionado ningún archivo",
                      })}
                    />
                    {errors.file && (
                      <div className="invalid-feedback">
                        {errors.file.message}
                      </div>
                    )}
                  </div>
                  {/* // */}

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
            {/* end form */}

            <div className="">
              {/* <h3 className="fw-light m-2">Recuerdos:</h3> */}
              <DiaryPostsList
                diaryPostId={id}
                refreshAfterUpload={refreshAfterUpload}
              />
            </div>
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
      </div>
    </>
  );
}

export default DiaryScreen;
