/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export const sortStrings = (arr, param = "asc") => {
  const collator = new Intl.Collator("ru", { caseFirst: "upper" });
  const sortArray = [...arr].sort((a, b) => collator.compare(a, b));

  return param === "asc" ? sortArray : sortArray.reverse();
};
