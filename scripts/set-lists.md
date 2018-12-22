Set specified [lists] to [map].

```javascript
const setLists = require('@extra-map/set-lists');
// setLists(<map>, <lists>, [begin=0], [end])
// -> <map>

var m = new Map([['e', 5], ['d', 4], ['s', 19]]);
setLists(new Map([['r', 18]]), [m.keys(), m.values()]);
// Map {'r'=>18, 'e'=>5, 'd'=>4, 's'=>19}
setLists(new Map([['t', 20]]), [['e', 'd', 's'], [5, 4, 19]]);
// Map {'t'=>18, 'e'=>5, 'd'=>4, 's'=>19}
setLists(new Map([['t', 20]]), [['e', 'd', 's'], [5, 4, 19]], 1);
// Map {'t'=>18, 'd'=>4, 's'=>19}
setLists(new Map([['t', 20]]), [['e', 'd', 's'], [5, 4, 19]], 1, 2);
// Map {'t'=>18, 'd'=>4}
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[lists]: https://www.npmjs.com/package/lists-is
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
