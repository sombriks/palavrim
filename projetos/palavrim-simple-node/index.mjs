import {palavrim} from "./palavrim.mjs";

palavrim(process.argv[2])
    .criarPartida()
    .jogarNoTerminal();