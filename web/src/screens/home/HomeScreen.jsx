import React from "react";
import { Link } from "react-router-dom";
import { Section, TripsList } from "../../components";
import InspirationScreen from "../inspiration/InspirationScreen";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <>
      <div className="text-center mb-3">
        <Link
          to="/crear-viaje"
          type="button"
          className="btn-circle btn-xl"
        >
          <h3 className="fw-light h3-style">Empieza tu viaje</h3>
          <i className="fa-solid fa-circle-plus btn-plus mt-2"></i>
        </Link>
      </div>
     

      <Section title="Proximos viajes" icon="plane">
        <TripsList />
      </Section>

      <Section id="section-inpiration" title="Busca inspiración" icon="lightbulb">
        <InspirationScreen/>
      </Section>
    </>
  );
}

export default HomeScreen;
