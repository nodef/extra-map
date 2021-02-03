import filterAt from "./filterAt";
import {subsequences} from "extra-array";

/**
 * Lists all possible subsets.
 * @param x a map
 * @param n number of entries (-1 => any)
 */
function* subsets<T, U>(x: Map<T, U>, n: number=-1): IterableIterator<Map<T, U>> {
  for(var ks of subsequences([...x.keys()], n))
    yield filterAt(x, ks);
}
export default subsets;
