import { knex } from "../config/db.js";

export const refreshUser = async (uid) => {
  const [result] = await knex("user").where({ uid });
  if (result) {
    result.updated_at = new Date();
    await knex("user").update(result).where({ id: result.id });
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
