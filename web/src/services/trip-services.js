import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getTrips() {
  return http.get("/trips");
}

export function getTrip(id) {
  // TODO
}

export function createTrip(trip) {
  return http.post("/trips", trip);
}