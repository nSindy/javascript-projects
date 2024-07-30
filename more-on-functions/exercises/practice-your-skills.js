//Create an anonymous function and set it equal to a variable.

const { triggerAsyncId } = require("async_hooks");

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

tripleNum = function(num) {
    if (typeof num === 'undefined') {
        throw (new Error("Miss me with that undefined stuff!"));
    } else if (typeof num === 'string') {
        return "ARRR!"
    } else {
        return num * 3;
    }
    
}

try {
    console.log(tripleNum(banana));
} catch(err) {
    console.log("Miss me with that undefined stuff!");
}

console.log(tripleNum(5));
console.log(tripleNum("bigtime"));

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let newArr = arr.map(tripleNum);
console.log(newArr);


module.exports = tripleNum; 