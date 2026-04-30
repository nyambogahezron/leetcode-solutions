/**
 * 2627. Debounce
 *
 * Given a function fn and a time in milliseconds t, return a debounced version of that function.
 * A debounced function is a function whose execution is delayed by t milliseconds.
 */

type F = (...args: any[]) => void

export function debounce(fn: F, t: number): F {
    return function(...args) {
        // TODO: Implement your solution here
    }
}
