
let myArray = ['element1', 'element2', 'element3'];
let myPartArray = ['partElement1', 'partElement2', 'PartElement3'];




//.........................................................
// opgave 1 tilføj element4 til enden myArray

const pushed = myArray.push('element4');

// din kode her...
console.log(myArray);
console.log(pushed);

// opgave 1 fjern element4 igen

const popped = myArray.pop('element4');

// din kode her...
console.log(myArray);
console.log(popped);
//.........................................................

// opgave 2 tilføj element4 til starten myArray

const shifted = myArray.shift('element1')

// din kode her...
console.log(myArray);
console.log(shifted);

// opgave 2 fjern element4 igen

const unshifted = myArray.unshift('element1')

// din kode her...
console.log(myArray);
console.log(unshifted);

//.........................................................

let myFruits = ['æble', 'pære', 'banan', 'appelsin', 'citron'];
let myVegetables = ['salat', 'blomkål', 'spidskål', 'agurk'];


/* opgave 3 splice()
 tilføj mandarin og fersken efter pære i myFruits
 */

// din kode her...

myFruits.splice(2, 0, "mandarin", "fersken");

console.log(myFruits);

// opgave 3 fjern mandarin og fersken igen

// din kode her...
myFruits.splice(2, 2);

console.log(myFruits);

//.........................................................

/* opgave 4 slice()
træk blomkål og spidskål ud af arrayen myVegetables
og ind i en ny array der hedder myCabbage*/

// din kode her...
const myCabbage = myVegetables.slice(0,3);


console.log(myCabbage);

//.........................................................
/* opgave 5 concat()
 sæt arrays myFruits og myVegetables sammen i en ny array der hedder myYummies
 */


// din kode her...

let myYummies = myFruits.concat(myVegetables);



console.log(myYummies);

//.........................................................

/* opgave 6 sort()
 sorter array  myYummies fra opgave 5
 */


// din kode her...

myYummies.sort();

console.log(myYummies);

/* opgave 6 reverse()
 vend rækkefølgen på  array  myYummies fra opgave 6
 */


// din kode her...

myYummies.reverse();

console.log(myYummies);

//.........................................................

/* opgave 7 map()
 brug map funktionen på myNumbers, og skab en ny array, der hedder myNextNumbers hvor alle tal er 7 større end 
 tallene i myNumbers. brug igen map funktionen på din nye array, myNextNumbers. og skab en ny array
  der hedder myLastNumbers der indeholder tal der er 12 gange så store som tallene i myNextNumbers.
 */
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// din kode her...

let myNextNumbers = myNumbers.map((x) => x * 7 );

let myLastNumbers = myNextNumbers.map((x) => x *12);


console.log(myNextNumbers);
console.log(myLastNumbers);

//.........................................................
/* opgave 8 filter()
skriv en kode der kan give os en ny array, udfra myNames, hvor navnet keld ikke findes i.
*/
let myNames = ['keld', 'søren', 'jens', 'tine', 'keld', 'ib', 'lene', 'keld', 'frederikke', 'line', 'kurt'];


const result =  myNames.filter((word) => word != 'keld');

console.log(result);

//.........................................................


