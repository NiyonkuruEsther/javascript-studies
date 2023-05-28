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
