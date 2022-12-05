import * as array from "extra-array";
import {
  is,
  keys,
  values,
  entries,
  from,
  from$,
  fromLists,
  fromKeys,
  fromValues,
  compare,
  isEqual,
  size,
  isEmpty,
  get,
  getAll,
  getPath,
  hasPath,
  set,
  set$,
  setPath$,
  swap,
  swap$,
  remove,
  remove$,
  removePath$,
  count,
  countAs,
  min,
  minEntry,
  max,
  maxEntry,
  range,
  rangeEntries,
  head,
  tail,
  take,
  take$,
  drop,
  drop$,
  subsets,
  randomKey,
  randomEntry,
  randomSubset,
  has,
  hasValue,
  hasEntry,
  hasSubset,
  find,
  findAll,
  search,
  searchAll,
  searchValue,
  searchValueAll,
  forEach,
  some,
  every,
  map,
  map$,
  reduce,
  filter,
  filter$,
  filterAt,
  filterAt$,
  reject,
  reject$,
  rejectAt,
  rejectAt$,
  flat,
  flatMap,
  zip,
  partition,
  partitionAs,
  chunk,
  concat,
  concat$,
  join,
  isDisjoint,
  unionKeys,
  union,
  union$,
  intersectionKeys,
  intersection,
  intersection$,
  difference,
  difference$,
  symmetricDifference,
  symmetricDifference$,
  cartesianProduct,
} from "../src";




// ABOUT
// -----

test("is", () => {
  var a = is(new Map([["a", 1], ["b", 2]]));
  expect(a).toBe(true);
  var a = is(new Map());
  expect(a).toBe(true);
  var a = is(1);
  expect(a).toBe(false);
});


test("keys", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = keys(x);
  expect([...a]).toStrictEqual(["a", "b", "c"]);
});


test("values", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = values(x);
  expect([...a]).toStrictEqual([1, 2, 3]);
});


test("entries", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = entries(x);
  expect([...a]).toStrictEqual([["a", 1], ["b", 2], ["c", 3]]);
});




// GENERATE
// --------

test("from", () => {
  var es: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  var a = from(es);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
});


test("from$", () => {
  var es: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  var a = from$(es);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
  var x = new Map(es);
  var a = from$(x);
  expect(a===x).toBe(true);
  a.set("a", 10);
  expect(x).toStrictEqual(new Map([["a", 10], ["b", 2], ["c", 3]]));
});


test("fromLists", () => {
  var ls: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  var a = fromLists(ls);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
});


test("fromKeys", () => {
  var ks = ["a", "b", "c"];
  var a  = fromKeys(ks);
  expect(a).toStrictEqual(new Map([["a", "a"], ["b", "b"], ["c", "c"]]));
  var b  = fromKeys(ks, k => k.charCodeAt(0) - 97 + 1);
  expect(b).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
});


test("fromValues", () => {
  var vs = [1, 2, 3];
  var a  = fromValues(vs);
  expect(a).toStrictEqual(new Map([[1, 1], [2, 2], [3, 3]]));
  var b  = fromValues(vs, v => String.fromCharCode(v + 97 - 1));
  expect(b).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
});




// COMPARE
// -------

test("compare", () => {
  var x = new Map([["a", 1], ["b", 2]]);
  var y = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = compare(x, y);
  expect(a).toBe(-1);
  var y = new Map([["a", 1], ["b", 2]]);
  var a = compare(x, y);
  expect(a).toBe(0);
  var y = new Map([["a", 1], ["b", -2]]);
  var a = compare(x, y);
  expect(a).toBe(1);
  var a = compare(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(0);
  var a = compare(x, y, null, v => Math.abs(v));
  expect(a).toBe(0);
});


test("isEqual", () => {
  var x = new Map([["a", 1], ["b", 2]]);
  var y = new Map([["a", 1], ["b", 2]]);
  var a = isEqual(x, y);
  expect(a).toBe(true);
  var y = new Map([["a", 11], ["b", 12]]);
  var a = isEqual(x, y);
  expect(a).toBe(false);
  var a = isEqual(x, y, (a, b) => (a % 10) - (b % 10));
  expect(a).toBe(true);
  var a = isEqual(x, y, null, v => v % 10);
  expect(a).toBe(true);
});




// SIZE
// ----

test("size", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = size(x);
  expect(a).toBe(3);
});


test("isEmpty", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = isEmpty(x);
  expect(a).toBe(false);
  var x = new Map<string, number>();
  var a = isEmpty(x);
  expect(a).toBe(true);
});




// GET/SET
// -------

test("get", () => {
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = get(x, "b");
  expect(a).toBe(4);
  var a = get(x, "d");
  expect(a).toBe(8);
});


test("getAll", () => {
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = getAll(x, ["b", "d"]);
  expect(a).toStrictEqual([4, 8]);
  var a = getAll(x, ["e"]);
  expect(a).toStrictEqual([undefined]);
});


test("getPath", () => {
  var x = new Map<string, number>([["a", 2], ["b", 4],  ["c", 6]]);
  var y = new Map<string, any>   ([["x", x], ["e", 10], ["f", 12]]);
  var a = getPath(y, ["e"]);
  expect(a).toBe(10);
  var a = getPath(y, ["x", "b"]);
  expect(a).toBe(4);
  var a = getPath(y, ["x", "b", "c"]);
  expect(a).toBeUndefined();
});


test("hasPath", () => {
  var x = new Map<string, number>([["a", 2], ["b", 4],  ["c", 6]]);
  var y = new Map<string, any>   ([["x", x], ["e", 10], ["f", 12]]);
  var a = hasPath(y, ["e"]);
  expect(a).toBe(true);
  var a = hasPath(y, ["x", "b"]);
  expect(a).toBe(true);
  var a = hasPath(y, ["x", "b", "c"]);
  expect(a).toBe(false);
});


test("set", () => {
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = set(x, "b", 40);
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 40], ["c", 6], ["d", 8]]));
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = set(x, "d", 80);
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 4], ["c", 6], ["d", 80]]));
});


test("set$", () => {
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = set$(x, "b", 40);
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 40], ["c", 6], ["d", 8]]));
  expect(x).toStrictEqual(new Map([["a", 2], ["b", 40], ["c", 6], ["d", 8]]));
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = set$(x, "d", 80);
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 4], ["c", 6], ["d", 80]]));
});


test("setPath$", () => {
  var x = new Map<string, number>([["a", 2], ["b", 4],  ["c", 6]]);
  var y = new Map<string, any>   ([["x", x], ["e", 10], ["f", 12]]);
  var a = setPath$(y, ["e"], 100);
  expect(a).toStrictEqual(new Map<string, any>([
    ["x", new Map([["a", 2], ["b", 4], ["c", 6]])],
    ["e", 100],
    ["f", 12],
  ]));
  expect(y).toStrictEqual(new Map<string, any>([
    ["x", new Map([["a", 2], ["b", 4], ["c", 6]])],
    ["e", 100],
    ["f", 12],
  ]));
  var a = setPath$(y, ["x", "b"], 40);
  expect(a).toStrictEqual(new Map<string, any>([
    ["x", new Map([["a", 2], ["b", 40], ["c", 6]])],
    ["e", 100],
    ["f", 12],
  ]));
  var a = setPath$(y, ["x", "b", "c"], 60);
  expect(a).toStrictEqual(new Map<string, any>([
    ["x", new Map([["a", 2], ["b", 40], ["c", 6]])],
    ["e", 100],
    ["f", 12],
  ]));  // now effect
});


test("swap", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = swap(x, "a", "b");
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 1], ["c", 3], ["d", 4]]));
  var a = swap(x, "a", "d");
  expect(a).toStrictEqual(new Map([["a", 4], ["b", 2], ["c", 3], ["d", 1]]));
});


test("swap$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = swap$(x, "a", "b");
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 1], ["c", 3], ["d", 4]]));
  expect(x).toStrictEqual(new Map([["a", 2], ["b", 1], ["c", 3], ["d", 4]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = swap$(x, "a", "d");
  expect(a).toStrictEqual(new Map([["a", 4], ["b", 2], ["c", 3], ["d", 1]]));
});


test("remove", () => {
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = remove(x, "b");
  expect(a).toStrictEqual(new Map([["a", 2], ["c", 6], ["d", 8]]));
  var a = remove(x, "d");
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 4], ["c", 6]]));
});


test("remove$", () => {
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = remove$(x, "b");
  expect(a).toStrictEqual(new Map([["a", 2], ["c", 6], ["d", 8]]));
  expect(x).toStrictEqual(new Map([["a", 2], ["c", 6], ["d", 8]]));
  var x = new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
  var a = remove$(x, "d");
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 4], ["c", 6]]));
});


test("removePath$", () => {
  var x = new Map<string, number>([["a", 2], ["b", 4],  ["c", 6]]);
  var y = new Map<string, any>   ([["x", x], ["e", 10], ["f", 12]]);
  var a = removePath$(y, ["e"]);
  expect(a).toStrictEqual(new Map<string, any>([
    ["x", new Map([["a", 2], ["b", 4], ["c", 6]])],
    ["f", 12],
  ]));
  expect(y).toStrictEqual(new Map<string, any>([
    ["x", new Map([["a", 2], ["b", 4], ["c", 6]])],
    ["f", 12],
  ]));
  var a = removePath$(y, ["x", "b"]);
  expect(a).toStrictEqual(new Map<string, any>([
    ["x", new Map([["a", 2], ["c", 6]])],
    ["f", 12],
  ]));
  var a = removePath$(y, ["x", "b", "c"]);
  expect(a).toStrictEqual(new Map<string, any>([
    ["x", new Map([["a", 2], ["c", 6]])],
    ["f", 12],
  ]));  // no effect
});




// PROPERTY
// --------

test("count", () => {
  var x = new Map([["a", 1], ["b", 1], ["c", 2], ["d", 2], ["e", 4]]);
  var a = count(x, v => v % 2 === 1);
  expect(a).toBe(2);
  var a = count(x, v => v % 2 === 0);
  expect(a).toBe(3);
});


test("countAs", () => {
  var x = new Map([["a", 1], ["b", 1], ["c", 2], ["d", 2], ["e", 4]]);
  var a = countAs(x);
  expect(a).toStrictEqual(new Map([[1, 2], [2, 2], [4, 1]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = countAs(x, v => v % 2);
  expect(a).toStrictEqual(new Map([[1, 2], [0, 2]]));
});


test("min", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a = min(x);
  expect(a).toBe(-4);
  var a = min(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(1);
  var a = min(x, null, v => Math.abs(v));
  expect(a).toBe(1);
});


test("minEntry", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a = minEntry(x);
  expect(a).toStrictEqual(["d", -4]);
  var a = minEntry(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual(["a", 1]);
  var a = minEntry(x, null, v => Math.abs(v));
  expect(a).toStrictEqual(["a", 1]);
});


test("max", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a = max(x);
  expect(a).toBe(2);
  var a = max(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(-4);
  var a = max(x, null, v => Math.abs(v));
  expect(a).toBe(-4);
});


test("maxEntry", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a = maxEntry(x);
  expect(a).toStrictEqual(["b", 2]);
  var a = maxEntry(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual(["d", -4]);
  var a = maxEntry(x, null, v => Math.abs(v));
  expect(a).toStrictEqual(["d", -4]);
});


test("range", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a = range(x);
  expect(a).toStrictEqual([-4, 2]);
  var a = range(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([1, -4]);
  var a = range(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([1, -4]);
});


test("rangeEntries", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a = rangeEntries(x);
  expect(a).toStrictEqual([["d", -4], ["b", 2]]);
  var a = rangeEntries(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([["a", 1], ["d", -4]]);
  var a = rangeEntries(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([["a", 1], ["d", -4]]);
});





// PART
// ----

test("head", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = head(x);
  expect(a).toStrictEqual(["a", 1]);
  var x = new Map<string, number>();
  var a = head(x);
  expect(a[0]).toBeUndefined();
  expect(a[1]).toBeUndefined();
});


test("tail", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = tail(x);
  expect(a).toStrictEqual(new Map([["b", 2], ["c", 3]]));
  var x = new Map([["a", 1]]);
  var a = tail(x);
  expect(a).toStrictEqual(new Map());
});


test("take", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = take(x, 2);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2]]));
  var a = take(x, 3);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
});


test("take$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = take$(x, 2);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2]]));
  expect(x).toStrictEqual(new Map([["a", 1], ["b", 2]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = take$(x, 3);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
});


test("drop", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = drop(x, 2);
  expect(a).toStrictEqual(new Map([["c", 3], ["d", 4], ["e", 5]]));
  var a = drop(x, 3);
  expect(a).toStrictEqual(new Map([["d", 4], ["e", 5]]));
});


test("drop$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = drop$(x, 2);
  expect(a).toStrictEqual(new Map([["c", 3], ["d", 4], ["e", 5]]));
  expect(x).toStrictEqual(new Map([["c", 3], ["d", 4], ["e", 5]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = drop$(x, 3);
  expect(a).toStrictEqual(new Map([["d", 4], ["e", 5]]));
});




// ARRANGEMENTS
// ------------

test("subsets", () => {
  var x = new Map([["a", 1], ["b", 2]]);
  var a = subsets(x);
  expect([...a]).toStrictEqual([
    new Map(),
    new Map([["a", 1]]),
    new Map([["b", 2]]),
    new Map([["a", 1], ["b", 2]]),
  ]);
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = subsets(x);
  expect([...a]).toStrictEqual([
    new Map(),
    new Map([["a", 1]]),
    new Map([["b", 2]]),
    new Map([["a", 1], ["b", 2]]),
    new Map([["c", 3]]),
    new Map([["a", 1], ["c", 3]]),
    new Map([["b", 2], ["c", 3]]),
    new Map([["a", 1], ["b", 2], ["c", 3]]),
  ]);
});


test("randomKey", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = randomKey(x);
  expect(has(x, a)).toBe(true);
  var a = randomKey(x);
  expect(has(x, a)).toBe(true);
});


test("randomEntry", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = randomEntry(x);
  expect(hasEntry(x, a)).toBe(true);
  var a = randomEntry(x);
  expect(hasEntry(x, a)).toBe(true);
});


test("randomSubset", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = randomSubset(x);
  expect(hasSubset(x, a)).toBe(true);
  var a = randomSubset(x, 3);
  expect(hasSubset(x, a)).toBe(true);
  expect(a.size).toBe(3);
  var a = randomSubset(x, 2);
  expect(hasSubset(x, a)).toBe(true);
  expect(a.size).toBe(2);
});




// FIND
// ----

test("has", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3]]);
  var a = has(x, "d");
  expect(a).toBe(false);
  var a = has(x, "c");
  expect(a).toBe(true);
});


test("hasValue", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3]]);
  var a = hasValue(x, 3);
  expect(a).toBe(false);
  var a = hasValue(x, 3, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasValue(x, 3, null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("hasEntry", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3]]);
  var a = hasEntry(x, ["c", 3]);
  expect(a).toBe(false);
  var a = hasEntry(x, ["c", 3], (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasEntry(x, ["c", 3], null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("hasSubset", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["b", 2], ["d", 4]]);
  var a = hasSubset(x, y);
  expect(a).toBe(true);
  var y = new Map([["b", -2], ["d", -4]]);
  var a = hasSubset(x, y);
  expect(a).toBe(false);
  var a = hasSubset(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasSubset(x, y, null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("find", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = find(x, v => v % 2 === 0);
  expect(a).toBe(2);
  var a = find(x, v => v % 8 === 0);
  expect(a).toBeUndefined();
});


test("findAll", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = findAll(x, v => v % 2 === 0);
  expect(a).toStrictEqual([2, 4]);
  var a = findAll(x, v => v % 8 === 0);
  expect(a).toStrictEqual([]);
});


test("search", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 2]]);
  var a = search(x, v => v === 2);
  expect(a).toBe("b");
  var a = search(x, v => v === 4);
  expect(a).toBeUndefined();
});


test("searchAll", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", -2]]);
  var a = searchAll(x, v => v === 2);
  expect(a).toStrictEqual(["b"]);
  var a = searchAll(x, v => Math.abs(v) === 2);
  expect(a).toStrictEqual(["b", "d"]);
});


test("searchValue", () => {
  var x = new Map([["a", 1], ["b", -2], ["c", 3], ["d", 2], ["e", 5]]);
  var a = searchValue(x, 2);
  expect(a).toBe("d");
  var a = searchValue(x, 2, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe("b");
  var a = searchValue(x, 2, null, v => Math.abs(v));
  expect(a).toBe("b");
});


test("searchValueAll", () => {
  var x = new Map([["a", 1], ["b", -2], ["c", 3], ["d", 2], ["e", 5]]);
  var a = searchValueAll(x, 2);
  expect(a).toStrictEqual(["d"]);
  var a = searchValueAll(x, 2, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual(["b", "d"]);
  var a = searchValueAll(x, 2, null, v => Math.abs(v));
  expect(a).toStrictEqual(["b", "d"]);
});





// FUNCTIONAL
// ----------

test("forEach", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a: number[] = [];
  forEach(x, v => a.push(v));
  expect(a).toStrictEqual([1, 2, -3, -4]);
});


test("some", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a = some(x, v => v > 10);
  expect(a).toBe(false);
  var a = some(x, v => v < 0);
  expect(a).toBe(true);
});


test("every", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", -3], ["d", -4]]);
  var a = every(x, v => v > 0);
  expect(a).toBe(false);
  var a = every(x, v => v > -10);
  expect(a).toBe(true);
});


test("map", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = map(x, v => v * 2);
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]));
});


test("map$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = map$(x, v => v * 2);
  expect(a).toStrictEqual(new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]));
  expect(x).toStrictEqual(new Map([["a", 2], ["b", 4], ["c", 6], ["d", 8]]));
});


test("reduce", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = reduce(x, (acc, v) => acc+v);
  expect(a).toBe(10);
  var a = reduce(x, (acc, v) => acc+v, 100);
  expect(a).toBe(110);
});


test("filter", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = filter(x, v => v % 2 === 1);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  var a = filter(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Map([["b", 2], ["d", 4]]));
});


test("filter$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = filter$(x, v => v % 2 === 1);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  expect(x).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = filter$(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Map([["b", 2], ["d", 4]]));
});


test("filterAt", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = filterAt(x, ["a", "c", "e"]);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  var a = filterAt(x, ["b", "d"]);
  expect(a).toStrictEqual(new Map([["b", 2], ["d", 4]]));
});


test("filterAt$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = filterAt$(x, ["a", "c", "e"]);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  expect(x).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = filterAt$(x, ["b", "d"]);
  expect(a).toStrictEqual(new Map([["b", 2], ["d", 4]]));
});


test("reject", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = reject(x, v => v % 2 === 1);
  expect(a).toStrictEqual(new Map([["b", 2], ["d", 4]]));
  var a = reject(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
});


test("reject$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = reject$(x, v => v % 2 === 1);
  expect(a).toStrictEqual(new Map([["b", 2], ["d", 4]]));
  expect(x).toStrictEqual(new Map([["b", 2], ["d", 4]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = reject$(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
});


test("rejectAt", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = rejectAt(x, ["a", "c", "e"]);
  expect(a).toStrictEqual(new Map([["b", 2], ["d", 4]]));
  var a = rejectAt(x, ["b", "d"]);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
});


test("rejectAt$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = rejectAt$(x, ["a", "c", "e"]);
  expect(a).toStrictEqual(new Map([["b", 2], ["d", 4]]));
  expect(x).toStrictEqual(new Map([["b", 2], ["d", 4]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = rejectAt$(x, ["b", "d"]);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
});


test("flat", () => {
  var x = new Map([
    ["ab", new Map([
      ["a", 1],
      ["b", 2],
    ])],
    ["cde", new Map<string, any>([
      ["c", 3],
      ["de", new Map<string, any>([
        ["d", 4],
        ["e", new Map([
          ["e", 5]
        ])],
      ])],
    ])],
  ]);
  var a = flat(x);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]));
  var a = flat(x, 1);
  expect(a).toStrictEqual(new Map<string, any>([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["de", new Map<string, any>([["d", 4], ["e", new Map([["e", 5]])]])],
  ]));
  var a = flat(x, 2);
  expect(a).toStrictEqual(new Map<string, any>([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", new Map([["e", 5]])],
  ]));
});


test("flatMap", () => {
  var x = new Map([
    ["ab", new Map([
      ["a", 1],
      ["b", 2],
    ])],
    ["cde", new Map<string, any>([
      ["c", 3],
      ["de", new Map<string, any>([
        ["d", 4],
        ["e", new Map([
          ["e", 5]
        ])],
      ])],
    ])],
  ]);
  var a = flatMap(x);
  expect(a).toStrictEqual(new Map<string, any>([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["de", new Map<string, any>([["d", 4], ["e", new Map([["e", 5]])]])],
  ]));
  var a = flatMap(x, v => flat(v, 1));
  expect(a).toStrictEqual(new Map<string, any>([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", new Map([["e", 5]])],
  ]));
  var a = flatMap(x, v => flat(v));
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]));
});


test("zip", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var y = new Map([["a", 10], ["b", 20]]);
  var a = zip([x, y]);
  expect(a).toStrictEqual(new Map([["a", [1, 10]], ["b", [2, 20]]]));  // shortest
  var a = zip([x, y], ([a, b]) => a + b);
  expect(a).toStrictEqual(new Map([["a", 11], ["b", 22]]));
  var a = zip([x, y], null, array.some);
  expect(a).toStrictEqual(new Map([["a", [1, 10]], ["b", [2, 20]]]));  // shortest
  var a = zip([x, y], null, array.every, 0);
  expect(a).toStrictEqual(new Map([["a", [1, 10]], ["b", [2, 20]], ["c", [3, 0]]]));  // longest
});




// MANIPULATION
// ------------

test("partition", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = partition(x, v => v % 2 == 0);
  expect(a).toStrictEqual([
    new Map([["b", 2], ["d", 4]]),
    new Map([["a", 1], ["c", 3]]),
  ]);
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var a = partition(x, v => v % 2 == 1);
  expect(a).toStrictEqual([
    new Map([["a", 1], ["c", 3], ["e", 5]]),
    new Map([["b", 2], ["d", 4]]),
  ]);
});


test("partitionAs", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var a = partitionAs(x, v => v % 2 == 0);
  expect(a).toStrictEqual(new Map([
    [false, new Map([["a", 1], ["c", 3]])],
    [true,  new Map([["b", 2], ["d", 4]])],
  ]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var b = partitionAs(x, v => v % 3);
  expect(b).toStrictEqual(new Map([
    [1, new Map([["a", 1], ["d", 4]])],
    [2, new Map([["b", 2], ["e", 5]])],
    [0, new Map([["c", 3]])],
  ]));
});


test("chunk", () => {
  var x = new Map([
    ["a", 1], ["b", 2], ["c", 3], ["d", 4],
    ["e", 5], ["f", 6], ["g", 7], ["h", 8]
  ]);
  var a = chunk(x, 3);
  expect(a).toStrictEqual([
    new Map([["a", 1], ["b", 2], ["c", 3]]),
    new Map([["d", 4], ["e", 5], ["f", 6]]),
    new Map([["g", 7], ["h", 8]]),
  ]);
  var a = chunk(x, 2, 3);
  expect(a).toStrictEqual([
    new Map([["a", 1], ["b", 2]]),
    new Map([["d", 4], ["e", 5]]),
    new Map([["g", 7], ["h", 8]]),
  ]);
  var a = chunk(x, 4, 3);
  expect(a).toStrictEqual([
    new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]),
    new Map([["d", 4], ["e", 5], ["f", 6], ["g", 7]]),
    new Map([["g", 7], ["h", 8]]),
  ]);
});




// COMBINE
// -------

test("concat", () => {
  var x = new Map([["a", 1], ["b", 2]]);
  var y = new Map([["c", 3], ["d", 4]]);
  var a = concat(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]));
  var z = new Map([["d", 40], ["e", 50]]);
  var a = concat(x, y, z);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 40], ["e", 50]]));
});


test("concat$", () => {
  var x = new Map([["a", 1], ["b", 2]]);
  var y = new Map([["c", 3], ["d", 4]]);
  var a = concat$(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]));
  expect(x).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]));
  var x = new Map([["a", 1], ["b", 2]]);
  var y = new Map([["c", 3], ["d", 4]]);
  var z = new Map([["d", 40], ["e", 50]]);
  var a = concat$(x, y, z);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 40], ["e", 50]]));
});


test("join", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var a = join(x);
  expect(a).toBe("a=1,b=2,c=3");
  var a = join(x, ", ", " => ");
  expect(a).toBe("a => 1, b => 2, c => 3");
});




// SET OPERATIONS
// --------------

test("isDisjoint", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var y = new Map([["c", 3], ["d", 4]]);
  var a = isDisjoint(x, y);
  expect(a).toBe(false);
  var y = new Map([["d", 4]]);
  var a = isDisjoint(x, y);
  expect(a).toBe(true);
});


test("unionKeys", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["b", 20], ["c", 30], ["e", 50]]);
  var a = unionKeys(x, y);
  expect(a).toStrictEqual(new Set(["a", "b", "c", "d", "e"]));
});


test("union", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var y = new Map([["b", 20], ["c", 30], ["d", 40]]);
  var a = union(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 40]]));
  var a = union(x, y, (a, b) => b);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 20], ["c", 30], ["d", 40]]));
});


test("union$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var y = new Map([["b", 20], ["c", 30], ["d", 40]]);
  var a = union$(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 40]]));
  expect(x).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 40]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var y = new Map([["b", 20], ["c", 30], ["d", 40]]);
  var a = union$(x, y, (a, b) => b);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 20], ["c", 30], ["d", 40]]));
});


test("intersectionKeys", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["b", 20], ["c", 30], ["e", 50]]);
  var a = intersectionKeys(x, y);
  expect(a).toStrictEqual(new Set(["b", "c"]));
});


test("intersection", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["b", 20], ["c", 30], ["e", 50]]);
  var a = intersection(x, y);
  expect(a).toStrictEqual(new Map([["b", 2], ["c", 3]]));
  var a = intersection(x, y, (a, b) => b);
  expect(a).toStrictEqual(new Map([["b", 20], ["c", 30]]));
});


test("intersection$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["b", 20], ["c", 30], ["e", 50]]);
  var a = intersection$(x, y);
  expect(a).toStrictEqual(new Map([["b", 2], ["c", 3]]));
  expect(x).toStrictEqual(new Map([["b", 2], ["c", 3]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["b", 20], ["c", 30], ["e", 50]]);
  var a = intersection$(x, y, (a, b) => b);
  expect(a).toStrictEqual(new Map([["b", 20], ["c", 30]]));
});


test("difference", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var y = new Map([["b", 2], ["d", 4]]);
  var a = difference(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  var y = new Map([["b", -2], ["d", -4]]);
  var a = difference(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
});


test("difference$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var y = new Map([["b", 2], ["d", 4]]);
  var a = difference$(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  expect(x).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  var y = new Map([["b", -2], ["d", -4]]);
  var a = difference$(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["c", 3], ["e", 5]]));
});


test("symmetricDifference", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["c", 30], ["d", 40], ["e", 50], ["f", 60]]);
  var a = symmetricDifference(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["e", 50], ["f", 60]]));
  var y = new Map([["d", 40], ["e", 50], ["f", 60]]);
  var a = symmetricDifference(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["e", 50], ["f", 60]]));
});


test("symmetricDifference$", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["c", 30], ["d", 40], ["e", 50], ["f", 60]]);
  var a = symmetricDifference$(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["e", 50], ["f", 60]]));
  expect(x).toStrictEqual(new Map([["a", 1], ["b", 2], ["e", 50], ["f", 60]]));
  var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  var y = new Map([["d", 40], ["e", 50], ["f", 60]]);
  var a = symmetricDifference$(x, y);
  expect(a).toStrictEqual(new Map([["a", 1], ["b", 2], ["c", 3], ["e", 50], ["f", 60]]));
});


test("cartesianProduct", () => {
  var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
  var y = new Map([["d", 10], ["e", 20]]);
  var a = cartesianProduct([x, y]);
  expect([...a]).toStrictEqual([
    new Map([["a", 1], ["d", 10]]),
    new Map([["a", 1], ["e", 20]]),
    new Map([["b", 2], ["d", 10]]),
    new Map([["b", 2], ["e", 20]]),
    new Map([["c", 3], ["d", 10]]),
    new Map([["c", 3], ["e", 20]]),
  ]);
  var b = cartesianProduct([x, y], a => maxEntry(a));
  expect([...b]).toStrictEqual([
    ["d", 10],
    ["e", 20],
    ["d", 10],
    ["e", 20],
    ["d", 10],
    ["e", 20],
  ]);
});
