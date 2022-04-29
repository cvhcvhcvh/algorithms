// given two strings, write a function to determine if the second string is an anagram of the first.  an anagram is a word, phrase, or name, formed by rearranging the letters of another, such as "cinema", formed from "iceman"

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === "" || str2 === "") return true;
  const anagram = {};

  for (let i = 0; i < str1.length; i++) {
    if (!anagram[str1[i]]) {
      anagram[str1[i]] = 1
    } else {
      anagram[str1[i]]++
    }
  }
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!anagram[char]) {
      return false
    } else {
      anagram[char] -= 1
    }
  }
  // if (!Object.values(anagram).reduce((a, b) => a + b)) {
  //   return true;
  // }
  return true;
  
}

console.log(isAnagram("iceman", "cinema"));
console.log(isAnagram("iceman", "franks"));
console.log(isAnagram("", "yo"));
