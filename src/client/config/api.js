import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const saveUser = (user) => api.post("/user", user);

export const getGames = ({ data: { uid } }) => api.get("/games?uid=" + uid);
