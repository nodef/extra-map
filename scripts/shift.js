function shift(map) {
  var z = null;
  for(var e of map) {
    map.delete(e[0]);
    z = e;
    break;
  }
  return z;
};
module.exports = shift;
