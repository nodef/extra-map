function concatOf() {
  var z = new Map();
  for(var i=0, I=arguments.length; i<I; i++)
    for(var e of arguments[i])
      z.set(e[0], e[1]);
  return z;
};
module.exports = concatOf;
