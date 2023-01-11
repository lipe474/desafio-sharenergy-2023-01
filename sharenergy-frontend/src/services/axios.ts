import axios from "axios";

export function getAPIClient() {
  return axios.create({
    baseURL: "http://localhost:3000",
  });
}
