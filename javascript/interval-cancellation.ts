/**
 * 2725. Interval Cancellation
 *
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
 * The function fn should be called with args immediately and then called again every t milliseconds.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    // TODO: Implement your solution here
    return () => {};
}
