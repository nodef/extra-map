import drop from './drop';

/**
 * Gets object without the first entry.
 * @param x an object
 */
function tail(x: object): object {
  return drop(x, 1);
}
export default tail;
