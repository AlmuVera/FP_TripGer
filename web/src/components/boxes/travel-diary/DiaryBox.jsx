import React from "react";
import "./DiaryBox.css";

function DiaryBox() {
  return (
    <>
      <div className="">
        <div className="box d-flex flex-column ">
          <i className="fa-solid fa-pen-to-square diary-folder" />
          <h6 className="card-title text-box">Diario de viaje</h6>
        </div>
      </div>
    </>
  );
}

export default DiaryBox;
