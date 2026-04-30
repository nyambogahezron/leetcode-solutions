/**
 * 2677. Chunk Array
 *
 * Given an array arr and a chunk size size, return a chunked array.
 * A chunked array contains the original elements in arr, but consists of subarrays each of length size.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

export function chunk(arr: Obj[], size: number): Obj[][] {
    // TODO: Implement your solution here
    return [];
}
