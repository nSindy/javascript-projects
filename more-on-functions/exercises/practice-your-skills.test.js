const tripleFunc = require('./practice-your-skills');

describe("The TripleNum function", function() {

    test("should throw error if num is undefined", function() {
        expect( function() {
            tripleNum();
        }).toThrow(new Error("Miss me with that undefined stuff!"));
    });


});