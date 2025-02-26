// this is the way of string declare
const name="hitesh"
const repoCount=50;
console.log(name +" " +repoCount) // outdated these type
console.log(` hello my name is ${name} and my age is ${repoCount}`);

// this is also way of declaring string like object
const gameNumber = new String('Ankush')



console.log(gameNumber)
console.log(typeof gameNumber)
console.log (gameNumber[0])
console.log(gameNumber.__proto__)
console.log(gameNumber.length);
console.log(gameNumber.toUpperCase());
console.log(gameNumber.charAt(2))
console.log(gameNumber.indexOf('s'))

const newString=gameNumber.substring(0,4);
console.log(newString)


const anotherString=gameNumber.slice(-4,4);

console.log(gameNumber)
console.log(anotherString)

/*
The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
*/


const str1="   hitesh  "
console.log(str1);
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());


const url="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','_'))
console.log(url.includes('sunder'))

const usesplit="hello my name is ankush yadav"
console.log(usesplit.split(" "))

