function equal(ma, mb) {
  if(ma.size!==mb.size) return false;
  for(var [k, v] of ma)
    if(mb.get(k)!==v) return false;
  return true;
};
module.exports = equal;
