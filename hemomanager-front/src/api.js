import axios from "axios";

export const api = axios.create({
  baseURL:  "https://hemomanager-backend.azurewebsites.net/",
});
