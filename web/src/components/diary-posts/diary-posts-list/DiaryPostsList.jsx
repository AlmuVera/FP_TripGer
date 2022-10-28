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

  const diarySort = (property) => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a, b) => {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  return (
    <div className="">
      {diaryPost.length !== 0 ? <Section title="Recuerdos" icon="images"></Section> : null}
      {diaryPost
        ? diaryPost.sort(diarySort("date")).map((diaryPost) => (
            <div key={diaryPost.id} className="col-12">
              

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
