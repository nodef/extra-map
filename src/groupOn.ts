import head from './head';
import id from './_id';
import type {mapFn} from './_types';

/**
 * Breaks map keeping similar values together.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function groupOn<K, V, W>(x: Iterable<[K, V]>, fn: mapFn<K, V, W>=null, ths: object=null): Map<K, V>[] {
  var fn = fn||id;
  var [k, v] = head(x);
  var a = [], u1 = fn.call(ths, v, k, x);;
  var b = new Map<K, V>();
  for(var [k, v] of x) {
    var v1 = fn.call(ths, v, k, x);
    if(u1===v1) b.set(k, v);
    else { a.push(b); b = new Map<K, V>([[k, v]]); }
    u1 = v1;
  }
  a.push(b);
  return a;
}
export default groupOn;
