import type {Lists} from './_types';

/**
 * Creates a map from lists.
 * @param ls lists
 */
function fromLists<T, U>(ls: Lists<T, U>): Map<T, U> {
  var a = new Map<T, U>();
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
