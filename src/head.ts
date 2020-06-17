import {head as iterableHead} from 'extra-iterable';
import type {Entries} from './_types';

/**
 * Gets first entry.
 * @param x a map
 */
function head<T, U>(x: Entries<T, U>, ed: [T, U]=[] as any): [T, U] {
  return iterableHead(x, ed);
}
export default head;
