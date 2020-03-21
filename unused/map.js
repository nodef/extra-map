function mapTo(map, fn, ths, z=new Map()) {
  for(var e of map)
    z.set(e[0], fn.call(ths, e[1], e[0], map));
  return z;
};
module.exports = mapTo;
