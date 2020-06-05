import type {Lists} from './_types';

/**
 * Creates a map from lists.
 * @param ls lists
 */
function fromLists<T, U>(ls: Lists<T, U>): Map<T, U> {
  var [ks, vs] = ls, ki = ks[Symbol.iterator]();
  var a = new Map();
  for(var v of vs) {
    var k = ki.next().value;
    a.set(k, v);
  }
  return a;
}
export default fromLists;
