/**
 * 2619. Array Prototype Last
 *
 * Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
 * If there are no elements in the array, it should return -1.
 */

declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    // TODO: Implement your solution here
    return -1;
};

export {};
