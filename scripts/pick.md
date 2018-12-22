Filter [map] with specified keys, like [_.pick()].

```javascript
const pick = require('@extra-map/pick');
// pick(<map>, <keys>, [begin=0], [end], [target=new Map()])
// -> <target>

var m = new Map([['i', 9], ['n', 14], ['c', 3]]);
pick(m, ['n', 'i']);
// Map {'n'=>14, 'i'=>9}
pick(m, ['n', 'i', 'c'], 1);
// Map {'i'=>9, 'c'=>3}
pick(m, ['n', 'i', 'c'], 1, 2);
// Map {'i'=>9}
pick(m, ['n', 'i', 'c'], 1, 2, new Map([['e', 5]]));
// Map {'e'=>5, 'i'=>9}
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[_.pick()]: http://underscorejs.org/#pick
