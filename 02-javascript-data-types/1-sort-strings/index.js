/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const collator = new Intl.Collator("ru", { caseFirst: "upper" });

export const sortStrings = (arr, param = "asc") => {
  const sortArray = [...arr].sort((a, b) => {
    if (param === "asc") {
      return collator.compare(a, b);
    }

    return collator.compare(b, a);
  });

  return sortArray;
};
