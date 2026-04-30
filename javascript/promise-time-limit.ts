/**
 * 2637. Promise Time Limit
 *
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function.
 * fn takes arguments provided to the time limited function.
 */

type Fn = (...params: any[]) => Promise<any>;

export function timeLimit(fn: Fn, t: number): Fn {
    return async function(...args) {
        // TODO: Implement your solution here
    }
}
