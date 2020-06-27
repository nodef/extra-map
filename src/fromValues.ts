import id from './_id';
import {from$} from 'extra-array';
import type {arrayMapFn} from './_types';

function fromValuesArray<T, U=T>(vs: T[], fm: arrayMapFn<T, T|U>) {
  var a = new Map(), ks = vs.map(fm);
  for(var i=0, I=vs.length; i<I; i++)
    a.set(ks[i], vs[i]);
  return a;
}

/**
 * Creates a map from values.
 * @param vs values
 * @param fm map function (v, i, x)
 */
function fromValues<T, U=T>(vs: Iterable<T>, fm: arrayMapFn<T, T|U>=null) {
  return fromValuesArray(from$(vs), fm||id);
}
export default fromValues;
