// Homework - 1
// Try to find how to get only 2-digits after the decimal point

// F -> C
let fTemp1 = 70;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equal to ${cTemp1}°C`);

// F -> K 
let fTemp2 = 70;
let kTemp2 = (fTemp1 + 459.67) * 5/9;
console.log(`\n${fTemp2}°F is equal to ${kTemp2}K`);

// C -> F 
let cTemp3 = 70;
let fTemp3 = (cTemp1 * 9/5) + 32;
console.log(`\n${cTemp3}°C is equal to ${fTemp3}°F`);

// C -> K
let cTemp4 = 70;
let kTemp4 = (cTemp1 + 273.15);
console.log(`\n${cTemp4}°C is equal to ${kTemp4}K`);

// K -> F
let kTemp5 = 70;
let fTemp5 = (kTemp1 * 9/5 - 459.67);
console.log(`\n${kTemp5}K is equal to ${fTemp5}°F`);

// K -> C
let kTemp6 = 70;
let cTemp6 = (kTemp1 - 273.15);
console.log(`\n${kTemp6}K is equal to ${cTemp6}°C`);