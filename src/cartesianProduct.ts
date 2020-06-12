import id from './_id';
import type {mapFn} from './_types';

/**
 * Lists cartesian product of maps.
 * @param xs maps
 * @param fn map function (v)
 */
function* cartesianProduct<T, U, V=U>(xs: Map<T, U>[], fn: mapFn<T, Map<T, U>, Map<T, U>|V>=null): IterableIterator<Map<T, U>|V> {
  var fn = fn||id;
  var XS  = xs.length;
  var kss = xs.map(x => [...x.keys()]);
  var ls = kss.map(ks => ks.length);
  var is = kss.map(ks => 0);
  while(true) {
    var a = new Map<T, U>();
    for(var n=0; n<XS; n++) {
      var i  = is[n],  x = xs[n];
      var ks = kss[n], k = ks[i];
      a.set(k, x.get(k));
    }
    yield fn(a, null, null);
    for(var r=XS-1; r>=0; r--) {
      is[r]++;
      if(is[r]<ls[r]) break;
      is[r] = 0;
    }
    if(r<0) break;
  }
}
export default cartesianProduct;
