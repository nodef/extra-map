// Datatype methods:
Map.is = require('./is');

// About methods:
Map.equal = require('./equal');

// Search methods:
Map.keyOf = require('@extra-entries/key-of');
Map.keysOf = require('@extra-entries/keys-of');
Map.includes = require('@extra-entries/includes');

// Transform methods:
Map.fromLists = require('./from-lists');
Map.setAll = require('./set-all');
Map.setLists = require('./set-lists');
Map.deleteAll = require('./delete-all');
Map.contains = require('./contains');
Map.containsKeys = require('./contains-keys');
Map.join = require('@extra-entries/join');
Map.pick = require('./pick');
Map.pickAs = require('./pick-as');
Map.pickValues = require('./pick-values');
Map.pickValuesAs = require('./pick-values-as');
Map.concat = require('./concat');

// Functional methods:
Map.forEach = require('@extra-entries/for-each');
Map.some = require('@extra-entries/some');
Map.every = require('@extra-entries/every');
Map.find = require('@extra-entries/find');
Map.findKey = require('@extra-entries/find-key');
Map.findAll = require('@extra-entries/find-all');
Map.findAllKeys = require('@extra-entries/find-all-keys');
Map.reduce = require('@extra-entries/reduce');
Map.filter = require('./filter');
Map.map = require('./map');
module.exports = Map;
