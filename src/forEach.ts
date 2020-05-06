import type {calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x a map
 * @param fn called function (v, k, x)
 * @param ths this argument
 */
function forEach<K, V>(x: Iterable<[K, V]>, fn: calledFn<K, V>, ths: object=null): void {
  for(var [k, v] of x)
    fn.call(ths, v, k, x);
}
export default forEach;
