import React from "react";
import { Section, TripForm, TripsList } from "../../components";

function HomeScreen() {
  return (
    <>
      <Section title="Empieza tu viaje" icon="plus">
        <TripForm />
      </Section>

      <Section title="Proximos viajes" icon="plane">
        <TripsList />
      </Section>
      <Section title="Busca inspiración" icon="lightbulb">
        {/* <TripForm /> */}
      </Section>
    </>
  );
}

export default HomeScreen;
