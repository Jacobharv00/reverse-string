function reverseString ( str ) {
  // set a variable to an empty string
  let reversedString = ''
  // create for loop that looks at the str.length and -1
  for ( let i = str.length - 1; i >= 0; i-- ) {
    // add that string back starting at the beginning
    reversedString += str[i]
  }
  // return that string in reversed order
  return reversedString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Create a function that takes a string as an parameter
