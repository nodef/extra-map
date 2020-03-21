Check if two [maps] are equal.

```javascript
var equal = require('@extra-map/equal');
// equal(<map1>, <map2>)
// -> true | false

var a = new Map([['l', 4], ['o', 6]]);
equal(a, new Map([['l', 4], ['o', 6]]));
// true
equal(a, new Map([['l', 4], ['x', 6]]));
// false
equal(a, new Map([['l', 4]]));
// false
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[maps]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
