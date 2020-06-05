import type {Entries} from './_types';

/**
 * Creates a map from entries.
 * @param es entries
 */
function from<T, U>(es: Entries<T, U>): Map<T, U> {
  return new Map<T, U>(es);
}
export default from;
