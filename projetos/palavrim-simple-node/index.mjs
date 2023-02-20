import {palavrim} from "./palavrim.mjs"

const p = palavrim(process.argv[2])
    .criarPartida()
    .jogarNoTerminal()
