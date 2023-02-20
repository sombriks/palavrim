export const tentativa = (palavra, palpite) => {
    const ctx = {
        getStatus() {
            return `\t${ctx.palpite}|${ctx.resultado}`;
        },
        acertou() {
            return palavra.toLowerCase() === palpite.toLowerCase()
        }
    }

    return ctx
}