import { knex } from "../config/db.js";

export const gamesFromUser = async (uid) => {
  console.log(uid);
  const ids = await knex("user").select("id").where({ uid });
  return await knex("game").whereIn("user_id", ids);
};
