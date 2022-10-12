/**
 * Due Date : Oct-9 (Sun) eod
 *
 */

const sentence1 = 'Hello Dear, how are you doing';
let result = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in the result1
 * otherwise
 *      assign 10 in the result1
 */
console.log (`\n\nresult1 -> ${result1}`);

const sentence2 = 'Pages That you vIeW in tHis WinDow wont apPeAr in the broWser history AND thEy wont LEaVE other TRACes';
/**
 * replace all instances of a or A with 'Alpha', print the result in console.
 */

let sentence3 = "HeAlTh wAs EArlIer said To Be the abiLity of the bOdy funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'BoDy' in sentence3 (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'BoDy' is present only once. (true or false)
 */

// Q1. the length of sentence-3
let  = '';
let lengthOf_sentence3 = sentence3.lengthOf("HeAlTh wAs EArlIer said To Be the abiLity of the bOdy funcTiOnInG WElL.");
console.log(lengthOf_sentence3);

// Q2. does sentence-3 starts with 'HeaLTh' (ignore cases)
let sentence2AfterReplace_Alpha = sentence2.replace(/a/ig, 'Alpha');
console.log(`\n\nsentence2 -> ${sentence2}\n\n`);
console.log(`\n\nsentence2AfterReplace_Alpha -> ${sentence2AfterReplace_Alpha}\n\n`);

// Q3. does sentence-3 contains with 'Body' (ignore cases)
let sentence3AfterReplace_Body = sentence3.replace(/a/ig, 'Body');
console.log(`\n\nsentence3 -> ${sentence3}\n\n`);
console.log(`\n\nsentence3AfterReplace_Body -> ${sentence3AfterReplace_Body}\n\n`);

// Q4. index of 'BoDy' in sentence3 (ignore cases)
let sentence3_Lowercase = sentence3.toLowerCase();
console.log(sentence3_Lowercase);

let body_Lowercase = 'BoDy'.toLowerCase();
console.log(body_Lowercase);

let indexOf_BoDy = sentence3_Lowercase.indexOf(body_Lowercase);
console.log(indexOf_BoDy);

// Q5. the last-character in sentence-3
let lastIndex = sentence3.length-1
let charAtLastIndex = sentence3.charAt(lastIndex);
console.log(`\n\nChar at index-${lastIndex} is '${charAtLastIndex}'\n\n`);

// Q6. word 'Body' is present only once. (true or false)
sentence3 = "BODies is bodybody our temple";
let sentence3_L = sentence3.toLowerCase();
let BoDy_L = 'BoDy'.toLowerCase();
let indexOf_value = sentence3_L.indexOf(BoDy_L);
let lastIndexOf_value = sentence3_L.lastIndexOf(BoDy_L);
let result1 = indexOf_value === lastIndexOf_value && indexOf_value >= 0;
console.log(`is word 'BoDy' present only once -> ${result}`);
