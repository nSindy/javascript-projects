// Initialize Variables below

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKG = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKG = crewMassKG + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let preparedForLiftOff = true;

if (astronautCount <= 7 && astronautStatus === "Ready" && totalMassKG < maximumMassLimit && fuelTempCelcius > minimumFuelTemp && fuelTempCelcius < maximumFuelTemp && fuelLevel === "100%" && weatherStatus === "Clear"){
    preparedForLiftOff === true;
    console.log("Launch conditions achieved. All systems go.");
    console.log("Date: ", date);
    console.log("Time: ", time);
    console.log("Astronaut Count: ", astronautCount);
    console.log("Crew Mass KG: ", crewMassKG);
    console.log("Fuel Mass KG: ", fuelMassKg);
    console.log("Shuttle Mass KG: ", shuttleMassKg);
    console.log("Total Mass KG: ", totalMassKG);
    console.log("Fuel Temp (C): ", fuelTempCelcius);
    console.log("Weather Status: ", weatherStatus);
    console.log("Godspeed, Astronauts!");
} else {
    console.log("ERROR: Launch conditions not met. Launch Scrubbed");
}

