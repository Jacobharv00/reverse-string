// Create a function that takes a string as an parameter
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

console.log( reverseString( 'Jake' ) )
console.log( reverseString( 'John' ) )
console.log( reverseString( 'Steve' ) )
console.log( reverseString( 'Joe' ) )
console.log( reverseString( 'Chelsea' ) )
console.log( reverseString( 'Ivan' ) )
console.log( reverseString( 'Emily' ) )
