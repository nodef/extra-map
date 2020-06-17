import id from './_id';
import type {mapFn} from './_types';

/**
 * Lists cartesian product of maps.
 * @param xs maps
 * @param fm map function (vs, i)
 */
function* cartesianProduct<T, U, V=Map<T, U>>(xs: Map<T, U>[], fm: mapFn<number, Map<T, U>, Map<T, U>|V>=null): IterableIterator<Map<T, U>|V> {
  var fm = fm||id;
  var XS  = xs.length;
  var kss = xs.map(x => [...x.keys()]);
  var ls = kss.map(ks => ks.length);
  var is = kss.map(ks => 0);
  for(var j=0;; j++) {
    var a = new Map<T, U>();
    for(var n=0; n<XS; n++) {
      var i  = is[n],  x = xs[n];
      var ks = kss[n], k = ks[i];
      a.set(k, x.get(k));
    }
    yield fm(a, j, null);
    for(var r=XS-1; r>=0; r--) {
      is[r]++;
      if(is[r]<ls[r]) break;
      is[r] = 0;
    }
    if(r<0) break;
  }
}
export default cartesianProduct;
