// import logo from './logo.svg';

import { NavBar, Footer } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  CreateTripScreen,
  InspirationScreen,
  LoginScreen,
  TripsScreen,
  InfoScreen,
  TripDetailScreen
} from "./screens";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function AuthPermition({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  return (
    <>
      <NavBar />

      <div className="container my-4">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/crear-viaje"
            element={
              <AuthPermition>
                <CreateTripScreen />
              </AuthPermition>
            }
          />
          <Route path="/mis-viajes" element={<TripsScreen />} />
          <Route path="/:id" element={<TripDetailScreen />}/>
          <Route path="/inspiracion" element={<InspirationScreen />} />
          <Route path="/info" element={<InfoScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
