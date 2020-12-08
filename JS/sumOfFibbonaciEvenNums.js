// Problem: - https://projecteuler.net/problem=2
// Answer:  4613730
// By considering the terms in the Fibonacci sequence whose
// values do not exceed four million, find the sum of the 
// even-valued terms.
// See ref: - https://en.wikipedia.org/wiki/Fibonacci_number

function fib() {
  const maxNum = 4000000;   // Limit of sequence
  const f0 = 1;             // index 0 value
  const f1 = 2;             // index 1 value
  let n = 0;                // fibbonaci number
  let k = 1;                // Array index
  let sum = 0;              // sum value
  let fibbArr = [f0, f1];   // Initialise first two values of array
  
  // Loop until fibbonaci number is above defined limit
  while (n <= maxNum) {
    
    // Calculate the next fibbonaci number, n, using the index k to define the current and previous numbers
    n = fibbArr[k] + fibbArr[k - 1];
    
    // Add fibbonaci number to the array at the end
    fibbArr.push(n);
    
    // Check if the current number is within the limit and if it is even
    if(n < maxNum && n % 2 === 0) {
      // If True, add the number to the existing sum value
      sum = sum + n;
    }    
    
    // Increment index
    k += 1;
  }
  
  // Return the sum value
  return sum;
}
fib();
