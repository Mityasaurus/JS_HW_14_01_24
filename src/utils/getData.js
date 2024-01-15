import { BASE_URL } from "../constants/json-server.js";

export default function getDataFromServer(path) {
  return fetch(`${BASE_URL}/${path}`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
}
