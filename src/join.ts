import type {Entries} from "./_types";

/**
 * Joins entries together.
 * @param x a map
 * @param sep separator (,)
 * @param asc associator (=)
 */
function join<T, U>(x: Entries<T, U>, sep: string=",", asc: string="="): string {
  var a = "";
  for(var [k, v] of x)
    a += k+asc+v+sep;
  return a.slice(0, -sep.length);
}
export default join;
