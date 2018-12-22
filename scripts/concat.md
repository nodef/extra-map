Concatenate [maps], like [Array.concat()].

```javascript
const concatOf = require('@extra-map/concat');
// concatOf(<map>...)
// -> <concatenated map>

concatOf(new Map([['a', 'a']]), new Map());
// Map {'a'=>'a'}
concatOf(new Map([['a', 1], ['b', 2]]), new Map([['c', 3], ['d', 4]]));
// Map {'a'=>1, 'b'=>2, 'c'=>3, 'd'=>4}
```


[![extra-map](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-map)

[maps]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[Array.concat()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
