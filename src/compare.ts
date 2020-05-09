import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Compares two maps.
 * @param x a map
 * @param y another map
 * @param fn compare function (a, b)
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
function compare<K, V>(x: Map<K, V>, y: Map<K, V>, fn: compareFn<V>=null): number {
  var fn = fn||cmp;
  var n = x.size - y.size;
  if(n!==0) return Math.sign(n);
  for(var [k, v] of x) {
    var c = y.has(k)? fn(v, y.get(k)) : -1;
    if(c!==0) return c;
  }
  return 0;
}
export default compare;
// compare-fn is still used to compare values,
// and not entries, because we dont compare non-matching key
// entries, and also this promotes reuse of esisting compare fns
