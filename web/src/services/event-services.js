import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getEventsFromCity(city, startDateTime) {
  return http.get(`/events/${city}?startDateTime=${startDateTime.split('.')[0]}Z`);
}