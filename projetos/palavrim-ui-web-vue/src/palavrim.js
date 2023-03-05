export const newMatch = (wordList = [], maxAttempts = 8) => {

    const match = {
        maxAttempts,
        wordList,
        word: wordList[parseInt(`${wordList.length * Math.random()}`)],
        guesses: [],
        victory: false,
        finished: false
    }

    return match
}

export const newGuess = ({ word, wordList }, guess) => {
    guess = guess.trim().toUpperCase()
    word = word.trim().toUpperCase()

    if (word.length != guess.length)
        throw new Error("incorrect guess size")
    if (!wordList.find(w => w.toUpperCase() === guess))
        throw new Error("word not present in word list")

    const status = []
    const letters = guess.split("")
    const secret = word.split("")

    let i = letters.length
    while (i-- > 0) {
        const letter = letters[i]
        if (letters[i] == secret[i])
            status.unshift({ letter, exactMatch: true })
        else if (secret.indexOf(letters[i]) > -1)
            status.unshift({ letter, letterPresent: true })
        else
            status.unshift({ letter, letterNotPresent: true })
    }
    return { word, guess, status }
}

export const isVictory = (match) =>
    match.guesses.filter(g => g.word === g.guess).length > 0


export const isFinished = (match) =>
    match.guesses.length === match.maxAttempts
