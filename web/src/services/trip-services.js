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
}

export function uploadPost(id, title, text, date, file) {
  // console.log("woeiiii", title, text, file, date)
  const data = new FormData()
  data.append('title', title)
  data.append('text', text)
  data.append('image', file)
  data.append('date', date)
  return http.post(`/trips/${id}/diaryPost`,data)
}

export function deleteFile(file, id) {
  return http.delete(`/trips/${id}/documents/${file}`)
}

export function deletePost(file, id) {
  return http.delete(`/trips/${id}/diaryPost/${file}`)
}
// export function getFile(id, title) {
//   return http.get(`/trips/${id}/documents`)
// };

export function getDocuments(id) {
  return http.get(`/trips/${id}`);
}

export function getDiaryPosts(id) {
  return http.get(`/trips/${id}`);
}