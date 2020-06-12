import type {Entries} from './_types';

/**
 * Combines entries from maps, preferring last.
 * @param x a maps (updated)
 * @param ys other maps
 * @returns x
 */
function concat$<T, U>(x: Map<T, U>, ...ys: Entries<T, U>[]): Map<T, U> {
  for(var y of ys) {
    for(var [k, v] of y)
      x.set(k, v);
  }
  return x;
}
export default concat$;
