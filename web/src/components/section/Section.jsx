import React from "react";
import "./Section.css"

function Section({ className, title, icon, children }) {
  return (
    <section className={className}>
      <div className="container section-container mt-5">
        <h1 className="m-0 fs-4 fw-light section-header">
          {icon && <i className={`fa fa-${icon} mb-3 ml-3 me-2`} />}
          {title}
        </h1>
        {/* <hr className="mt-0" /> */}
        {children}
      </div>
    </section>
  );
}

Section.defaultProps = {
  className: "",
  icon: undefined,
};

export default Section;
