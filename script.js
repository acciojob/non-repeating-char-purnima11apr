function firstNonRepeatedChar(str) {
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

function firstNonRepeatedChar(str) {
  if (str.length === 0) {
    return null;
  }

	const charCount = {}; 

	for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

	 for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char; 
    }
  }

	 return null;

}

