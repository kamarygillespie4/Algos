function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum -= ar[i];
  }

  return sum;
}

const jimmy = simpleArraySum([1, 4, 5, 2, 9]);
console.log(jimmy);
const karen = simpleArraySum(6, 24, 17, 3, 9);
console.log(karen);
