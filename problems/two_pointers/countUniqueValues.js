// write a function called countUniqueValues which accepts a sorted array and counts the unique values in the array.  there can be negative numbers in the array, but it will always be sorted

/*
  input:  a sorted array
  output:  an integer equal to the amount of unique values in the array
  example: [1, 1, 2] returns 2 => 1 is counted once, 2 is counted once
  plan:  1. set an empty hash map 
         2. loop through my array
         3. set each char as a key in the hash map with its frequency as its value
         4. call Object.keys(hash).length to get the count of unique characters
         OR
         1. use a two pointer system to count the streaks of each char
         2. set count = 0;
         3. i = 0; j = 0;
         4. if arr[i] === arr[j], count++ to start our streak;
         5. j++
         6. keep incrementing j until i no longer equals j
         7. when j equals something else, count++ again
         8. bring i = j
         OR
         1.  set empty array
         2.  loop through to grab each char of input arr
         3.  check to 

*/

function countUniqueValues(arr) {
  // if (arr.length === 0) return 0;

  // let count = 0;
  // let i = 0;
  // let j = 0;

  // while (j <= arr.length) { // j = 6, false
  //   if (arr[i] === arr[j]){ // true
  //     j++ // j = 7
  //   } else {
  //     count++ // count = 2
  //     i = j // i = 6, j = 6
  //   }
  // }
  // return count

  // input: a sorted array
  // output: a number representing the count of unique characters within the array
  // example: [1, 1, 1] => 2 (because 1 is counted once, and 2 is counted once; thus, 2 is the final output)
  // plan:  two pointers
  // 1. set pointer 1 = 0 to initiate start of streak
  // 2. set pointer 2 inside a for loop
  // 3. loop through array
  // 4. if pointer 1's char === pointer 2's char, don't do anything
  // 5. if pointer 1's char !== pointer 2's char, that ends our streak of a unique chars, so we need to increment pointer 1 (as this represents our count)
  // 6. repeat loop until j <= arr.length;
  // 7. return i at end of loop

  let i = 0;
  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j] // why is this necessary?  because by setting i = j, i keep a reference of the start of a new streak if i's current streak isn't over yet and j's now on a new streak => i have to reset i to be on j's new streak or else i'll just keep counting the same streak
    }
  }
  return i;
}


console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 5])); // 5




// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // [1, ]
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7])); // 7
// console.log(countUniqueValues([-2, -1, 0, 1, 1]))
