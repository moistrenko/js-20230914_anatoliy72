/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export const createGetter = (path) => {
  const pathArray = path.split(".");

  return (obj) => {
    let result = obj;

    for (let value of pathArray) {
      if (!(value in result)) return;

      result = result[value];
    }

    return result;
  };
};
