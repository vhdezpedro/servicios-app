import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/api" });

export const getAdmin = (username, password) => {
  return api.post("/admin", {
    username,
    password,
  });
};
