// import React from 'react'

// function DiaryPostsList() {
//   return (
//     <div>DiaryPostsList</div>
//   )
// }

// export default DiaryPostsList

import React, { useState, useEffect } from "react";
import * as tripService from "../../../services/trip-services";
import DiaryPostItem from "../diary-post-item/DiaryPostItem";

function DiaryPostsList(props) {
  const [diaryPost, setDiaryPosts] = useState([]);
  const [makePostUpdate, setMakePostUpdate] = useState(false)

  useEffect(() => {
    tripService
      .getDiaryPosts(props.diaryPostId)
      .then((diaryPost) => {
        console.log(diaryPost.data.diaryPost);
        setDiaryPosts(diaryPost.data.diaryPost);
      })
      .catch((error) => console.error(error));
  }, [props.diaryPostId, makePostUpdate, props.refreshAfterUpload]);

  return (
    <div className="container">
      <div className="">
        {diaryPost
        ? diaryPost.map((diaryPost) => (

          <div key={diaryPost.id} className="col-12">

            <DiaryPostItem postData={diaryPost} setMakePostUpdate={setMakePostUpdate} />
          </div>

        ))
      : "Loading..."}

      </div>
    </div>
  );
}

export default DiaryPostsList;
