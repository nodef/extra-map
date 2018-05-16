// 0. entries-every (every)
function every(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!fn.call(ths, e[1], e[0], ent)) return false;
  }
  return true;
};
// 1. entries-find (find)
function find(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return e[1];
  }
};
// 2. entries-findall (findAll)
function findAll(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[1];
  }
  return z;
};
// 3. entries-findallkeys (findAllKeys)
function findAllKeys(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[0];
  }
  return z;
};
// 4. entries-findkey (findKey)
function findKey(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return e[0];
  }
};
// 5. entries-foreach (forEach)
function forEach(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    fn.call(ths, e[1], e[0], ent);
  }
};
// 6. entries-includes (includes)
function includes(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return true;
  }
  return false;
};
// 7. entries-join (join)
function join(ent, fmt='%k=%v', sep=',', idx=0, val=null, v0=Array.isArray(val)? val.length:0, bgn=0, end=Number.MAX_SAFE_INTEGER, z='') {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += fmt.replace(/%i/g, idx++).replace(/%k/g, e[0]).replace(/%v/g, e[1])+sep;
    if(val!=null) val[v0++] = e[1];
  }
  return z.substr(0, z.length-sep.length);
};
// 8. entries-keyof (keyOf)
function keyOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return e[0];
  }
};
// 9. entries-keysof (keysOf)
function keysOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) z[z0++] = e[0];
  }
  return z;
};
// 10. entries-reduce (reduce)
function reduce(ent, fn, acc, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    acc = acc!==undefined? fn(acc, e[1], e[0], ent):e[1];
  }
  return acc;
};
// 11. entries-some (some)
function some(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return true;
  }
  return false;
};
// 12. map-concatof (concatOf)
function concatOf() {
  var z = new Map();
  for(var i=0, I=arguments.length; i<I; i++)
    for(var e of arguments[i])
      z.set(e[0], e[1]);
  return z;
};
// 13. map-contains (contains)
function contains(map, ent, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent)
    if(++i>=bgn && i<end && map.get(e[0])!==e[1]) return false;
  return true;
};
// 14. map-containskeys (containsKeys)
function containsKeys(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end && !map.has(k)) return false;
  return true;
};
// 15. map-deleteall (deleteAll)
function deleteAll(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) map.delete(k);
  return map;
};
// 16. map-equal (equal)
function equal(ma, mb) {
  if(ma.size!==mb.size) return false;
  for(var [k, v] of ma)
    if(mb.get(k)!==v) return false;
  return true;
};
// 17. map-filterto (filterTo)
function same19(map, fn, ths) {
  for(var e of map)
    if(!fn.call(ths, e[1], e[0], map)) map.delete(e[0]);
  return map;
};
function filterTo(map, fn, ths, z=new Map()) {
  if(z===map) return same19(map, fn, ths);
  for(var e of map)
    if(fn.call(ths, e[1], e[0], map)) z.set(e[0], e[1]);
  return z;
};
// 18. map-fromlists (fromLists)
function fromLists(lst) {
  var vi = lst[1][Symbol.iterator](), z = new Map();
  for(var k of lst[0])
    z.set(k ,vi.next().value);
  return z;
};
// 19. map-is (is)
function is(a) {
  return a instanceof Map;
};
// 20. map-mapto (mapTo)
function mapTo(map, fn, ths, z=new Map()) {
  for(var e of map)
    z.set(e[0], fn.call(ths, e[1], e[0], map));
  return z;
};
// 21. map-pick (pick)
function pick(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=new Map()) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) z.set(k, map.get(k));
  return z;
};
// 22. map-pickas (pickAs)
const isCollection24 = require('iterable-iscollection');
function pickAs(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=new Map()) {
  if(!isCollection24(key)) return map.get(key);
  return pick(map, key, bgn, end, z);
};
// 23. map-pickvalues (pickValues)
function pickValues(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) z[z0++] = map.get(k);
  return z;
};
// 24. map-pickvaluesas (pickValuesAs)
const isCollection26 = require('iterable-iscollection');
function pickValuesAs(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  if(!isCollection26(key)) return pickValues(map, [key], bgn, end, z, z0)[z0];
  return pickValues(map, key, bgn, end, z, z0);
};
// 25. map-setall (setAll)
function setAll(map, ent, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var [k, v] of ent)
    if(++i>=bgn && i<end) map.set(k, v);
  return map;
};
// 26. map-setlists (setLists)
function setLists(map, lst, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var vi = lst[1][Symbol.iterator](), i = -1;
  for(var k of lst[0])
    if(++i>=bgn && i<end) map.set(k, vi.next().value);
  return map;
};
Map.every = every;
Map.find = find;
Map.findAll = findAll;
Map.findAllKeys = findAllKeys;
Map.findKey = findKey;
Map.forEach = forEach;
Map.includes = includes;
Map.join = join;
Map.keyOf = keyOf;
Map.keysOf = keysOf;
Map.reduce = reduce;
Map.some = some;
Map.concat = concatOf;
Map.contains = contains;
Map.containsKeys = containsKeys;
Map.deleteAll = deleteAll;
Map.equal = equal;
Map.filter = filterTo;
Map.fromLists = fromLists;
Map.is = is;
Map.map = mapTo;
Map.pick = pick;
Map.pickAs = pickAs;
Map.pickValues = pickValues;
Map.pickValuesAs = pickValuesAs;
Map.setAll = setAll;
Map.setLists = setLists;
module.exports = Map;
