import React from "react";
import * as tripService from "../../../services/trip-services";
//import { Link } from "react-router-dom";

// import "./TripItem.css";

function DocumentItem(props) {
  const handleDeleteFile = (file, tripId) => {
    props.setMakeUpdate(false)
    console.log(file, tripId)
    tripService
      .deleteFile(file, tripId)
      .then(() => {
        props.setMakeUpdate(true)
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors).forEach((error) => {
            return (error, { message: errors[error].message });
          });
        }
      });
  };

  return (
    <>
      <div></div>
      
      <a href={props.docData.file}>{props.docData.title}</a>
      <button onClick={(e) => {
      handleDeleteFile(props.docData.id, props.docData.trip)
      }}>delete</button>

    
    </>
  );
}

export default DocumentItem;
