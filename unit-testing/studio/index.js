const input = require("readline-sync");


let launchCode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
  launchOutput: function launchOutput(num){
   if (num % 2 === 0 && num % 3 !== 0 && num % 5 !== 0){
   } return "Launch!";
  }
  
}

console.log(launchCode.launchOutput(2));
module.exports = launchCode;

