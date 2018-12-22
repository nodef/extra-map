const pickValues = require('map-pickvalues');
const isCollection = require('iterable-iscollection');
function pickValuesAs(map, key, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  if(!isCollection(key)) return pickValues(map, [key], bgn, end, z, z0)[z0];
  return pickValues(map, key, bgn, end, z, z0);
};
module.exports = pickValuesAs;
