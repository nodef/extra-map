import type {Entries} from './_types';

/**
 * Fills with given value.
 * @param x a map
 * @param v value
 */
function fill<T, U>(x: Entries<T, U>, v: U): Map<T, U> {
  var a = new Map();
  for(var [k] of x)
    a.set(k, v);
  return a;
}
export default fill;
