// A Javascript string is a sequence of characters enclosed in double or single quotes
console.log("This is a string");
console.log('This is also a string');

// Strings can be concatenated (combined) together

console.log("String one " + 'plus string two')

// String concatenation can also be mix strings with with numbers and expressions

console.log("This is a string and this is a number " + 3.14)

// But be careful!

console.log("Two plus two is not equal to " + 2 + 2)

// Need to force numeric expression evaluation in this case with parens

console.log("But two plus two is equal to " + (2 + 2))

// ES6 introduced templates which allow JS expressions to be embedded in strings

console.log(`This is a string template with an expression ${2 * 2}`)

// Long strings (over multiple lines) can be formed with concatenation or a backslash

console.log("This is a very long string which needs \
to wrap across multiple lines because \
otherwise it may be unreadable.")

// You can create repeating character strings with the repeat method

console.log("*".repeat(10))

// Substrings can be extracted by specifying a start and length

console.log("Hello BUCT".substr(6, 4))

// And substrings can be extracted by specifying a start and end index

console.log("Hello BUCT".substring(6, 10))

// We can find the index of a substring

console.log("React Native".indexOf("Native"))

// We can upper- or lower-case the contents of a string

console.log("abcd".toUpperCase())
console.log("ABCD".toLowerCase())