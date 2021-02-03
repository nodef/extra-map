import type {Entries} from "./_types";

/**
 * Gives entries of map not present in another.
 * @param x a map (updated)
 * @param y another map
 * @returns x
 */
function difference$<T, U>(x: Map<T, U>, y: Entries<T, U>): Map<T, U> {
  for(var [k] of y)
    x.delete(k);
  return x;
}
export default difference$;
