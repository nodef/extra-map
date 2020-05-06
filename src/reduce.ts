import type {reduceFn} from './_types';

/**
 * Reduce all values to one value.
 * @param x a map
 * @param fn reduce function (acc, v, k, x)
 * @param acc initial value
 */
function reduce<K, V, W>(x: Iterable<[K, V]>, fn: reduceFn<K, V, W>, acc?: W) {
  var init = arguments.length <= 2;
  for(var [k, v] of x) {
    if(init) { init = false; acc = v as any as W; }
    else acc = fn(acc, v, k, x);
  }
  return acc;
}
export default reduce;
