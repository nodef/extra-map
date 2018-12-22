Delete specified keys from [map].

```javascript
const deleteAll = require('@extra-map/delete-all');
// deleteAll(<map>, <keys>, [begin=0], [end])
// -> <map>

var m = new Map([['e', 5], ['d', 4], ['s', 19]]);
deleteAll(new Map([['r', 18], ['e', 5], ['d', 4], ['s', 19]]), m.keys());
// Map {'r'=>18}
deleteAll(new Map([['t', 20], ['e', 5], ['d', 4], ['s', 19]]), ['e', 'd', 's']);
// Map {'t'=>20}
deleteAll(new Map([['t', 20], ['e', 5], ['d', 4], ['s', 19]]), ['e', 'd', 's'], 1);
// Map {'t'=>20, 'e'=>5}
deleteAll(new Map([['t', 20], ['e', 5], ['d', 4], ['s', 19]]), ['e', 'd', 's'], 1, 2);
// Map {'t'=>20, 'e'=>5, 's'=>19}
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
