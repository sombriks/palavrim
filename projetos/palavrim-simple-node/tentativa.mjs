export const tentativa = (palavra, palpite) => {
    if(!palpite)
        throw new Error("Informe uma palavra válida!")
    if(palpite.length != palavra.length)
        throw new Error("Palavra de tamanho incorreto!")
    const ctx = {
        getStatus() {
            return `\t${ctx.palpite}|${ctx.resultado}`;
        },
        acertou() {
            return palavra.toLowerCase() === palpite.toLowerCase()
        }
    }

    ctx.papavra = palavra
    ctx.palpite = palpite
    ctx.resultado = ""

    for (let i = 0; i < palavra.length; i++) {
        if(palavra[i] == palpite[i]) ctx.resultado += "#"
        else if(palavra.indexOf(palpite[i]) > -1) ctx.resultado += "$"
        else ctx.resultado += "*"
    }

    return ctx
}
