import shift from './shift';

/**
 * Lists all submaps of a map.
 * @param x a map
 * @param n number of entries (-1 => any)
 * @returns ...submaps
 */
function* submaps<K, V>(x: Map<K, V>, n: number=-1): IterableIterator<Map<K, V>> {
  var X = x.size;
  if(n>=X) { if(n==X) yield x; return; }
  if(n===0 || X===0) { yield new Map<K, V>(); return; }
  var [e, y] = shift(x);
  yield* submaps(y as any, n);
  for(var m of submaps(y as any, n-1)) {
    m.set(e[0], e[1]);
    yield m as any;
  }
}  
export default submaps;
