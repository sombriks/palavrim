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

export const syncGames = async (ret) => {
  console.log(ret.data);
};

// migrations

db.version(1).stores({
  users: "uid",
});

db.version(2).stores({
  games: "uid,user_uid",
});
