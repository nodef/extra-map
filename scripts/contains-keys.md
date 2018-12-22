Check if [map] contains all keys.

```javascript
const containsKeys = require('@extra-map/contains-keys');
// containsKeys(<map>, <keys>, [begin=0], [end])
// -> true | false

var m = new Map([['H', 'Histidine'], ['I', 'Isoleucine'], ['L', 'Leucine']]);
containsKeys(m, new Set('IL'));
// true  (m con I,L)
containsKeys(m, ['G',  'I', 'J']);
// false (m !con G,I,J)
containsKeys(m, ['G',  'I', 'J'], 1);
// false (m !con I,J)
containsKeys(m, ['G',  'I', 'J'], 1, 2);
// true (m con I)
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
