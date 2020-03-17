Filter [map] with values of specified keys, like [_.pick()].

```javascript
const pickValues = require('@extra-map/pick-values');
// pickValues(<map>, <keys>, [begin=0], [end], [target=[]], [at])
// -> <target>

var m = new Map([['i', 9], ['n', 14], ['c', 3]]);
pickValues(m, ['n', 'i']);
// [14, 9]
pickValues(m, ['n', 'i', 'c'], 1);
// [9, 3]
pickValues(m, ['n', 'i', 'c'], 1, 2);
// [9]
pickValues(m, ['n', 'i', 'c'], 1, 2, [10, 11]);
// [10, 11, 9]
pickValues(m, ['n', 'i', 'c'], 1, 2, [10, 11], 1);
// [10, 9]
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map 
[_.pick()]: http://underscorejs.org/#pick
