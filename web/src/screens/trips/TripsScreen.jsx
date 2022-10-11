import React from 'react'
import { Section, TripsList} from '../../components'

function TripsScreen() {
  return (
    <>
    <Section title="Mis viajes" icon="plane">
      <TripsList />
    </Section>
  </>
  )
}

export default TripsScreen