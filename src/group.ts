import head from './head';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Breaks map keeping similar values together.
 * @param x a map
 * @param fn compare function (a, b)
 */
function group<K, V>(x: Iterable<[K, V]>, fn: compareFn<V>=null): Map<K, V>[] {
  var fn = fn||cmp;
  var a = [], [, u] = head(x);
  var b = new Map<K, V>();
  for(var [k, v] of x) {
    if(fn(u, v)===0) b.set(k, v);
    else { a.push(b); b = new Map<K, V>([[k, v]]); }
    u = v;
  }
  a.push(b);
  return a;
}
export default group;
