/**
 * 2721. Execute Asynchronous Functions in Parallel
 *
 * Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.
 * All the promises should be executed in parallel.
 */

type Fn<T> = () => Promise<T>

export function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    // TODO: Implement your solution here
    return Promise.resolve([]);
}
