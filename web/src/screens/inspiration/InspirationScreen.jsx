import React from "react";

function InspirationScreen() {
  return (
    <>
      <div className="row pb-5 mb-4">
        <div className="col-6">
          {/* <!-- Card--> */}
          <div className="card border-0 bg-transparent">
            <div className="card-body p-0">
              <img
                src="https://laverdadnoticias.com/__export/1593975441300/sites/laverdad/img/2020/07/05/barcelona_destinos_turisticos_seguros_covid19.jpg_343228729.jpg"
                alt=""
                className="w-100 card-img-top rounded"
              />
              <div className="pt-2">
                <h5 className="mb-0">Barcelona</h5>
                <p className="mb-0 small text-muted">España</p>
                <p className="mb-3 small text-muted">5 días</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          {/* <!-- Card--> */}
          <div className="card  border-0 bg-transparent">
            <div className="card-body p-0">
              <img
                src="https://a.storyblok.com/f/58806/600x600/395d7a07cf/nyterrytown_stageimage_600x600.jpg"
                alt=""
                className="w-100 card-img-top rounded"
              />
              <div className="pt-2">
                <h5 className="mb-0">New York</h5>
                <p className="mb-0  small text-muted">EEUU</p>
                <p className="mb-3  small text-muted">4 días</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          {/* <!-- Card--> */}
          <div className="card border-0 bg-transparent">
            <div className="card-body p-0">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/59/14/66/caption.jpg?w=300&h=300&s=1"
                alt=""
                className="w-100 card-img-top rounded"
              />
              <div className="pt-2">
                <h5 className="mb-0">Paris</h5>
                <p className="mb-0  small text-muted">Francia</p>
                <p className="mb-3  small text-muted">4 días</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          {/* <!-- Card--> */}
          <div className="card  border-0 bg-transparent">
            <div className="card-body p-0">
              <img
                src="https://www.norwegian.com/globalassets/ip/media/destinations/lisbon/lisbon-600x600.jpg"
                alt=""
                className="w-100 card-img-top rounded"
              />
              <div className="pt-2">
                <h5 className="mb-0">Lisboa</h5>
                <p className="mb-0  small text-muted">Portugal</p>
                <p className="mb-3  small text-muted">5 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InspirationScreen;
