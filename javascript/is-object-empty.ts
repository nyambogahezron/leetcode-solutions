/**
 * 2727. Is Object Empty
 *
 * Given an object or an array, return if it is empty.
 * An empty object contains no key-value pairs.
 * An empty array contains no elements.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

export function isEmpty(obj: Obj): boolean {
    // TODO: Implement your solution here
    return false;
}
