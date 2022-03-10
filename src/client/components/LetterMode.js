/**
 * 
 * @param {@type Array} letters 
 * @param {@type Array} guesses 
 * @returns {@type Array}
 */
export const letterMode = (letters, guesses) => {
  const modes = [];
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == guesses[i]) {
      modes.push("match");
    } else {
      const len = letters.filter((l) => l == guesses[i]).length;
      if (len > 1) {
        modes.push("doubles");
      } else if (len) {
        modes.push("exists");
      } else {
        modes.push("none");
      }
    }
  }
  return modes;
};
