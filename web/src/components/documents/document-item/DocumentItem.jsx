import React from "react";
import * as tripService from "../../../services/trip-services";


import "./DocumentItem.css";

function DocumentItem(props) {
  const handleDeleteFile = (file, tripId) => {
    props.setMakeUpdate(false);
    console.log(file, tripId);
    tripService
      .deleteFile(file, tripId)
      .then(() => {
        props.setMakeUpdate(true);
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors).forEach((error) => {
            return error, { message: errors[error].message };

          });
        }
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between bg-list-item mb-2 rounded p-2 text-capitalize">
        <a target="blank" className="link-doc" href={props.docData.file}>
          {props.docData.title}
          {/* see file btn: */}
          <i className="fa-regular fa-eye list-see-icon "></i>
        </a>

        <button
          className="border-0 bg-transparent "
          onClick={(e) => {
            handleDeleteFile(props.docData.id, props.docData.trip);
          }}
        >
          {/* delete btn: */}
          <i className="fa-solid fa-trash-can list-trash-icon"></i>
        </button>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default DocumentItem;
