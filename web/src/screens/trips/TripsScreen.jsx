import React from 'react'
import { Section, TripsList} from '../../components'

function TripsScreen() {
  return (
    <>
    <Section title="Mis viajes" icon="plane">
      <TripsList tripFilter={"en "} />
    </Section>
  </>
  )
}

export default TripsScreen