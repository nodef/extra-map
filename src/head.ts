import type {Entries} from './_types';

/**
 * Gets first entry.
 * @param x a map
 */
function head<T, U>(x: Entries<T, U>): [T, U] {
  for(var [k, v] of x)
    return [k, v];
  return [undefined, undefined];
}
export default head;
