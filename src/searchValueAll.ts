import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds keys with given value.
 * @param x a map
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValueAll<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T[] {
  var fc = fc||cmp, fm = fm||id;
  var v1 = fm(v, null, x), a = [];
  for(var [k, u] of x) {
    var u1 = fm(u, k, x);
    if(fc(u1, v1)===0) a.push(k);
  }
  return a;
}
export default searchValueAll;
