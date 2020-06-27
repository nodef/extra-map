import is from './is';

/**
 * Gets value at path in a nested map.
 * @param x a map
 * @param p path
 */
function getPath<T>(x: Map<T, any>, p: T[]): any {
  for(var k of p)
    x = is(x)? x.get(k) : undefined;
  return x;
}
export default getPath;
