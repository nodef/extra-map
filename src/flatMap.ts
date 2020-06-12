import id from './_id';
import is from './is';
import concat$ from './concat$';
import type {mapFn, Entries} from './_types';

/**
 * Flattens nested map, using map function.
 * @param x a nested map
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function flatMap<T>(x: Entries<T, any>, fn: mapFn<T, any, any>=null, ths: object=null): Map<T, any> {
  var fn = fn||id;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fn.call(ths, v, k, x);
    if(is(v1)) concat$(a, v1);
    else a.set(k, v1);
  }
  return a;
}
export default flatMap;
