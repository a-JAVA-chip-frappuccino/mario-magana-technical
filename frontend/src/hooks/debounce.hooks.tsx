export function useDebounce<T>(value: T, delay: number): T {
    /*
        * Debouncing is a technique used to limit the rate at which a function is called. 
            It ensures that a function is not called more often than a specified delay between calls. 
            This is useful in scenarios where a function is triggered frequently, such as in input fields where 
            the user is typing, to prevent unnecessary calls and improve performance.

            IMPLEMENT IT HERE:
    */
    console.log('Debouncing with delay:', delay);
    return value;
}