import type {Entries, testFn} from './_types';

function everyIf<T, U>(x: Entries<T, U>): boolean {
  for(var [, v] of x)
    if(!v) return false;
  return true;
}

function everyTest<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): boolean {
  for(var [k, v] of x)
    if(!fn.call(ths, v, k, x)) return false;
  return true;
}

/**
 * Checks if all values satisfy a test.
 * @param x a map
 * @param fn test function (v, k ,x)
 * @param ths this argument
 */
function every<T, U>(x: Entries<T, U>, fn: testFn<T, U>=null, ths: object=null): boolean {
  if(fn) return everyTest(x, fn, ths);
  else return everyIf(x);
}
export default every;
