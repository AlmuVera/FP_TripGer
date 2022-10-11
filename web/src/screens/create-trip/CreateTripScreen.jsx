import React from 'react'
import { Section, TripForm } from '../../components'

function CreateTripScreen() {
  return (
    <>
      <Section title="Empieza tu viaje" icon="plus">
        <TripForm />
      </Section>
    </>
  )
}

export default CreateTripScreen