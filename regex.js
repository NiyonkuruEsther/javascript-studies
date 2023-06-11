let string = "Hello world";
// !but then it doesn't change the original string
//With tis regex we can be abe to search for everything that belongs in the brackets
// if we add something at the end of our square brackets then we mean what is outside the brackets has to be following directly what starts from the square brackets
let match = string.replace(/[ ]world/g, "a");
console.log(match);

// Then for taking everything and excluding only what is specified you'll nee to use a power symbol (^)
let except = string.replace(/[^e]/g, "a");
// you can specify the starting and the ending alphabets separated by a hyphen even numbers
// To include the capitals you can write the same range with the
// But you can't enter like a phone number or unlimited numbers but you can add a + sign after the square brackets will create the infitnite number match
// But then you can always specify the limit numbers just after the square brackets in sme {} brackets
console.log(except);
//  you can put the range of matches for any thing e.g: {4, 6} means for 4,5,6 digits it will match
// \d will match all the number digits, \w will match all the words but symbols exclusive, \s will match any white space includin the tabs, \t will match only tabs
// Then you can have brackets that shows the number of repetitions that you want after every specification characters
// With the use of a question mark then you mean that what the ? mark is following can appear once or zero times

let optional = /a?h?/g.test(string);
console.log(optional);

// Regular expressions, commonly known as regex, are patterns used to match and manipulate strings in various programming languages, including JavaScript. Here are some key rules and concepts related to regex:

// 1. Literal Characters: Most characters in a regex pattern are treated as literal characters and match themselves. For example, the regex pattern "hello" matches the string "hello" exactly.

// 2. Metacharacters: Certain characters have special meanings in regex patterns and are called metacharacters. Some common metacharacters are:

//    - . (dot): Matches any single character except a newline.
//    - ^ (caret): Matches the beginning of a line or string.
//    - $ (dollar sign): Matches the end of a line or string.
//    - * (asterisk): Matches zero or more occurrences of the preceding character or group.
//    - + (plus): Matches one or more occurrences of the preceding character or group.
//    - ? (question mark): Matches zero or one occurrence of the preceding character or group.
//    - [] (square brackets): Defines a character class, matching any character within the brackets.
//    - | (pipe): Acts as an OR operator, allowing alternative matches.
//    - () (parentheses): Groups characters or expressions together.

// 3. Character Classes: Character classes allow you to define a set of characters to match at a particular position in the pattern. Some examples of character classes are:

//    - [abc]: Matches any single character "a", "b", or "c".
//    - [a-z]: Matches any lowercase letter from "a" to "z".
//    - [0-9]: Matches any digit from 0 to 9.
//    - [^abc]: Matches any character except "a", "b", or "c".

// 4. Quantifiers: Quantifiers specify how many times a character or group should occur. Some commonly used quantifiers are:

//    - {n}: Matches exactly "n" occurrences.
//    - {n,}: Matches "n" or more occurrences.
//    - {n,m}: Matches between "n" and "m" occurrences (inclusive).

// 5. Escaping Metacharacters: If you want to match a metacharacter as a literal character, you need to escape it with a backslash (\). For example, to match a literal dot (.), you need to use \. in the pattern.

// 6. Flags: Regex patterns can be accompanied by flags that modify the behavior of the pattern matching. In JavaScript, commonly used flags include:

//    - i: Case-insensitive matching.
//    - g: Global matching (finds all occurrences rather than stopping after the first match).
//    - m: Multiline matching.

// These are some essential rules and concepts to keep in mind when working with regular expressions. Regular expressions can become quite complex and powerful, allowing for sophisticated pattern matching and manipulation of strings.
