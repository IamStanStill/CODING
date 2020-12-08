function fib() {
  const maxNum = 4000000;
  const f0 = 0;
  const f1 = 1;
  let n = 2;
  let k = 1;
  let sum = 0;

  let fibbArr = [f0, f1];
  let fibbArrEven = [];
	
  // By considering the terms in the Fibonacci sequence whose
  // values do not exceed four million, find the sum of the 
  // even-valued terms.
  
  // Create Fibbonaci Array
  while (n <= maxNum) {
    n = fibbArr[k] + fibbArr[k - 1];
    fibbArr.push(n)
    k = k + 1;
  }
  
  // Extract the even numbered items and add to new array
  for (let i = 0; i < fibbArr.length; i++) {
  	if(fibbArr[i] < maxNum && fibbArr[i] % 2 === 0) {
    	fibbArrEven.push(fibbArr[i]);
    }
  }
  
  // Find the sum of the items in the array
  for (let i = 0; i < fibbArrEven.length; i++) {
  	sum = sum + fibbArrEven[i];
  }
  
  for (let i = 0; i < fibbArrEven.length; i++) {
    console.log(fibbArrEven[i]);
  }
  
  console.log("Sum = " + sum);
}

fib();
