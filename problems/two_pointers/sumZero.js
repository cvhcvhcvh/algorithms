// write a function called sumZero which accepts a sorted array of integers.  The function should find the first pair where the sum is 0.  Return an array that includes both the values that sum to zero or undefined if no pair exists.

/*
  input:  a SORTED array
  output:  a pair of values in an array that sum to zero
  example:  [5, -5] or [1, -1]
  plan: 
      1.  set a pointer at index 0, set a pointer at my last index
      2.  loop through my sorted array
      3.  sum the values together
      4.  if they equal 0, return [arr[i], arr[j]]
      5.  if the total < 0, i++, if the total > 0, j--
      6.  go to next iteration

*/

function sumZero(array) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    let sum = array[i] + array[j]
    if (sum === 0) {
      return [array[i], array[j]]
    } else if (sum < 0) {
      i++
    } else { 
      j--
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-3, -1, 0, 1, 2]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));