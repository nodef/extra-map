import difference$ from './difference$';
import type {Entries} from './_types';

/**
 * Gives entries of map not present in another.
 * @param x a map
 * @param y another map
 */
function difference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Map<T, U> {
  return difference$(new Map(x), y);
}
export default difference;
