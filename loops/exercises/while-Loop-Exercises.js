const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel =0, astronauts = 0, shuttleAltitude = 0;  

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)){
  fuelLevel = input.question("Enter starting fuel level. ");
  fuelLevel = Number(fuelLevel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (astronauts < 1 || astronauts > 7 || isNaN(astronauts)){
  astronauts = input.question("Enter number of astronauts. ");
  astronauts = Number(astronauts);
}
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel - 100*astronauts >= 0){
  shuttleAltitude += 50;
  fuelLevel -= astronauts*100;
}
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (shuttleAltitude >= 2000){
  console.log(`The shuttle gained an altitude of ${shuttleAltitude}km. Orbit achieved!`);
} else console.log(`The shuttle gained an altitude of ${shuttleAltitude}km. Failed to reach orbit.`);