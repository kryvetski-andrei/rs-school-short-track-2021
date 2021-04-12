/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const min = Math.min(...arr);

  arr.splice(arr.indexOf(min.toString()), 1).join('');

  return parseInt(arr.join(''), 10);
}

module.exports = deleteDigit;
