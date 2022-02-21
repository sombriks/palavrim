import { uid as UID } from "uid";
import { knex } from "../config/db.js";

export const saveResult = async ({ user_uid, game_uid, guess, is_correct }) => {
  const [user] = await knex("user").where({ uid: user_uid });
  const [game] = await knex("game").where({ uid: game_uid });
  const [id] = await knex("result").insert({
    uid: UID(32),
    user_id: user.id,
    game_id: game.id,
    guess,
    created_at: new Date(),
    updated_at: new Date(),
    is_correct,
  });
  const [result] = await knex("result").where({ id });
  return result;
};

export const getResults = async ({ user_uid, game_uid }) => {
  const [user] = await knex("user").where({ uid: user_uid });
  const [game] = await knex("game").where({ uid: game_uid });
  return await knex("result").where({ user_id: user.id, game_id: game.id });
};
