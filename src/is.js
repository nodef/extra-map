/**
 * Checks if value is a map.
 * @param {*} v a value
 * @returns {boolean}
 */
function is(v) {
  return v instanceof Map;
}
module.exports = is;
