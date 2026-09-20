A group of functions for working with Maps.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-map),
📦 [NPM](https://www.npmjs.com/package/extra-map),
📰 [Docs](https://jsr.io/@nodef/extra-map/doc).

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

[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

<br>

```javascript
import * as xmap from "jsr:@nodef/extra-map";

var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
xmap.swap(x, "a", "b");
// → Map(4) { "a" => 2, "b" => 1, "c" => 3, "d" => 4 }

var x = new Map([["a", 1],  ["b", 2],  ["c", 3], ["d", 4]]);
var y = new Map([["b", 20], ["c", 30], ["e", 50]]);
xmap.intersection(x, y);
// → Map(2) { "b" => 2, "c" => 3 }

var x = new Map([["a", 1], ["b", 2], ["c", 3], ["d", -2]]);
xmap.searchAll(x, v => Math.abs(v) === 2);
// → [ "b", "d" ]              ^                   ^

var x = new Map([["a", 1], ["b", 2], ["c", 3]]);
[...xmap.subsets(x)];
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
| [setPath$] | Set value at path in a nested map. |
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
| [unionKeys] | Obtain keys present in any map. |
| [union] | Obtain entries present in any map. |
| [union$] | Obtain entries present in any map. |
| [intersectionKeys] | Obtain keys present in all maps. |
| [intersection] | Obtain entries present in both maps. |
| [intersection$] | Obtain entries present in both maps. |
| [difference] | Obtain entries not present in another map. |
| [difference$] | Obtain entries not present in another map. |
| [symmetricDifference] | Obtain entries not present in both maps. |
| [symmetricDifference$] | Obtain entries not present in both maps. |
| [cartesianProduct] | List cartesian product of maps. |

<br>
<br>


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-map)


[is]: https://jsr.io/@nodef/extra-map/doc/~/is
[keys]: https://jsr.io/@nodef/extra-map/doc/~/keys
[values]: https://jsr.io/@nodef/extra-map/doc/~/values
[entries]: https://jsr.io/@nodef/extra-map/doc/~/entries
[from]: https://jsr.io/@nodef/extra-map/doc/~/from
[from$]: https://jsr.io/@nodef/extra-map/doc/~/from$
[fromLists]: https://jsr.io/@nodef/extra-map/doc/~/fromLists
[fromKeys]: https://jsr.io/@nodef/extra-map/doc/~/fromKeys
[fromValues]: https://jsr.io/@nodef/extra-map/doc/~/fromValues
[compare]: https://jsr.io/@nodef/extra-map/doc/~/compare
[isEqual]: https://jsr.io/@nodef/extra-map/doc/~/isEqual
[size]: https://jsr.io/@nodef/extra-map/doc/~/size
[isEmpty]: https://jsr.io/@nodef/extra-map/doc/~/isEmpty
[get]: https://jsr.io/@nodef/extra-map/doc/~/get
[getAll]: https://jsr.io/@nodef/extra-map/doc/~/getAll
[getPath]: https://jsr.io/@nodef/extra-map/doc/~/getPath
[hasPath]: https://jsr.io/@nodef/extra-map/doc/~/hasPath
[set]: https://jsr.io/@nodef/extra-map/doc/~/set
[set$]: https://jsr.io/@nodef/extra-map/doc/~/set$
[setPath$]: https://jsr.io/@nodef/extra-map/doc/~/setPath$
[swap]: https://jsr.io/@nodef/extra-map/doc/~/swap
[swap$]: https://jsr.io/@nodef/extra-map/doc/~/swap$
[remove]: https://jsr.io/@nodef/extra-map/doc/~/remove
[remove$]: https://jsr.io/@nodef/extra-map/doc/~/remove$
[removePath$]: https://jsr.io/@nodef/extra-map/doc/~/removePath$
[count]: https://jsr.io/@nodef/extra-map/doc/~/count
[countAs]: https://jsr.io/@nodef/extra-map/doc/~/countAs
[min]: https://jsr.io/@nodef/extra-map/doc/~/min
[minEntry]: https://jsr.io/@nodef/extra-map/doc/~/minEntry
[max]: https://jsr.io/@nodef/extra-map/doc/~/max
[maxEntry]: https://jsr.io/@nodef/extra-map/doc/~/maxEntry
[range]: https://jsr.io/@nodef/extra-map/doc/~/range
[rangeEntries]: https://jsr.io/@nodef/extra-map/doc/~/rangeEntries
[head]: https://jsr.io/@nodef/extra-map/doc/~/head
[tail]: https://jsr.io/@nodef/extra-map/doc/~/tail
[take]: https://jsr.io/@nodef/extra-map/doc/~/take
[take$]: https://jsr.io/@nodef/extra-map/doc/~/take$
[drop]: https://jsr.io/@nodef/extra-map/doc/~/drop
[drop$]: https://jsr.io/@nodef/extra-map/doc/~/drop$
[subsets]: https://jsr.io/@nodef/extra-map/doc/~/subsets
[randomKey]: https://jsr.io/@nodef/extra-map/doc/~/randomKey
[randomEntry]: https://jsr.io/@nodef/extra-map/doc/~/randomEntry
[randomSubset]: https://jsr.io/@nodef/extra-map/doc/~/randomSubset
[has]: https://jsr.io/@nodef/extra-map/doc/~/has
[hasValue]: https://jsr.io/@nodef/extra-map/doc/~/hasValue
[hasEntry]: https://jsr.io/@nodef/extra-map/doc/~/hasEntry
[hasSubset]: https://jsr.io/@nodef/extra-map/doc/~/hasSubset
[find]: https://jsr.io/@nodef/extra-map/doc/~/find
[findAll]: https://jsr.io/@nodef/extra-map/doc/~/findAll
[search]: https://jsr.io/@nodef/extra-map/doc/~/search
[searchAll]: https://jsr.io/@nodef/extra-map/doc/~/searchAll
[searchValue]: https://jsr.io/@nodef/extra-map/doc/~/searchValue
[searchValueAll]: https://jsr.io/@nodef/extra-map/doc/~/searchValueAll
[forEach]: https://jsr.io/@nodef/extra-map/doc/~/forEach
[some]: https://jsr.io/@nodef/extra-map/doc/~/some
[every]: https://jsr.io/@nodef/extra-map/doc/~/every
[map]: https://jsr.io/@nodef/extra-map/doc/~/map
[map$]: https://jsr.io/@nodef/extra-map/doc/~/map$
[reduce]: https://jsr.io/@nodef/extra-map/doc/~/reduce
[filter]: https://jsr.io/@nodef/extra-map/doc/~/filter
[filter$]: https://jsr.io/@nodef/extra-map/doc/~/filter$
[filterAt]: https://jsr.io/@nodef/extra-map/doc/~/filterAt
[filterAt$]: https://jsr.io/@nodef/extra-map/doc/~/filterAt$
[reject]: https://jsr.io/@nodef/extra-map/doc/~/reject
[reject$]: https://jsr.io/@nodef/extra-map/doc/~/reject$
[rejectAt]: https://jsr.io/@nodef/extra-map/doc/~/rejectAt
[rejectAt$]: https://jsr.io/@nodef/extra-map/doc/~/rejectAt$
[flat]: https://jsr.io/@nodef/extra-map/doc/~/flat
[flatMap]: https://jsr.io/@nodef/extra-map/doc/~/flatMap
[zip]: https://jsr.io/@nodef/extra-map/doc/~/zip
[partition]: https://jsr.io/@nodef/extra-map/doc/~/partition
[partitionAs]: https://jsr.io/@nodef/extra-map/doc/~/partitionAs
[chunk]: https://jsr.io/@nodef/extra-map/doc/~/chunk
[concat]: https://jsr.io/@nodef/extra-map/doc/~/concat
[concat$]: https://jsr.io/@nodef/extra-map/doc/~/concat$
[join]: https://jsr.io/@nodef/extra-map/doc/~/join
[isDisjoint]: https://jsr.io/@nodef/extra-map/doc/~/isDisjoint
[unionKeys]: https://jsr.io/@nodef/extra-map/doc/~/unionKeys
[union]: https://jsr.io/@nodef/extra-map/doc/~/union
[union$]: https://jsr.io/@nodef/extra-map/doc/~/union$
[intersectionKeys]: https://jsr.io/@nodef/extra-map/doc/~/intersectionKeys
[intersection]: https://jsr.io/@nodef/extra-map/doc/~/intersection
[intersection$]: https://jsr.io/@nodef/extra-map/doc/~/intersection$
[difference]: https://jsr.io/@nodef/extra-map/doc/~/difference
[difference$]: https://jsr.io/@nodef/extra-map/doc/~/difference$
[symmetricDifference]: https://jsr.io/@nodef/extra-map/doc/~/symmetricDifference
[symmetricDifference$]: https://jsr.io/@nodef/extra-map/doc/~/symmetricDifference$
[cartesianProduct]: https://jsr.io/@nodef/extra-map/doc/~/cartesianProduct
