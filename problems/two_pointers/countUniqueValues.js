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

*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let count = 0;
  let i = 0;
  let j = 0;

  while (j <= arr.length) { // j = 6, false
    if (arr[i] === arr[j]){ // true
      j++ // j = 7
    } else {
      count++ // count = 2
      i = j // i = 6, j = 6
    }
  }
  return count
}
                          //                      i   j
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
