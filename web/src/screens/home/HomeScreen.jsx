import React from "react";
import { Link } from "react-router-dom";
import { Section, TripsList } from "../../components";
import InspirationScreen from "../inspiration/InspirationScreen";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <>
      <div className="form-bg">
        <div className="container">
          <div className="row">
            <Link to="/crear-viaje" type="button">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 m-auto pt-3 ">
                <div className="tab-plus mt-5 ">
                  <div className="tab-content tabs  ">
                    <h3 className="fw-light text-center">Comienza tu viaje</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Section title="Proximos viajes" icon="plane">
        <TripsList />
      </Section>

      <Section
        id="section-inpiration"
        title="Busca inspiración"
        icon="lightbulb"
      >
        <InspirationScreen />
      </Section>
    </>
  );
}

export default HomeScreen;
