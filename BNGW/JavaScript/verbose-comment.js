/**
 * This function calculates the factorial of a given non-negative integer.
 *
 * @param {number} n - The non-negative integer for which to calculate the factorial.
 * @returns {number} The factorial of the input number.
 * @throws {Error} If the input is negative.
 */
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}