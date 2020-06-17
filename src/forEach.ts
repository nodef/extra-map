import type {calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x a map
 * @param fn called function (v, k, x)
 */
function forEach<T, U>(x: Iterable<[T, U]>, fn: calledFn<T, U>): void {
  for(var [k, v] of x)
    fn(v, k, x);
}
export default forEach;
