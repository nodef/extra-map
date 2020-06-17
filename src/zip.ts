import id from './_id';
import unionKeys from './unionKeys';
import {some} from 'extra-iterable';
import type {mapFn, tillFn} from './_types';

/**
 * Combines matching entries from maps.
 * @param xs maps
 * @param fm map function (vs, k)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function zip<T, U, V=U>(xs: Map<T, U>[], fm: mapFn<T, U[], U[]|V>=null, ft: tillFn=null, vd?: U): Map<T, U[]|V> {
  var fm = fm||id, ft = ft||some as tillFn;
  var ks = unionKeys(...xs), a = new Map();
  for(var k of ks) {
    var ds = xs.map(x => !x.has(k));
    if(ft(ds)) break;
    var vs = xs.map(x => !x.has(k)? vd : x.get(k));
    a.set(k, fm(vs, k, null));
  }
  return a;
}
export default zip;
