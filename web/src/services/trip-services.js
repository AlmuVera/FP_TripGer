import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getTrips() {
  return http.get("/trips");
}

export function getTrip(id) {
  return http.get(`/trips/${id}`);
}

export function createTrip(trip) {
  return http.post("/trips", trip)
  .then(res => res.data);
}

export function uploadFile(id, title, file) {
  const data = new FormData()

  data.append('title', title)
  data.append('file', file)
  return http.post(`/trips/${id}/documents`,data)
  // .then(res => res.data);
}