/**
 * Appends a string to each value in an array.
 *
 * @param {Array} array - The array to modify.
 * @param {string} appendString - The string to append.
 * @returns {Array} The modified array.
 */
export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, value] of array.entries()) {
    array[idx] = appendString + value;
  }

  return array;
}
