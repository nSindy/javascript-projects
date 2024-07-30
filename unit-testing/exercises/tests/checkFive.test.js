const checkFive = require('../checkFive');
const numFive = require('../checkFive');

describe("The checkFive function", function(){

    test("should verify if num is less than 5", function() {
       let output = checkFive(2);
       expect(output).toEqual("2 is less than 5.");
    });

    test ("should verify if num is equal to 5", function() {
        let output = checkFive(5);
        expect(output).toEqual('5 is equal to 5.');
    })

    test ("should verify if num is greater than 5", function() {
        let output = checkFive(7);
        expect(output).toEqual('7 is greater than 5.');
    })

 });