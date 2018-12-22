function pickValues(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) z[z0++] = map.get(k);
  return z;
};
module.exports = pickValues;
