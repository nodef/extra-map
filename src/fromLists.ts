import type {Lists} from "./_types";

/**
 * Creates map from lists.
 * @param ls lists, i.e. [keys, values]
 */
function fromLists<T, U>(ls: Lists<T, U>): Map<T, U> {
  var [ks, vs] = ls, vi = vs[Symbol.iterator]();
  var a = new Map();
  for(var k of ks)
    a.set(k, vi.next().value);
  return a;
}
export default fromLists;
