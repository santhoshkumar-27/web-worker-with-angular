/**
 * Helper function to calculate factorial based on input
 */
export function factorialCalculator(num: number): number {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factorialCalculator(num - 1));
    }
}