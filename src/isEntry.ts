import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

/**
 * Checks if map has an entry.
 * @param x a map
 * @param e entry?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEntry<T, U, V=U>(x: Map<T, U>, e: [T, U], fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  var fc = fc||cmp, fm = fm||id, [k, v] = e;
  return x.has(k) && fc(fm(x.get(k), k, x), v)===0;
}
export default isEntry;
