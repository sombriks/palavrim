import { uid as UID } from "uid";
import { knex } from "../config/db.js";

export const gamesFromUser = async (uid) => {
  const [{ id }, ...rest] = await knex("user").select("id").where({ uid });
  return await knex("game").where("user_id", id);
};

export const newGame = async ({ uid, word }) => {
  const [user] = await knex("user").where({ uid });
  const [id] = await knex("game").insert({
    word,
    uid: UID(32),
    user_id: user.id,
    created_at: new Date(),
    updated_at: new Date(),
  });
  const [game] = await knex("game").where({ id });
  return game;
};

export const getGame = async (uid) => {
  const [game] = await knex("game").where({ uid });
  return game;
};
