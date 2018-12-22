const pick = require('map-pick');
const isCollection = require('iterable-iscollection');
function pickAs(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=new Map()) {
  if(!isCollection(key)) return map.get(key);
  return pick(map, key, bgn, end, z);
};
module.exports = pickAs;
