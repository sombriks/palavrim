import fs from "fs"
import {partida} from "./partida.mjs";

export const palavrim = (idx) => {
    const ctx = {}
    ctx.palavras = fs.readFileSync("palavras.txt")
        .toString().split("\n").filter(p => p.length <= 6)
    // console.log(ctx.palavras)
    let i = parseInt(Math.random() * ctx.palavras.length, 0)
    if (idx) {
        i = idx
    }
    ctx.criarPartida = () => {
        ctx.partida = partida(ctx.palavras, i)
        return ctx
    }
    ctx.jogarNoTerminal = () => {
        return ctx
    }
    return ctx
}
