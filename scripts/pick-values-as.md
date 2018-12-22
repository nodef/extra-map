Filter [map] with values of specified key(s), like [_.pick()].

```javascript
const pickValuesAs = require('@extra-map/pick-values-as');
// pickValuesAs(<map>, <value(s)>, [begin=0], [end], [target=[]], [at])
// -> <value> (if single key) | <target> (if multiple keys)

var m = new Map([['i', 9], ['n', 14], ['c', 3]]);
pickValuesAs(m, 'n');
// 14
pickValuesAs(m, ['n', 'i']);
// [14, 9]
pickValuesAs(m, ['n', 'i', 'c'], 1);
// [9, 3]
pickValuesAs(m, ['n', 'i', 'c'], 1, 2);
// [9]
pickValuesAs(m, ['n', 'i', 'c'], 1, 2, [10, 11]);
// [10, 11, 9]
pickValuesAs(m, ['n', 'i', 'c'], 1, 2, [10, 11], 1);
// [10, 9]
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[_.pick()]: http://underscorejs.org/#pick
