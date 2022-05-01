// write a function called maxSubArraySum which accepts an array of integers and a number called n.  The function should calculate the max sum of n consecutive elements in the array

// input: an array of integers and n, a number representing a collection of consecutive elements within the array
// output: a positive integer representing the maximum sum of n consecutive elements
// example: [1, 2, 5], 2 => 7 (because 2 + 5 = 7 and that's greater than 1 + 2 = 3)
// plan:
// set a variable max = -Infinity
// set a for loop with i = 0;
// set a variable window = array.slice(i, n)
// sum the window
// if the window is greater than max, max = window
// repeat
// return max
// OR
// sliding window:
//  plan:
//  highLevelOverview => set temp and max to 0, find max, reset temp to again equal max
//  set a variable maxSum equal to 0;
//  set a variable tempSum equal to 0;
//  loop through array until n
//  set maxSum += array[i]
//  after loop ends, set tempSum = maxSum;
//  then, start another loop where i = n; iterate up until the length of the array, incrementing i;
//  reset tempSum to be tempSum - arr[i - n] + arr[n];
//  set maxSum = max(temp, max);
//  return max

function maxSubArraySum(arr, n) {
  // nested loop basically:
  // if (!arr.length) return null
  // let max = -Infinity;

  // for (let i = 0; i < arr.length; i++) {
  //   let window = arr.slice(i, n);
  //   let sum = window.reduce((a, b) => a + b)
  //   if (sum > max) {
  //     max = sum;
  //   }
  //   n++
  // }
  // return max;

  // sliding window: 
  let maxSum = 0; // 0
  let tempSum = 0; // 0

  for (let i = 0; i < n; i++){ 
    maxSum += arr[i] // maxSum = 6;
  }
  tempSum = maxSum; // tempSum = 6
  for (let i = n; i < arr.length; i++){ // i = 2
    tempSum = tempSum - arr[i - n] + arr[i] // tempSum = 6 - arr[0] + arr[2]
//                                             tempSum = 6 - 4 + 1 => 3
    maxSum = Math.max(tempSum, maxSum) // maxSum = Math.max(3, 6) => 6
  }
  return maxSum
}
//                             -  9  -
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 3))
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4))
console.log(maxSubArraySum([4, 2, 1, 6], 2))
// console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
// console.log(maxSubArraySum([], 2));
