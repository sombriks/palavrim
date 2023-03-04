export const newGame = (wordlist) => {

    const match = {
        maxAttempts: 8,
        wordlist,
        word: wordlist[parseInt(wordlist.length * Math.random())],
        guesses:[]
    }

    return match
}