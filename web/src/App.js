// import logo from './logo.svg';

import { NavBar, Footer } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  CreateTripScreen,
  InspirationScreen,
  LoginScreen,
  RegisterScreen,
  TripsScreen,
  InfoScreen,
  TripDetailScreen,
  DocumentsScreen,
  MapaScreen,
  DiaryScreen

} from "./screens";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es')
moment.updateLocale('es',{
  monthsShort:'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_')
  });
  

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
          <Route path="/register" element={<RegisterScreen />} />
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
          <Route path="/:id/documentos" element={<DocumentsScreen/>}/>
          <Route path="/:id/diario-de viaje" element={<DiaryScreen/>}/>



          
          <Route path="/:id/mapa/:city" element={<MapaScreen/>}/>
          <Route path="/:id/diario-de-viaje" element={<DiaryScreen/>}/>
          <Route path="/inspiracion" element={<InspirationScreen />} />
          <Route path="/info" element={<InfoScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
