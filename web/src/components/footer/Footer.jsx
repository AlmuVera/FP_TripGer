import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="container pt-1 ">
        <section className="mb-2">
          <a
            className="btn btn-link btn-floating btn-lg text-dark"
            href="https://www.linkedin.com/in/almudena-vigara-vera/"
            role="button"
            target="blank"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark "
            href="https://github.com/AlmuVera/FP_Tripger"
            role="button"
            target="blank"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
          <hr />
        </section>
      </div>
    
      <div
        className="text-center text-dark pb-4" 
      >
        © 2022: Almudena Vigara Vera
      </div>
    </footer>
  );
}

export default Footer;
