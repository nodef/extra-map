/**
 * Gets unique set of values.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function tomaps<K, V>(xs: Iterable<[K, V]>[]): Map<K, V>[] {
  var a = [];
  for(var x of xs)
    a.push(x instanceof Map? x : new Map(x));
  return a;
} 
export default tomaps;
