import type {Entries, testFn} from './_types';

function someIf<T, U>(x: Entries<T, U>): boolean {
  for(var [, v] of x)
    if(v) return true;
  return false;
}

function someTest<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): boolean {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) return true;
  return false;
}

/**
 * Checks if any value satisfies a test.
 * @param x a map
 * @param fn test function (v, k ,x)
 * @param ths this argument
 */
function some<T, U>(x: Entries<T, U>, fn: testFn<T, U>=null, ths: object=null): boolean {
  if(fn) return someTest(x, fn, ths);
  else return someIf(x);
}
export default some;
