import React, { useState, useEffect } from "react";
import * as tripService from "../../../services/trip-services";
import DocumentItem from "../document-item/DocumentItem";

function DocumentList(props) {
  const [docs, setDocs] = useState([]);
  const [makeUpdate, setMakeUpdate] = useState(false)

  useEffect(() => {
    tripService
      .getDocuments(props.docId)
      .then((docs) => {
        //console.log(docs.data.docs);
        setDocs(docs.data.docs);
      })
      .catch((error) => console.error(error));
  }, [props.docId, makeUpdate, props.updateAfterUpload]);

  return (
    <div className="container">
      <div className="">
        {docs
        ? docs.map((doc) => (

          <div key={doc.id} className="col-12">

            <DocumentItem docData={doc} setMakeUpdate={setMakeUpdate} />
          </div>

        ))
      : "Loading..."}

      </div>
    </div>
  );
}

export default DocumentList;
