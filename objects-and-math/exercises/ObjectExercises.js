let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 5,
   move: function(n){return Math.floor(Math.random()*11);}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 4,
   move: function(n){return Math.floor(Math.random()*11);}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function(n){return Math.floor(Math.random()*11);}
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 2,
   move: function(n){return Math.floor(Math.random()*11);}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 1,
   move: function(n){return Math.floor(Math.random()*11);}
};

let myCreatures = [superChimpOne, superChimpTwo, salamander, beagle, tardigrade];
console.log(myCreatures);

function crewReport(creature){
   return (`${creature.name} is a ${creature.species}. They are ${creature.age} years old and ${creature.mass} kilograms. Their ID is ${creature.astronautID}.'`);
}

/* console.log(crewReport(tardigrade));

function fitnessTest(arr){
   let distance;
   let turns = [];
for (i = 0; i < arr.length; i++){
   distance += arr["move"];
   turns++;

}
   if (!distance >= 20){
      fitnessTest(arr);
   } else {
      return `${Object["name"]} took ${turns} turns to take 20 steps.`;
   }

} */

function fitnessTest(arr){
   let standings = [], numSteps, turns;

   for (let i = 0; i < arr.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += arr[i].move();
       turns++;
    }

    standings.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
}

return standings;
}


console.log(fitnessTest(myCreatures));

/* function assignID(arr){
   let randomized = [];
   for (i = 0; i < arr.length; i++){
   arr[i]["astronautID"] = Math.ceil(Math.random()*10);
   randomized.push(arr[i]["astronautID"]);
   }; 

if (!arr[i]["astronautID"].includes(randomized[i])){
   arr.push(randomized[i]);
} else {
   assignID(arr);
   return randomized, arr;
   }
}

assignID(myCreatures); */






// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
