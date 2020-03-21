function deleteAll(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) map.delete(k);
  return map;
};
module.exports = deleteAll;
