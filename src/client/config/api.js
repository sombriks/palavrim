import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const saveUser = (user) => api.post("/user", user);

export const getGamesFromUser = ({ data: { uid } }) =>
  api.get("/games?uid=" + uid);

export const createGame = (info) => api.post("/game", info);

export const getGame = (uid) => api.get("/game/" + uid);

export const getResults = ({ game_uid, user_uid }) =>
  api.get("/results", { params: { game_uid, user_uid } });

export const saveResult = (result) => api.post("/result", result);
