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
                .map(t => `\t${t.palpite}|${t.resultado}`).join("\n")}`
        },
        tentar(palpite) {
            ctx.tentativasRestantes--
        }
    }
    return ctx
}