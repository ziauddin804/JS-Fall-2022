// Due date : Oct-19 EOD

/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */
 let numbers = [23, 12, 43, 10, 5, -10];
 let total = null;

 console.log('\nUsing for-loop\n');
 for (let i=0 ; i <= numbers.length-1 ; i++) {
    total = total + numbers[i];
 }
 let avg = total / numbers.length;
 console.log(`avg -> ${avg}\n`);

 /**
  * Q2. Reverse a given string (word by word)
  * 
  * 'have a great day' -> day great a have
  * 'good morning' -> morning good
  * 'Learn' -> Learn
  * 
  * 
  */
 let str2 = 'have a great day'   // day great a have
 let reverseStr2 = '';

 const arr2 = str2.split(' ');

 for (let i=arr2.length-1 ; i >= 0 ; i--) {            
    reverseStr2 = reverseStr2 + arr2[i] + ' ';
 }


 console.log(`reverseStr2 -> ${reverseStr2.trim()}`);
 
 /**
  * Q3. Create abbreviation for a sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe every day' -> YNWAED
  * 'good Morning' -> 'GM'
  * 'hello dear, how are you doing?' -> HDHAYD
  */
 let str3 = 'good Morning';
 let abbr = ' ';

 let firstCharacter = str3.substring(0,1); 
 
 console.log(`abbr'${firstCharacter}'`);
 