import React from "react";
import * as tripService from "../../../services/trip-services";

import "./DiaryPostItem.css";

function DiaryPostItem(props) {
  const handleDeletePost = (file, tripId) => {
    props.setMakePostUpdate(false);
    console.log(file, tripId);
    tripService
      .deletePost(file, tripId)
      .then(() => {
        props.setMakePostUpdate(true);
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
      {/* <div className="bg-list-item mb-2 rounded p-2 text-capitalize"> */}
      {/* Card Post */}
      {/* <div className="d-flex card border-0 wm-50 bg-transparent">
          <img
            className="card-img-top rounded"
            src={props.postData.image}
            alt="imagen de post"
          />
          <div className="card-block">
            <h4 className="card-title">{props.postData.title}</h4>
            <p className="card-text">{props.postData.text}</p>
          </div>
        </div> */}
      {/* <----> */}
      <div className="container">
        <div className="card-group">
          <div className="card bg-list-item border-0">
            <div className="card-img-body">
              <img
                className="card-img"
                src={props.postData.image}
                alt="imagen de post"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-capitalize">
                {props.postData.title}
              </h4>
              <p className="card-text">{props.postData.text}</p>
              {/* <a href="#" class="btn btn-outline-primary">Primary</a> */}
            </div>
          
        
        <button
        className="border-0 bg-transparent "
        onClick={(e) => {
          handleDeletePost(props.postData.id, props.postData.trip);
        }}
      >
        {/* delete btn: */}
        <i className="fa-solid fa-trash-can mb-5 trash-icon"></i> Borrar recuerdo
      </button>
      </div>
      </div>
      </div>

      
      {/* </div> */}
      <hr className="my-4"/>
    </>
  );
}

export default DiaryPostItem;


