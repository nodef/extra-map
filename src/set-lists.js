function setLists(map, lst, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var vi = lst[1][Symbol.iterator](), i = -1;
  for(var k of lst[0])
    if(++i>=bgn && i<end) map.set(k, vi.next().value);
  return map;
};
module.exports = setLists;
