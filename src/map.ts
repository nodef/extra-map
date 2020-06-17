import type {Entries, mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x a map
 * @param fm map function (v, k, x)
 */
function map<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<T, U|V> {
  var a = new Map();
  for(var [k, v] of x)
    a.set(k, fm(v, k, x));
  return a;
}
export default map;
