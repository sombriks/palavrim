import fs from "fs"
import {partida} from "./partida.mjs";
import {leia} from "./leia.mjs";

export const palavrim = (idx) => {
    const ctx = {
        palavras: fs.readFileSync("palavras.txt")
            .toString()
            .split("\n")
            .filter(p => p.length <= 6) // TODO tornar configurável?
            .map(p => p.trim())
    }
    console.info(`Tem ${ctx.palavras.length} palavras disponíveis`)
    let i = parseInt(Math.random() * ctx.palavras.length, 0)
    if (idx) {
        i = idx
    }
    ctx.criarPartida = () => {
        ctx.partida = partida(ctx.palavras, i)
        return ctx
    }
    ctx.jogarNoTerminal = async () => {
        while (!ctx.partida.resolvida()
        && ctx.partida.tentativasRestantes > 0) {
            console.log(ctx.partida.getStatus())
            let palpite = await leia("Qual a próxima tentativa?")
            try {
                ctx.partida.tentar(palpite)
            } catch (e) {
                console.log(e.message)
            }
            console.log(`Restam ${ctx.partida.tentativasRestantes} tentativas\n\n`)
        }
        if (ctx.partida.resolvida())
            console.log(`Você acertou a palavra em ${ctx.partida.tentativas.length} tentativas, parabéns!\n`)
        else
            console.log("Suas chances acabaram, a palavra era " + ctx.partida.palavra + "\n")
        console.log(ctx.partida.getStatus())
        return ctx
    }
    return ctx
}
