import id from './_id';
import is from './is';
import type {mapFn, testFn, Entries} from './_types';

function flatTo<T>(x: Entries<T, any>, n: number, fm: mapFn<T, any, any>, ft: testFn<T, any>, a: Map<T, any>): Map<T, any> {
  for(var [k, v] of x) {
    var v1 = fm(v, k, x);
    if(n!==0 && ft(v1, k, x)) flatTo(v1, n-1, fm, ft, a);
    else a.set(k, v1);
  }
  return a;
}

/**
 * Flattens nested map to given depth.
 * @param x a nested map
 * @param n maximum depth (-1 => all)
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Entries<T, any>, n: number=-1, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Map<T, any> {
  var fm = fm||id, ft = ft||is;
  return flatTo(x, n, fm, ft, new Map());
}
export default flat;
