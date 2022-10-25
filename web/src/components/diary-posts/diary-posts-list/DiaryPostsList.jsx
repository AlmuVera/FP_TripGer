import React, { useState, useEffect } from "react";
import * as tripService from "../../../services/trip-services";
import Section from "../../section/Section";
import DiaryPostItem from "../diary-post-item/DiaryPostItem";

function DiaryPostsList(props) {
  const [diaryPost, setDiaryPosts] = useState([]);
  const [makePostUpdate, setMakePostUpdate] = useState(false);

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
    <div className="">
      {diaryPost
        ? diaryPost.map((diaryPost) => (
            <div key={diaryPost.id} className="col-12">
              <Section title="Recuerdos" icon="images"></Section>

              <DiaryPostItem
                postData={diaryPost}
                setMakePostUpdate={setMakePostUpdate}
              />
            </div>
          ))
        : "Loading..."}
    </div>
  );
}

export default DiaryPostsList;
