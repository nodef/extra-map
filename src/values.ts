import type {Entries} from './_types';

/**
 * Lists all values.
 * @param x a map
 */
function* values<T, U>(x: Entries<T, U>): IterableIterator<U> {
  for(var [, v] of x)
    yield v;
}
export default values;
