import Knex from "knex";

import knexfile from "../../../knexfile.cjs";

const config = knexfile[process.env.NODE_ENV || "production"];

export const knex = Knex(config);