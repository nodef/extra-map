import type {Entries, mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function map<T, U, V>(x: Entries<T, U>, fn: mapFn<T, U, U|V>, ths: object=null): Map<T, U|V> {
  var a = new Map();
  for(var [k, v] of x)
    a.set(k, fn.call(ths, v, k, x));
  return a;
}
export default map;
