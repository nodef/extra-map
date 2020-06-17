import type {Entries} from './_types';

/**
 * Creates map from entries.
 * @param es entries (updatable if map)
 */
function from$<T, U>(es: Entries<T, U>): Map<T, U> {
  return es instanceof Map? es : new Map(es);
}
export default from$;
