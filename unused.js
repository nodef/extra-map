function is(a) {
  return a instanceof Map;
}
function equal(ma, mb) {
  if(ma.size!==mb.size) return false;
  for(var [k, v] of ma)
    if(mb.get(k)!==v) return false;
  return true;
}
function keyOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return e[0];
  }
}
function keysOf(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) z[z0++] = e[0];
  }
  return z;
}
function includes(ent, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(e[1]===val) return true;
  }
  return false;
}
function fromLists(lst) {
  var vi = lst[1][Symbol.iterator](), z = new Map();
  for(var k of lst[0])
    z.set(k ,vi.next().value);
  return z;
}
function setAll(map, ent, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var [k, v] of ent)
    if(++i>=bgn && i<end) map.set(k, v);
  return map;
}
function setLists(map, lst, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var vi = lst[1][Symbol.iterator](), i = -1;
  for(var k of lst[0])
    if(++i>=bgn && i<end) map.set(k, vi.next().value);
  return map;
}
function deleteAll(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) map.delete(k);
  return map;
}
function contains(map, ent, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent)
    if(++i>=bgn && i<end && map.get(e[0])!==e[1]) return false;
  return true;
}
function containsKeys(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end && !map.has(k)) return false;
  return true;
}
function join(ent, fmt='%k=%v', sep=',', idx=0, val=null, v0=Array.isArray(val)? val.length:0, bgn=0, end=Number.MAX_SAFE_INTEGER, z='') {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += fmt.replace(/%i/g, idx++).replace(/%k/g, e[0]).replace(/%v/g, e[1])+sep;
    if(val!=null) val[v0++] = e[1];
  }
  return z.substr(0, z.length-sep.length);
}
function pick(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=new Map()) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) z.set(k, map.get(k));
  return z;
}
function is13(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
}
const is14 = is13;
function isCollection(a) {
  return is14(a) && typeof a!=='string';
}
function pickAs(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=new Map()) {
  if(!isCollection(key)) return map.get(key);
  return pick(map, key, bgn, end, z);
}
function pickValues(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var k of key)
    if(++i>=bgn && i<end) z[z0++] = map.get(k);
  return z;
}
function pickValuesAs(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  if(!isCollection(key)) return pickValues(map, [key], bgn, end, z, z0)[z0];
  return pickValues(map, key, bgn, end, z, z0);
}
function concatOf() {
  var z = new Map();
  for(var i=0, I=arguments.length; i<I; i++)
    for(var e of arguments[i])
      z.set(e[0], e[1]);
  return z;
}
function forEach(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    fn.call(ths, e[1], e[0], ent);
  }
}
function some(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return true;
  }
  return false;
}
function every(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!fn.call(ths, e[1], e[0], ent)) return false;
  }
  return true;
}
function find(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return e[1];
  }
}
function findKey(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) return e[0];
  }
}
function findAll(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[1];
  }
  return z;
}
function findAllKeys(ent, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, e[1], e[0], ent)) z[z0++] = e[0];
  }
  return z;
}
function reduce(ent, fn, acc, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var e of ent) {
    if(++i<bgn) continue;
    if(i>=end) break;
    acc = acc!==undefined? fn(acc, e[1], e[0], ent):e[1];
  }
  return acc;
}
function same(map, fn, ths) {
  for(var e of map)
    if(!fn.call(ths, e[1], e[0], map)) map.delete(e[0]);
  return map;
}
function filterTo(map, fn, ths, z=new Map()) {
  if(z===map) return same(map, fn, ths);
  for(var e of map)
    if(fn.call(ths, e[1], e[0], map)) z.set(e[0], e[1]);
  return z;
}
function mapTo(map, fn, ths, z=new Map()) {
  for(var e of map)
    z.set(e[0], fn.call(ths, e[1], e[0], map));
  return z;
}
// Datatype methods:
Map.is = is;

// About methods:
Map.equal = equal;

// Search methods:
Map.keyOf = keyOf;
Map.keysOf = keysOf;
Map.includes = includes;

// Transform methods:
Map.fromLists = fromLists;
Map.setAll = setAll;
Map.setLists = setLists;
Map.deleteAll = deleteAll;
Map.contains = contains;
Map.containsKeys = containsKeys;
Map.join = join;
Map.pick = pick;
Map.pickAs = pickAs;
Map.pickValues = pickValues;
Map.pickValuesAs = pickValuesAs;
Map.concat = concatOf;

// Functional methods:
Map.forEach = forEach;
Map.some = some;
Map.every = every;
Map.find = find;
Map.findKey = findKey;
Map.findAll = findAll;
Map.findAllKeys = findAllKeys;
Map.reduce = reduce;
Map.filter = filterTo;
Map.map = mapTo;
module.exports = Map;
