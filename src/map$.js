// mapTo() {};

/**
 * Updates values based on map function.
 * @param {Map} x a map (updated)
 * @param {function} fn map function (v, k, x)
 * @param {object?} ths this argument
 * @returns {Map} x
 */
function map$(x, fn, ths=null) {
  for(var [k, v] of x) {
    var v = fn.call(ths, v, k, x);
    x.set(k, v);
  }
  return x;
}
module.exports = map$;
