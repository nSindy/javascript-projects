// launchcode.test.js code:
const launchCode = require('../index.js');

describe("Testing launchcode", function(){

    test("organization value should be 'nonprofit'", function(){
          expect(launchCode.organization).toBe('nonprofit');
    });

    test("executiveDirector should be 'Jeff'", function(){
      expect(launchCode.executiveDirector).toBe('Jeff');
});

test("percentageCoolEmployees should be 100", function(){
  expect(launchCode.percentageCoolEmployees).toBe(100);
});

test("programsOffered should include 'Web Development', 'Data Analysis', and 'Liftoff'", function(){
  
  expect(launchCode.programsOffered).toContain('Web Development', 'Data Analysis', 'Liftoff');
});
  
test("should return 'Launch!' when passed a num ONLY divisible by 2", function(){
  expect(launchCode.launchOutput(2)).toBe('Launch!');
});


});