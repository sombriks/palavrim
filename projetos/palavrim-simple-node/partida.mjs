import {tentativa} from "./tentativa.mjs";

export const partida = (palavras, idx) => {
    if (!palavras[idx]) throw new Error("índice inválido")
    const ctx = {
        palavra: palavras[idx],
        mascara: palavras[idx].replace(/./g, "*"),
        tentativas: [],
        tentativasRestantes: 8,
        resolvida() {
            return ctx.tentativas.filter(t => t.acertou()).length > 0
        },
        getStatus() {
            return `status:\n\t${ctx.mascara}\ntentativas:\n${ctx.tentativas
                .map(t => t.getStatus()).join("\n")}`
        },
        tentar(palpite) {
            // palavras que não estão na lista não contam como tentativa
            if (!palavras.find(t => t === palpite))
                throw new Error("Palavra não existe")
            const ten = tentativa(ctx.palavra, palpite)
            // também vamos relevar palpites inválidos
            if (ctx.tentativasRestantes >= 1)
                ctx.tentativasRestantes--
            else
                throw new Error("Sem tentativas restantes")
            // guarda a tentativa
            ctx.tentativas.push(ten)
            // atualiza a mascara
            // devolve a tentativa
        }
    }
    return ctx
}