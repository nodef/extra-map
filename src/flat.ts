import is from './is';

function flatTo<K>(x: Iterable<[K, any]>, dep: number, a: Map<K, any>): Map<K, any> {
  for(var [k, v] of x) {
    if(dep!==0 && is(v)) flatTo(v, dep-1, a);
    else a.set(k, v);
  }
  return a;
}

/**
 * Flattens nested map to given depth.
 * @param x a nested map
 * @param dep maximum depth (-1)
 */
function flat<K>(x: Iterable<[K, any]>, dep: number=-1): Map<K, any> {
  return flatTo(x, dep, new Map<K, any>());
}
export default flat;
