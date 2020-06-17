import type {calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x a map
 * @param fc called function (v, k, x)
 */
function forEach<T, U>(x: Iterable<[T, U]>, fc: calledFn<T, U>): void {
  for(var [k, v] of x)
    fc(v, k, x);
}
export default forEach;
