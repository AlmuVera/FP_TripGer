// import logo from './logo.svg';

import { NavBar } from "./components";
import { Route, Routes } from "react-router-dom";
import { HomeScreen, CreateTripScreen, InfoScreen, TripsScreen } from "./screens";

function App() {
  return (
    <>
      <NavBar />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/crear-viaje" element={<CreateTripScreen />} />
          <Route path="/mis-viajes" element={<TripsScreen />} />
          <Route path="/info" element={<InfoScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


