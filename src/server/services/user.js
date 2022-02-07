import { knex } from "../config/db.js";

export const refreshUser = async (uid) => {
  const [result] = await knex("user").where({ uid });
  if (result) {
    return result;
  } else {
    await knex("user").insert({
      uid,
      created_at: new Date(),
      updated_at: new Date(),
    });
    const [newUser] = await knex("user").where({ uid });
    return newUser;
  }
};
