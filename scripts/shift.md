Get first entry from [map] and remove it, like [Array.shift()].

```javascript
const shift = require('@extra-map/shift');
// shift(<map>)
// -> <first entry>

shift(new Map([['r', 18], ['e', 5], ['d', 4]]));
// ['r', 18]
shift(new Map());
// null
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[Array.shift()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
