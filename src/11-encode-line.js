/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let arr = str.split('');

  for (let i = 1; i < arr.length; i++) {
    if (i === arr.length - 1 && arr[i] === arr[i - 1]) {
      result.push(arr.length);
      result.push(arr[i]);
    }

    if (arr[i] !== arr[i - 1]) {
      if (i !== 1) {
        result.push(i);
      }

      result.push(arr[i - 1]);
      arr = arr.slice(i, arr.length);
      i = 0;

      if (arr.length === 1) {
        result.push(arr[0]);
      }
    }
  }
  return result.map((el) => String(el)).join('');
}

module.exports = encodeLine;
