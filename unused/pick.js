function pick(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=new Map()) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) z.set(k, map.get(k));
  return z;
};
module.exports = pick;
