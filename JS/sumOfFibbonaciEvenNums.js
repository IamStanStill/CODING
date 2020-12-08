// Problem: - https://projecteuler.net/problem=2
// Answer:  4613730
// By considering the terms in the Fibonacci sequence whose
// values do not exceed four million, find the sum of the 
// even-valued terms.
// See ref: - https://en.wikipedia.org/wiki/Fibonacci_number

function fib() {
  const maxNum = 4000000;
  const f0 = 1;
  const f1 = 2;
  let n = 2; 
  let k = 1;
  let sum = 0;
  let fibbArr = [f0, f1];
  
  while (n <= maxNum) {
    n = fibbArr[k] + fibbArr[k - 1];
    fibbArr.push(n);
    if(n < maxNum && n % 2 === 0) {
      sum = sum + n;
    }    
    k += 1;
  }
  return sum;
}
fib();
