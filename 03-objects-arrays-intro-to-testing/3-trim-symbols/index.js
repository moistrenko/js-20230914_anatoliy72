/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */

export const trimSymbols = (string, size) => {
  if (size === undefined) return string;

  let phrase = "";
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (letter !== phrase.at(-1)) {
      count = 1;
    }

    if (count <= size) {
      phrase += letter;
      count++;
    }
  }

  return phrase;
};
