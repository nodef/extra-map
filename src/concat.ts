import concat$ from './concat$';
import type {Entries} from './_types';

/**
 * Combines entries from maps, preferring last.
 * @param xs maps
 */
function concat<T, U>(...xs: Entries<T, U>[]): Map<T, U> {
  return concat$(new Map(), ...xs);
}
export default concat;
