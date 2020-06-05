import id from './_id';
import cmp from './_cmp';
import type {Entries, compareFn, mapFn} from './_types';

/**
 * Searches a value throughout.
 * @param x a map
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns keys of value
 */
function searchAll<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T[] {
  var fc = fc||cmp, fm = fm||id;
  var v1 = fm(v, null, null), a: T[] = [];
  for(var [k, u] of x) {
    var u1 = fm(u, k, x);
    if(fc(u1, v1)===0) a.push(k);
  }
  return a;
}
export default searchAll;
