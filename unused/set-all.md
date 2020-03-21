Set specified [entries] to [map].

```javascript
const addAll = require('@extra-map/set-all');
// setAll(<map>, <entries>, [begin=0], [end])
// -> <map>

setAll(new Map([['r', 18]]), new Map([['e', 5], ['d', 4]]));
// Map {'r'=>18, 'e'=>5, 'd'=>4}
setAll(new Map([['t', 20]]), [['e', 5], ['d', 4], ['s', 19]]);
// Map {'t'=>20, 'e'=>5, 'd'=>4, 's'=>19}
setAll(new Map([['t', 20]]), [['e', 5], ['d', 4], ['s', 19]], 1);
// Map {'t'=>20, 'd'=>4, 's'=>19}
setAll(new Map([['t', 20]]), [['e', 5], ['d', 4], ['s', 19]], 1, 2);
// Map {'t'=>20, 'd'=>4}
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[entries]: https://www.npmjs.com/package/entries-is
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
