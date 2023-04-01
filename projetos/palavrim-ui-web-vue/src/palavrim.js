/**
 * palavrim core adapted from node version.
 *
 * key differences are the heavy dependency on vue3 reactivity and a more
 * state-specific configuration here.
 *
 * most heavy-lifting being made in a reactive way, code here focus on provide a
 * valid state for the game.
 */

import wordList from '@/assets/words'

export const todayIs = () =>
  new Date().toISOString().toString().split("T")[0]

export const loadPalavrim = () => {
  let palavrim = localStorage.getItem("palavrim")
  if (palavrim) {
    try {
      palavrim = JSON.parse(palavrim)
    } catch (e) {
      console.warn("corrupt state", e)
      palavrim = {matches: {}}
    }
  } else palavrim = {matches: {}}
  return palavrim
}

export const newMatch = (createdAt = todayIs(), maxAttempts = 8) => {

  const match = {
    maxAttempts,
    word: wordList[parseInt(`${wordList.length * Math.random()}`)],
    guesses: [],
    victory: false,
    finished: false
  }

  return match
}

export const getCurrentMatch = () => {
  let today = todayIs()
  let palavrim = loadPalavrim()

  if (palavrim.matches[today]) return palavrim.matches[today]
  // else
  palavrim.matches[today] = newMatch(today)
  localStorage.setItem("palavrim", JSON.stringify(palavrim))

  return palavrim.matches[today]
}

export const saveCurrentMatch = (match) => {
  match.createdAt ??= todayIs()
  let palavrim = loadPalavrim()

  palavrim.matches[match.createdAt] = match

  localStorage.setItem("palavrim", JSON.stringify(palavrim))
}

export const newGuess = ({word}, guess) => {
  guess = guess.trim().toUpperCase()
  word = word.trim().toUpperCase()

  if (word.length != guess.length)
    throw new Error("palavra de tamanho errado")
  if (!wordList.find(w => w.toUpperCase() === guess))
    throw new Error(`plavra ${guess} não existe na lista de palavras aceitas`)

  const status = []
  const letters = guess.split("")
  const secret = word.split("")

  let i = letters.length
  while (i-- > 0) {
    const letter = letters[i]
    if (letters[i] == secret[i])
      status.unshift({letter, exactMatch: true})
    else if (secret.indexOf(letters[i]) > -1)
      status.unshift({letter, letterPresent: true})
    else
      status.unshift({letter, letterNotPresent: true})
  }
  return {word, guess, status}
}

export const getLetterColor = (status) => {
  if (status?.exactMatch) return "var(--match)"
  if (status?.letterPresent) return "var(--present)"
  if (status?.letterNotPresent) return "var(--notpresent)"
  return "var(--blank)"
}

export const isVictory = (match) =>
  match.guesses.filter(g => g.word === g.guess).length > 0

export const isFinished = (match) =>
  match.guesses.length === match.maxAttempts

export const shareMatch = (match) => {
  return match.guesses.map(g => `${g.status.map(s => {
    if (s?.exactMatch) return "🟩"
    if (s?.letterPresent) return "🟧";
    if (s?.letterNotPresent) return "🟥"
    return "⬜";
  }).join("")}` + "\n").join("")
}