Filter values in [map] that pass the test, like [Array.filter()].

```javascript
const filterTo = require('@extra-map/filter');
// filterTo(<map>, <test function>, [this], [target=new Map()])
// -> <target>

var m = new Map([['m', 13], ['a', 1], ['p', 16]]);
filterTo(m, (v) => v>1);
// Map {'m'=>13, 'p'=>16}
filterTo(m, (v, k, map) => v>1, null, new Map([['s', 19]]));
// Map {'s'=>19, 'm'=>13, 'p'=>16}
filterTo(m, (v, k, map) => v>1, null, m);
// Map {'m'=>13, 'p'=>16}  (map "m" modified)
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[Array.filter()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
