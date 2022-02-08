import Dexie from "dexie";
import { uid as UID } from "uid";

export const db = new Dexie("palavrim");

export const checkMyself = async () => {
  let users = await db.users.toArray();
  let uid = UID(32);
  if (!users || !users.length) {
    db.users.add({
      uid,
      myself: true,
    });
  } else {
    uid = users.filter((u) => u.myself)[0].uid;
  }
  return await db.users.where("uid").equals(uid).first();
};

export const findMe = async () =>
  await db.users.filter((u) => u.myself).first();

export const syncGames = async (ret) => {
  await db.games.bulkPut(ret.data);
};

export const saveGame = async ({ data }) => {
  const uid = await db.games.add(data);
  return await db.games.where("uid").equals(uid).first();
};

// migrations

db.version(1).stores({
  users: "uid",
});

db.version(2).stores({
  games: "uid,user_uid",
});
