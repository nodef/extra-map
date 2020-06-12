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
| [is]                  | Checks if value is object.
| [get]                 | Gets value at key.
| [set]                 | Sets value at key.
| [remove]              | Deletes an entry.
| [swap]                | Exchanges two values.
| [size]                | Gets size of object.
|                       | 
| [head]                | Gets first entry.
| [take]                | Keeps first n entries only.
| [shift]               | Removes first entry.
| [fromEntries]         | Creates object from entries.
|                       | 
| [concat]              | Combines entries from objects, preferring last.
| [flat]                | Flattens nested object to given depth.
| [chunk]               | Breaks object into chunks of given size.
| [filterAt]            | Gets object with given keys.
|                       | 
| [map]                 | Updates values based on map function.
| [filter]              | Keeps entries which pass a test.
| [reduce]              | Reduces values to a single value.
| [range]               | Finds smallest and largest entries.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [cartesianProduct]    | Lists cartesian product of objects.
| [some]                | Checks if any value satisfies a test.
| [zip]                 | Combines entries from objects.
|                       | 
| [union]               | Gives entries present in any object.
| [intersection]        | Gives entries present in both objects.
| [difference]          | Gives entries of object not present in another.
| [symmetricDifference] | Gives entries not present in both objects.
| [isDisjoint]          | Checks if objects have no common keys.
|                       | 
| [key]                 | Picks an arbitrary key.
| [value]               | Picks an arbitrary value.
| [entry]               | Picks an arbitrary entry.
| [subobject]           | Picks an arbitrary subobject.
|                       | 
| [isEmpty]             | Checks if object is empty.
| [isEqual]             | Checks if two objects are equal.
| [compare]             | Compares two objects.
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
[:vhs:]: https://asciinema.org/a/WJjGsG2nIv4dL3aK5VD0A2N9r
[:package:]: https://www.npmjs.com/package/extra-map
[:moon:]: https://www.npmjs.com/package/extra-map.min
[:ledger:]: https://unpkg.com/extra-map/
