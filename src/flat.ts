import is from './is';
import type {testFn, Entries} from './_types';

function flatTo<T>(x: Entries<T, any>, n: number, ft: testFn<T, any>, a: Map<T, any>): Map<T, any> {
  for(var [k, v] of x) {
    if(n!==0 && ft(v, k, x)) flatTo(v, n-1, ft, a);
    else a.set(k, v);
  }
  return a;
}

/**
 * Flattens nested map to given depth.
 * @param x a nested map
 * @param n maximum depth (-1 => all)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Entries<T, any>, n: number=-1, ft: testFn<T, any>=null): Map<T, any> {
  return flatTo(x, n, ft||is, new Map());
}
export default flat;
