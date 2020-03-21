Filter [map] with specified key(s), like [_.pick()].

```javascript
const pickAs = require('@extra-map/pick-as');
// pickAs(<map>, <key(s)>, [begin=0], [end], [target=new Map()])
// -> <value> (for single key) | <target> (for multiple keys)

var m = new Map([['i', 9], ['n', 14], ['c', 3]]);
pickAs(m, 'n');
// 14
pickAs(m, ['n', 'i']);
// Map {'n'=>14, 'i'=>9}
pickAs(m, ['n', 'i', 'c'], 1);
// Map {'i'=>9, 'c'=>3}
pickAs(m, ['n', 'i', 'c'], 1, 2);
// Map {'i'=>9}
pickAs(m, ['n', 'i', 'c'], 1, 2, new Map([['e', 5]]));
// Map {'e'=>5, 'i'=>9}
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[_.pick()]: http://underscorejs.org/#pick
