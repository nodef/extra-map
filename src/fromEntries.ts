import type {Entries} from './_types';

/**
 * Creates map from entries.
 * @param es entries
 */
function fromEntries<T, U>(es: Entries<T, U>): Map<T, U> {
  return new Map(es);
}
export default fromEntries;
