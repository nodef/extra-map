import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x a map (updated)
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns x
 */
function map$<T, U>(x: Map<T, U>, fn: mapFn<T, U, U>, ths: object=null): Map<T, U> {
  for(var [k, v] of x)
    x.set(k, fn.call(ths, v, k, x));
  return x;
}
export default map$;
