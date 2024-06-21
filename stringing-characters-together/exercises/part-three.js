//Part Three section one

let language = 'JavaScript';
console.log(language.slice(0,1) + language.slice(4,5));

console.log(language.replace("JavaScript", "J") + language.replace("JavaScript", "S"));

console.log(`The abbreviation for "JavaScript" is ${language[0] + language[4]}.`);

let fruit = "Bananas";

console.log(`I like it better when people say "na${fruit.slice(2,7).toLowerCase().replace("s", "z")}" instead of "${fruit}."`);

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

//2. Without using slice(), use method chaining to accomplish the same thing.

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(notTitleCase.replace("t", "T").replace("c", "C"));