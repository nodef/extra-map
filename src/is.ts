/**
 * Checks if value is map.
 * @param v value
 */
function is(v: any): v is Map<any, any> {
  return v instanceof Map;
}
export default is;
