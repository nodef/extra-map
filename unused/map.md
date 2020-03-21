Map values in [map] to new values, like [Array.map()].

```javascript
const mapTo = require('@extra-map/map');
// mapTo(<map>, <map function>, [this], [target=new Map()])
// -> <target>

var m = new Map([['m', 13], ['a', 1], ['p', 16]]);
mapTo(m, (v) => v>>>1);
// Map {'m'=>6, 'a'=>0, 'p'=>8}
mapTo(m, (v, k, map) => v>>>1, null, new Map([['s', 19]]));
// Map {'s'=>19, 'm'=>6, 'a'=>0, 'p'=>8}
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[Array.map()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
