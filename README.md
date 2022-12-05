A group of functions for working with Maps.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-map),
🌐 [Web](https://www.npmjs.com/package/extra-map.web),
📜 [Files](https://unpkg.com/extra-map/),
📰 [Docs](https://nodef.github.io/extra-map/),
📘 [Wiki](https://github.com/nodef/extra-map/wiki/).

A [Map] is a collection of key-value pairs, with unique keys. This package
includes common set functions related to querying **about** map, **generating**
them, **comparing** one with another, finding their **size**, **adding** and
**removing** entries, obtaining its **properties**, getting a **part** of it,
getting a **subset** entries in it, **finding** an entry in it, performing
**functional** operations, **manipulating** it in various ways, **combining**
together maps or its entries, of performing **set operations** upon it.

All functions except `from*()` take set as 1st parameter. Some names
are borrowed from Haskell, Python, Java, Processing. Methods like
`swap()` are pure and do not modify the map itself, while methods like
`swap$()` *do modify (update)* the map itself.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_set` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-map.web/index.js

<br>

```javascript
const map = require('extra-map');
// import * as map from "extra-map";
// import * as map from "https://unpkg.com/extra-map/index.mjs"; (deno)

var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
map.swap(x, "a", "b");
// → Map(4) { "a" => 2, "b" => 1, "c" => 3, "d" => 4 }

var x = new Map([["a", 1],  ["b", 2],  ["c", 3], ["d", 4]]);
var y = new Map([["b", 20], ["c", 30], ["e", 50]]);
map.intersection(x, y);
// → Map(2) { "b" => 2, "c" => 3 }

var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", -2]]);
map.searchAll(x, v => Math.abs(v) === 2);
// → [ "b", "d" ]              ^                   ^

var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
[...map.subsets(x)];
// → [
// →   Map(0) {},
// →   Map(1) { "a" => 1 },
// →   Map(1) { "b" => 2 },
// →   Map(2) { "a" => 1, "b" => 2 },
// →   Map(1) { "c" => 3 },
// →   Map(2) { "a" => 1, "c" => 3 },
// →   Map(2) { "b" => 2, "c" => 3 },
// →   Map(3) { "a" => 1, "b" => 2, "c" => 3 }
// → ]
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is] | Check if value is a map. |
| [keys] | List all keys. |
| [values] | List all values. |
| [entries] | List all key-value pairs. |
|  |  |
| [from] | Convert entries to map. |
| [from$] | Convert entries to map. |
| [fromLists] | Convert lists to map. |
| [fromKeys] | Create a map from keys. |
| [fromValues] | Create a map from values. |
|  |  |
| [compare] | Compare two maps. |
| [isEqual] | Check if two maps are equal. |
|  |  |
| [size] | Find the size of a map. |
| [isEmpty] | Check if a map is empty. |
|  |  |
| [get] | Get value at key. |
| [getAll] | Get values at keys. |
| [getPath] | Get value at path in a nested map. |
| [hasPath] | Check if nested map has a path. |
| [set] | Set value at key. |
| [set$] | Set value at key. |
| [setPath$] | Sets value at path in a nested map. |
| [swap] | Exchange two values. |
| [swap$] | Exchange two values. |
| [remove] | Remove value at key. |
| [remove$] | Remove value at key. |
| [removePath$] | Remove value at path in a nested map. |
|  |  |
| [count] | Count values which satisfy a test. |
| [countAs] | Count occurrences of values. |
| [min] | Find smallest value. |
| [minEntry] | Find smallest entry. |
| [max] | Find largest value. |
| [maxEntry] | Find largest entry. |
| [range] | Find smallest and largest values. |
| [rangeEntries] | Find smallest and largest entries. |
|  |  |
| [head] | Get first entry from map (default order). |
| [tail] | Get a map without its first entry (default order). |
| [take] | Keep first n entries only (default order). |
| [take$] | Keep first n entries only (default order). |
| [drop] | Remove first n entries (default order). |
| [drop$] | Remove first n entries (default order). |
|  |  |
| [subsets] | List all possible subsets. |
| [randomKey] | Pick an arbitrary key. |
| [randomEntry] | Pick an arbitrary entry. |
| [randomSubset] | Pick an arbitrary subset. |
|  |  |
| [has] | Check if map has a key. |
| [hasValue] | Check if map has a value. |
| [hasEntry] | Check if map has an entry. |
| [hasSubset] | Check if map has a subset. |
| [find] | Find first value passing a test (default order). |
| [findAll] | Find values passing a test. |
| [search] | Find key of an entry passing a test. |
| [searchAll] | Find keys of entries passing a test. |
| [searchValue] | Find a key with given value. |
| [searchValueAll] | Find keys with given value. |
|  |  |
| [forEach] | Call a function for each value. |
| [some] | Check if any value satisfies a test. |
| [every] | Check if all values satisfy a test. |
| [map] | Transform values of a map. |
| [map$] | Transform values of a map. |
| [reduce] | Reduce values of set to a single value. |
| [filter] | Keep entries which pass a test. |
| [filter$] | Keep entries which pass a test. |
| [filterAt] | Keep values at given keys. |
| [filterAt$] | Keep values at given keys. |
| [reject] | Discard entries which pass a test. |
| [reject$] | Discard entries which pass a test. |
| [rejectAt] | Discard values at given keys. |
| [rejectAt$] | Discard values at given keys. |
| [flat] | Flatten nested map to given depth. |
| [flatMap] | Flatten nested map, based on map function. |
| [zip] | Combine matching entries from maps. |
|  |  |
| [partition] | Segregate entries by test result. |
| [partitionAs] | Segregate entries by similarity. |
| [chunk] | Break map into chunks of given size. |
|  |  |
| [concat] | Append entries from maps, preferring last. |
| [concat$] | Append entries from maps, preferring last. |
| [join] | Join entries together into a string. |
|  |  |
| [isDisjoint] | Check if maps have no common keys. |
| [unionKeys] | Give keys present in any map. |
| [union] | Give entries present in any map. |
| [union$] | Give entries present in any map. |
| [intersectionKeys] | Give keys present in all maps. |
| [intersection] | Give entries present in both maps. |
| [intersection$] | Give entries present in both maps. |
| [difference] | Give entries not present in another map. |
| [difference$] | Give entries not present in another map. |
| [symmetricDifference] | Give entries not present in both maps. |
| [symmetricDifference$] | Give entries not present in both maps. |
| [cartesianProduct] | List cartesian product of maps. |

<br>
<br>


[![](https://img.youtube.com/vi/dMxIjGjMJz0/maxresdefault.jpg)](https://www.youtube.com/watch?v=dMxIjGjMJz0)
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-map/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-map?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6d1d66699747ff804674/test_coverage)](https://codeclimate.com/github/nodef/extra-map/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/6d1d66699747ff804674/maintainability)](https://codeclimate.com/github/nodef/extra-map/maintainability)


[is]: https://github.com/nodef/extra-map/wiki/is
[keys]: https://github.com/nodef/extra-map/wiki/keys
[values]: https://github.com/nodef/extra-map/wiki/values
[entries]: https://github.com/nodef/extra-map/wiki/entries
[from]: https://github.com/nodef/extra-map/wiki/from
[from$]: https://github.com/nodef/extra-map/wiki/from$
[fromLists]: https://github.com/nodef/extra-map/wiki/fromLists
[fromKeys]: https://github.com/nodef/extra-map/wiki/fromKeys
[fromValues]: https://github.com/nodef/extra-map/wiki/fromValues
[compare]: https://github.com/nodef/extra-map/wiki/compare
[isEqual]: https://github.com/nodef/extra-map/wiki/isEqual
[size]: https://github.com/nodef/extra-map/wiki/size
[isEmpty]: https://github.com/nodef/extra-map/wiki/isEmpty
[get]: https://github.com/nodef/extra-map/wiki/get
[getAll]: https://github.com/nodef/extra-map/wiki/getAll
[getPath]: https://github.com/nodef/extra-map/wiki/getPath
[hasPath]: https://github.com/nodef/extra-map/wiki/hasPath
[set]: https://github.com/nodef/extra-map/wiki/set
[set$]: https://github.com/nodef/extra-map/wiki/set$
[setPath$]: https://github.com/nodef/extra-map/wiki/setPath$
[swap]: https://github.com/nodef/extra-map/wiki/swap
[swap$]: https://github.com/nodef/extra-map/wiki/swap$
[remove]: https://github.com/nodef/extra-map/wiki/remove
[remove$]: https://github.com/nodef/extra-map/wiki/remove$
[removePath$]: https://github.com/nodef/extra-map/wiki/removePath$
[count]: https://github.com/nodef/extra-map/wiki/count
[countAs]: https://github.com/nodef/extra-map/wiki/countAs
[min]: https://github.com/nodef/extra-map/wiki/min
[minEntry]: https://github.com/nodef/extra-map/wiki/minEntry
[max]: https://github.com/nodef/extra-map/wiki/max
[maxEntry]: https://github.com/nodef/extra-map/wiki/maxEntry
[range]: https://github.com/nodef/extra-map/wiki/range
[rangeEntries]: https://github.com/nodef/extra-map/wiki/rangeEntries
[head]: https://github.com/nodef/extra-map/wiki/head
[tail]: https://github.com/nodef/extra-map/wiki/tail
[take]: https://github.com/nodef/extra-map/wiki/take
[take$]: https://github.com/nodef/extra-map/wiki/take$
[drop]: https://github.com/nodef/extra-map/wiki/drop
[drop$]: https://github.com/nodef/extra-map/wiki/drop$
[subsets]: https://github.com/nodef/extra-map/wiki/subsets
[randomKey]: https://github.com/nodef/extra-map/wiki/randomKey
[randomEntry]: https://github.com/nodef/extra-map/wiki/randomEntry
[randomSubset]: https://github.com/nodef/extra-map/wiki/randomSubset
[has]: https://github.com/nodef/extra-map/wiki/has
[hasValue]: https://github.com/nodef/extra-map/wiki/hasValue
[hasEntry]: https://github.com/nodef/extra-map/wiki/hasEntry
[hasSubset]: https://github.com/nodef/extra-map/wiki/hasSubset
[find]: https://github.com/nodef/extra-map/wiki/find
[findAll]: https://github.com/nodef/extra-map/wiki/findAll
[search]: https://github.com/nodef/extra-map/wiki/search
[searchAll]: https://github.com/nodef/extra-map/wiki/searchAll
[searchValue]: https://github.com/nodef/extra-map/wiki/searchValue
[searchValueAll]: https://github.com/nodef/extra-map/wiki/searchValueAll
[forEach]: https://github.com/nodef/extra-map/wiki/forEach
[some]: https://github.com/nodef/extra-map/wiki/some
[every]: https://github.com/nodef/extra-map/wiki/every
[map]: https://github.com/nodef/extra-map/wiki/map
[map$]: https://github.com/nodef/extra-map/wiki/map$
[reduce]: https://github.com/nodef/extra-map/wiki/reduce
[filter]: https://github.com/nodef/extra-map/wiki/filter
[filter$]: https://github.com/nodef/extra-map/wiki/filter$
[filterAt]: https://github.com/nodef/extra-map/wiki/filterAt
[filterAt$]: https://github.com/nodef/extra-map/wiki/filterAt$
[reject]: https://github.com/nodef/extra-map/wiki/reject
[reject$]: https://github.com/nodef/extra-map/wiki/reject$
[rejectAt]: https://github.com/nodef/extra-map/wiki/rejectAt
[rejectAt$]: https://github.com/nodef/extra-map/wiki/rejectAt$
[flat]: https://github.com/nodef/extra-map/wiki/flat
[flatMap]: https://github.com/nodef/extra-map/wiki/flatMap
[zip]: https://github.com/nodef/extra-map/wiki/zip
[partition]: https://github.com/nodef/extra-map/wiki/partition
[partitionAs]: https://github.com/nodef/extra-map/wiki/partitionAs
[chunk]: https://github.com/nodef/extra-map/wiki/chunk
[concat]: https://github.com/nodef/extra-map/wiki/concat
[concat$]: https://github.com/nodef/extra-map/wiki/concat$
[join]: https://github.com/nodef/extra-map/wiki/join
[isDisjoint]: https://github.com/nodef/extra-map/wiki/isDisjoint
[unionKeys]: https://github.com/nodef/extra-map/wiki/unionKeys
[union]: https://github.com/nodef/extra-map/wiki/union
[union$]: https://github.com/nodef/extra-map/wiki/union$
[intersectionKeys]: https://github.com/nodef/extra-map/wiki/intersectionKeys
[intersection]: https://github.com/nodef/extra-map/wiki/intersection
[intersection$]: https://github.com/nodef/extra-map/wiki/intersection$
[difference]: https://github.com/nodef/extra-map/wiki/difference
[difference$]: https://github.com/nodef/extra-map/wiki/difference$
[symmetricDifference]: https://github.com/nodef/extra-map/wiki/symmetricDifference
[symmetricDifference$]: https://github.com/nodef/extra-map/wiki/symmetricDifference$
[cartesianProduct]: https://github.com/nodef/extra-map/wiki/cartesianProduct
