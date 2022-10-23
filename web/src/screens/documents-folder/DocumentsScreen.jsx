import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import * as tripService from "../../services/trip-services";
import { DocumentList } from "../../components";

import "./Documents.Screen.css";

function DocumentsScreen() {
  const { id } = useParams();
  const [updateAfterUpload, setUpdateAfterUpload] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleUploadFile = (data) => {
    setUpdateAfterUpload(false);
    console.log(data);
    tripService
      .uploadFile(id, data.title, data.file[0])
      .then(() => setUpdateAfterUpload(true))
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
            <div className="tab-document my-5 ">
              <div className="tab-content tabs">
                <h3 className="fw-light m-2">Añade un archivo</h3>
                <hr />

                <form
                  onSubmit={handleSubmit(handleUploadFile)}
                  className="form-horizontal"
                >
                  <div className=" form-group mb-1">
                    <label htmlFor="title">Nombre del archivo</label>
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
                    {/* <label htmlFor="title">Nombre del archivo</label> */}
                    <input
                      type="file"
                      className={`form-control  ${
                        errors.title ? "is-invalid" : ""
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

  
            
            <div className="display">
              <h3 className="fw-light m-2">Documentos:</h3>
              <DocumentList docId={id} updateAfterUpload={updateAfterUpload} />
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

export default DocumentsScreen;
