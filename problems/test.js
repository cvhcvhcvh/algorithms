

function test(str) { // happy
  const obj = {};

  for (let char of str) { // h
    if (obj[char]) { // obj[h] === undefined
      obj[char]++
    } else {
      obj[char] = 1
    }
  }
  return obj
}

console.log(test("happy"))