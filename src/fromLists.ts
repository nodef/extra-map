/**
 * Creates a map from lists.
 * @param ls lists [keys, values]
 */
function fromLists<K, V>(ls: [Iterable<K>, Iterable<V>]): Map<K, V> {
  var a = new Map<K, V>();
  var ks = ls[0][Symbol.iterator]();
  var vs = ls[1][Symbol.iterator]();
  while(true) {
    var k = ks.next();
    var v = vs.next();
    if(k.done) break;
    a.set(k.value, v.value);
  }
  return a;
};
export default fromLists;
