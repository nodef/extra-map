import id from './_id';
import is from './is';
import concat$ from './concat$';
import type {mapFn, testFn, Entries} from './_types';

/**
 * Flattens nested map, using map function.
 * @param x a nested map
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flatMap<T>(x: Entries<T, any>, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Map<T, any> {
  var fm = fm||id, ft = ft||is;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fm(v, k, x);
    if(ft(v1, k, x)) concat$(a, v1);
    else a.set(k, v1);
  }
  return a;
}
export default flatMap;
