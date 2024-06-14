let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distance2MarsKm = 225000000;
let distance2MoonKm = 384400;
let milesPerKm = 0.621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distance2Markskm);
console.log(typeof distance2MoonKm);
console.log(typeof milesPerKm);

let miles2Mars = distance2MarsKm * milesPerKm;
let hours2Mars = miles2Mars/shuttleSpeedMph;
let days2Mars = hours2Mars/24;
console.log(miles2Mars);
console.log(hours2Mars);
console.log(days2Mars);
console.log(shuttleName + " will take " + days2Mars + " days to reach Mars.");

let miles2Moon = distance2MoonKm * milesPerKm;
let hours2Moon = miles2Moon / shuttleSpeedMph;
let days2Moon = hours2Moon / 24;

console.log(shuttleName + " will take " + days2Moon + " days to reach the Moon.");