import type {reduceFn, Entries} from './_types';

/**
 * Reduces values to a single value.
 * @param x a map
 * @param fr reduce function (acc, v, k, x)
 * @param acc initial value
 */
function reduce<T, U, V=U>(x: Entries<T, U>, fr: reduceFn<T, U, U|V>, acc?: U|V): U|V {
  var init = arguments.length <= 2;
  for(var [k, v] of x) {
    if(init) { acc = v; init = false; }
    else acc = fr(acc, v, k, x);
  }
  return acc;
}
export default reduce;
