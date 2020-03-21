Create [map] from [lists] of keys and values.

```javascript
const fromLists = require('@extra-map/from-lists');
// fromLists(<lists>)

a = ['real', 'donald', 'trump'];
fromLists([a.keys(), a]);
// Map {0=>'real', 1=>'donald', 2=>'trump'}
a = {w1: 'trump', w2: 'vs', w3: 'kim'};
fromLists([Object.keys(a), Object.values(a)]);
// Map {'w1'=>'trump', 'w2'=>'vs', 'w3'=>'kim'}
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[lists]: https://www.npmjs.com/package/lists-is
