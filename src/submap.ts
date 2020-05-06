import arrayPermutation$ from '@extra-array/permutation-update';
import random from './_random';

function submapNum<K, V>(x: Iterable<[K, V]>, n: number, r: number): Map<K, V> {
  var a = arrayPermutation$(Array.from(x), n, r);
  return new Map<K, V>(a);
}

function submapAny<K, V>(x: Iterable<[K, V]>, r: number): Map<K, V> {
  var rnd = random(r), a = new Map<K, V>();
  for(var [k, v] of x)
    if(rnd()>=0.5) a.set(k, v);
  return a;
}

/**
 * Gives an arbitrary submap.
 * @param x a map
 * @param n number of entries (-1 => any)
 * @param r random seed 0->1
 */
function submap<K, V>(x: Map<K, V>, n: number=-1, r: number=Math.random()): Map<K, V> {
  var X = x.size;
  if(n>=0) return n>X? null:submapNum(x, n, r);
  return submapAny(x, r);
}
export default submap;
