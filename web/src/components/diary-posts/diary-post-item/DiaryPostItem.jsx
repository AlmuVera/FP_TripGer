import React from "react";
import * as tripService from "../../../services/trip-services";
import moment from "moment"
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
      <div className="container">
        <div className="card-group">
          <div className="card  border-0">
            <div className="card-img-body">
              <img
                className="card-img"
                src={props.postData.image}
                alt="imagen de post"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title text-capitalize text-dark">
                {props.postData.title}
              </h4>
              <p className="text-muted">{moment(props.postData.date).format("D MMM YYYY")}</p>

              <p className="card-text text-dark">{props.postData.text}</p>
              {/* <a href="#" class="btn btn-outline-primary">Primary</a> */}
            </div>

            <button
              className="border-0 bg-transparent "
              onClick={(e) => {
                handleDeletePost(props.postData.id, props.postData.trip);
              }}
            >
              {/* delete btn: */}
              <i className="fa-solid fa-trash-can mb-5 trash-icon"></i> Borrar
              recuerdo
            </button>
          </div>
        </div>
      </div>

      {/* </div> */}
      <hr className="my-4" />
    </>
  );
}

export default DiaryPostItem;
