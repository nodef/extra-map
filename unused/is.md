Check if value is [map].

```javascript
const is = require('@extra-map/is');
// is(<value>)
// -> true | false

is(new Map([['google.co.in', '172.217.31.195']]);
// true
is(['microsoft.com', '23.96.52.53']);
// false
is({'aol.com': '207.200.74.55'});
// false
is(127001);
// false
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
