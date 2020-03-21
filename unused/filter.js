function same(map, fn, ths) {
  for(var e of map)
    if(!fn.call(ths, e[1], e[0], map)) map.delete(e[0]);
  return map;
};
function filterTo(map, fn, ths, z=new Map()) {
  if(z===map) return same(map, fn, ths);
  for(var e of map)
    if(fn.call(ths, e[1], e[0], map)) z.set(e[0], e[1]);
  return z;
};
module.exports = filterTo;
