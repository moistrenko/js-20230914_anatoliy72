/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export const uniq = (arr) => {
  if (!arr) return [];

  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
};
