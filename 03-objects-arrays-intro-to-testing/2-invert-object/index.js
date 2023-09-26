/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export const invertObj = (obj) => {
  if (obj === undefined) return;

  const newObj = {};

  for (const key in obj) {
    newObj[obj[key]] = key;
  }

  return newObj;
};
