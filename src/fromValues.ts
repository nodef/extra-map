import id from './_id';
import type {arrayMapFn} from './_types';

/**
 * Creates a map from values.
 * @param vs values
 * @param fm map function (v, i, x)
 */
function fromValues<T, U=T>(vs: T[], fm: arrayMapFn<T, T|U>=null) {
  var fm = fm||id;
  var a = new Map(), ks = vs.map(fm);
  for(var i=0, I=vs.length; i<I; i++)
    a.set(ks[i], vs[i]);
  return a;
}
export default fromValues;
