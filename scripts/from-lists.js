function fromLists(lst) {
  var vi = lst[1][Symbol.iterator](), z = new Map();
  for(var k of lst[0])
    z.set(k ,vi.next().value);
  return z;
};
module.exports = fromLists;
