import swap$ from './swap$';
import type {Entries} from './_types';

/**
 * Exchanges two values.
 * @param x a map
 * @param k a key
 * @param l another key
 */
function swap<T, U>(x: Entries<T, U>, k: T, l: T): Map<T, U> {
  return swap$(new Map(x), k, l);
}
export default swap;
