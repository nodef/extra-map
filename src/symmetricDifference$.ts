import type {Entries} from './_types';

/**
 * Gives entries not present in both maps.
 * @param x a map (updated)
 * @param y another map
 * @returns x
 */
function symmetricDifference$<T, U>(x: Map<T, U>, y: Entries<T, U>): Map<T, U> {
  for(var [k, v] of y) {
    if(x.has(k)) x.delete(k);
    else x.set(k, v);
  }
  return x;
}
export default symmetricDifference$;
