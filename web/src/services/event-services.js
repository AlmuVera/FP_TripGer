import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getEventsFromCity(city) {
  return http.get(`/events/${city}`);
}