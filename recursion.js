// function thisIsAProblem() {
//   thisIsAProblem();
// }
/*Without a base case, your recursive function will keep calling itself until
you run out of memory. What this means is that you have too many functions on the call stack and your stack "overflows" (that's where the name StackOverflow comes from)! */

// Example of Recursion
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
// console.log(sumRange(5)); //15
// console.log(sumRange(10)); //55

// 2^4 = 2 * 2^3;
// 2^3 = 2 * 2^2;
// 2^2 = 2 * 2^1;
// 2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(2, 4)); //16
// console.log(power(3, 3));//27

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(5)); //120
// console.log(factorial(7)); //5040

function all(array, condition) {
  for (var i = 0; i < array.length; i++) {
    if (!condition(array[i])) {
      return false;
    }
  }
  return true;
}
const arr = [1, 2, 3, 4];
const condition = (val) => {
  return val > 0;
};
// console.log(all(arr, condition));//true
