function contains(map, ent, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent)
    if(++i>=bgn && i<end && map.get(e[0])!==e[1]) return false;
  return true;
};
module.exports = contains;
