Check if [map] contains all [entries].

```javascript
var contains = require('@extra-map/contains');
// contains(<map>, <entries>, [begin=0], [end])
// -> true | false

var m = new Map([['s', 19], ['o', 15], ['l', 12], ['a', 1], ['r', 18]]);
contains(m, new Map([['s', 19], ['o', 15], ['l', 12]]));
// true  (m con s:19,o:15,l:12)
contains(m, [['s', 16], ['a', 1], ['l', 12], ['r', 13]]);
// false (m !con s:16,a:1,l:12,r:13)
contains(m, [['s', 16], ['a', 1], ['l', 12], ['r', 13]], 1);
// false (m !con a:1,l:12,r:13)
contains(m, [['s', 16], ['a', 1], ['l', 12], ['r', 13]], 1, 3);
// true (m con a:1,l:12)
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[entries]: https://www.npmjs.com/package/entries-is
