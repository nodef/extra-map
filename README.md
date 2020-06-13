A [map] is a collection of key-value pairs, with unique keys. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

Methods as separate packages:
- `@extra-map/swap`: use [rollup] to bundle this es module.
- `@extra-map/swap.min`: use in browser ([browserify], [uglify-js]).

Methods look like:
- `swap()`: doesn't modify the map itself (pure).
- `swap$()`: modifies the map itself (update).

In the future when you think of just giving up on life, remember
that the letter was in your hands, the cab was at the gate, only
if you had thought about it once more, your entire life would
have been better. [(1)]

> Stability: Experimental.

```javascript
const map = require('extra-map');
// import * as map from 'extra-map';
// import * as map from 'https://unpkg.com/extra-map@2.1.0/index.mjs'; (deno)

var x = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]);
map.swap(x, 'a', 'b');
// Map(4) { 'a' => 2, 'b' => 1, 'c' => 3, 'd' => 4 }

var x = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]);
var y = new Map([['b', 20], ['c', 30], ['e', 50]]);
map.intersection(x, y);
// Map(2) { 'b' => 2, 'c' => 3 }

var x = new Map([['a', 1], ['b', 2], ['c', 3], ['d', -2]]);
map.searchAll(x, v => Math.abs(v) === 2);
// [ 'b', 'd' ]              ^                   ^

var x = new Map([['a', 1], ['b', 2], ['c', 3]]);
[...map.submaps(x)];
// [
//   Map(0) {},
//   Map(1) { 'a' => 1 },
//   Map(1) { 'b' => 2 },
//   Map(2) { 'a' => 1, 'b' => 2 },
//   Map(1) { 'c' => 3 },
//   Map(2) { 'a' => 1, 'c' => 3 },
//   Map(2) { 'b' => 2, 'c' => 3 },
//   Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
// ]
```

### reference

| Method                | Action
|-----------------------|-------
| [is]                  | Checks if value is map.
| [get]                 | Gets value at key.
| [set]                 | Sets value at key.
| [remove]              | Deletes an entry.
| [swap]                | Exchanges two values.
| [size]                | Gets size of map.
|                       | 
| [head]                | Gets first entry.
| [take]                | Keeps first n entries only.
| [shift]               | Removes first entry.
| [fromEntries]         | Creates object from entries.
|                       | 
| [concat]              | Combines entries from maps, preferring last.
| [flat]                | Flattens nested map to given depth.
| [chunk]               | Breaks map into chunks of given size.
| [filterAt]            | Gets map with given keys.
|                       | 
| [map]                 | Updates values based on map function.
| [filter]              | Keeps entries which pass a test.
| [reduce]              | Reduces values to a single value.
| [range]               | Finds smallest and largest entries.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [cartesianProduct]    | Lists cartesian product of maps.
| [some]                | Checks if any value satisfies a test.
| [zip]                 | Combines entries from maps.
|                       | 
| [union]               | Gives entries present in any map.
| [intersection]        | Gives entries present in both maps.
| [difference]          | Gives entries of map not present in another.
| [symmetricDifference] | Gives entries not present in both maps.
| [isDisjoint]          | Checks if maps have no common keys.
|                       | 
| [key]                 | Picks an arbitrary key.
| [value]               | Picks an arbitrary value.
| [entry]               | Picks an arbitrary entry.
| [submap]              | Picks an arbitrary submap.
|                       | 
| [isEmpty]             | Checks if map is empty.
| [isEqual]             | Checks if two maps are equal.
| [compare]             | Compares two maps.
| [find]                | Finds value of an entry passing a test.
| [search]              | Finds key of an entry passing a test.
| [scanWhile]           | Finds key of first entry not passing a test.

<br>

[![nodef](https://merferry.glitch.me/card/extra-map.svg)](https://nodef.github.io)

[(1)]: https://www.rottentomatoes.com/m/3_idiots/quotes/
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[:running:]: https://npm.runkit.com/extra-map
[:package:]: https://www.npmjs.com/package/extra-map
[:moon:]: https://www.npmjs.com/package/extra-map.min
[:ledger:]: https://unpkg.com/extra-map/
[is]: https://github.com/nodef/extra-map/wiki/is
[get]: https://github.com/nodef/extra-map/wiki/get
[set]: https://github.com/nodef/extra-map/wiki/set
[remove]: https://github.com/nodef/extra-map/wiki/remove
[swap]: https://github.com/nodef/extra-map/wiki/swap
[size]: https://github.com/nodef/extra-map/wiki/size
[head]: https://github.com/nodef/extra-map/wiki/head
[take]: https://github.com/nodef/extra-map/wiki/take
[shift]: https://github.com/nodef/extra-map/wiki/shift
[fromEntries]: https://github.com/nodef/extra-map/wiki/fromEntries
[concat]: https://github.com/nodef/extra-map/wiki/concat
[flat]: https://github.com/nodef/extra-map/wiki/flat
[chunk]: https://github.com/nodef/extra-map/wiki/chunk
[filterAt]: https://github.com/nodef/extra-map/wiki/filterAt
[filter]: https://github.com/nodef/extra-map/wiki/filter
[reduce]: https://github.com/nodef/extra-map/wiki/reduce
[range]: https://github.com/nodef/extra-map/wiki/range
[count]: https://github.com/nodef/extra-map/wiki/count
[partition]: https://github.com/nodef/extra-map/wiki/partition
[cartesianProduct]: https://github.com/nodef/extra-map/wiki/cartesianProduct
[some]: https://github.com/nodef/extra-map/wiki/some
[zip]: https://github.com/nodef/extra-map/wiki/zip
[union]: https://github.com/nodef/extra-map/wiki/union
[intersection]: https://github.com/nodef/extra-map/wiki/intersection
[difference]: https://github.com/nodef/extra-map/wiki/difference
[symmetricDifference]: https://github.com/nodef/extra-map/wiki/symmetricDifference
[isDisjoint]: https://github.com/nodef/extra-map/wiki/isDisjoint
[key]: https://github.com/nodef/extra-map/wiki/key
[value]: https://github.com/nodef/extra-map/wiki/value
[entry]: https://github.com/nodef/extra-map/wiki/entry
[isEmpty]: https://github.com/nodef/extra-map/wiki/isEmpty
[isEqual]: https://github.com/nodef/extra-map/wiki/isEqual
[compare]: https://github.com/nodef/extra-map/wiki/compare
[find]: https://github.com/nodef/extra-map/wiki/find
[search]: https://github.com/nodef/extra-map/wiki/search
[scanWhile]: https://github.com/nodef/extra-map/wiki/scanWhile
[submap]: https://github.com/nodef/extra-map/wiki/submap
[:vhs:]: https://asciinema.org/a/338986
