/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export const createGetter = (path) => {
  const pathArray = path.split(".");

  return (obj) => {
    let result;

    pathArray.forEach((item) => {
      if (!result) {
        result = obj[item];
      } else {
        result = result[item];
      }
    });
    return result;
  };
};
