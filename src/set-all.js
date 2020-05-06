function setAll(map, ent, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var [k, v] of ent)
    if(++i>=bgn && i<end) map.set(k, v);
  return map;
};
module.exports = setAll;
