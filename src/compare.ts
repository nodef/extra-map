import id from './_id';
import cmp from './_cmp';
import unionKeys from './unionKeys';
import type {compareFn, mapFn} from './_types';

/**
 * Compares two maps.
 * @param x a map
 * @param y another map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
function compare<T, U, V=U>(x: Map<T, U>, y: Map<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): number {
  var fc = fc||cmp, fm = fm||id;
  var ks = unionKeys(x, y);
  for(var k of ks) {
    if(!x.has(k)) return -1;
    if(!y.has(k)) return 1;
    var u = fm(x.get(k), k, x);
    var v = fm(y.get(k), k, y);
    var c = fc(u, v);
    if(c!==0) return c;
  }
  return 0;
}
export default compare;
