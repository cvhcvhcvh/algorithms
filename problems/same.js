// write a function called same which accepts two arrays.  the function should return true if every value in the first array has its corresponding value squared in the second array.

// input: two arrays
// output: boolean
// example:  arr1 = [2], arr2[4] => should return true;
// plan:  1. set an empty hash map
//        2. loop through arr1
//        3. take each char of arr1 and set the char as a key in my map with its value === char^2
//        4. in same loop, check arr2[i] and see if it's equal to map[char]
//        5. if false, return false
//        6. return true after the loop if we haven't returned false yet

function same(arr1, arr2) {
  // const freq = {};

  // for (let i = 0; i < arr1.length; i++){
  //   if (!freq[arr1[i]]) {
  //     freq[arr1[i]] = arr1[i] * arr1[i];
  //   }
  // }
  // for (let i = 0; i < arr2.length; i++) {
  //   freq[arr1[i]] -= arr2[i]
  // }
  // if (!Object.values(freq).reduce((a, b) => a + b)) {
  //   return true
  // }
  // return false

  const freq1 = {};
  const freq2 = {};

  for (let val of arr1) {
    if (!freq1[val]) {
      freq1[val] = 1;
    } else {
      freq1[val]++;
    }
  }
  for (let val of arr2) {
    if (!freq2[val]) {
      freq2[val] = 1;
    } else {
      freq2[val]++;
    }
  }

  for (let key in freq1) {
    if (!(key * key in freq2)){
      return false;
    }
    if (freq2[key * key] !== freq1[key]) {
      return false;
    }
  }
  return true
}

console.log(same([2, 3, 4], [4, 16, 9]));
console.log(same([2, 3, 4], [16, 9, 4]));
