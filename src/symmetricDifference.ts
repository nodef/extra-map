import unionKeys from './unionKeys';

/**
 * Gives entries not present in both maps.
 * @param x a map
 * @param y another map
 */
function symmetricDifference<T, U>(x: Map<T, U>, y: Map<T, U>): Map<T, U> {
  var ks = unionKeys(x, y), a = new Map();
  for(var k of ks) {
    var xk = x.has(k);
    var yk = y.has(k);
    if(xk && !yk) a.set(k, x.get(k));
    else if(!xk && yk) a.set(k, y.get(k));
  }
  return a;
}
export default symmetricDifference;
