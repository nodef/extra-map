import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds smallest and largest entries.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [smallest, largest]
 */
function range<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [[T, U], [T, U]] {
  var fc = fc||cmp, fm = fm||id;
  var mk: T, mu: U, mv: U|V;
  var nk: T, nu: U, nv: U|V;
  var i = 0;
  for(var [k, u] of x) {
    var v = fm(u, k, x);
    if(i===0 || fc(v, mv)<0) { mk = k; mu = u; mv = v; }
    if(i===0 || fc(v, nv)>0) { nk = k; nu = u; nv = v; }
    i++;
  }
  return [[mk, mu], [nk, nu]];
}
export default range;
