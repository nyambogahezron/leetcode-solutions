/**
 * 2715. Timeout Cancellation
 *
 * Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
 *
 * After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
 *
 * Example 1:
 * Input: fn = (x) => x * 5, args = [2], t = 20
 * Output: [{"time": 20, "returned": 10}]
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    // TODO: Implement your solution here
    return () => {};
}
