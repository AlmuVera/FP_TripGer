import React from "react";
import { Link } from "react-router-dom";
import { Section, TripsList } from "../../components";
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
          <i className="fa-solid fa-circle-plus btn-plus"></i>
        </Link>
      </div>
     

      <Section title="Proximos viajes" icon="plane">
        <TripsList />
      </Section>
      <Section title="Busca inspiración" icon="lightbulb">
        
      </Section>
    </>
  );
}

export default HomeScreen;
