
const score= 400;
console.log(score)

const balance =new Number(100)
console.log(balance)


const str1=balance.toString();
console.log(str1);
console.log(str1.length);
console.log(balance.toFixed(3)); // Ans==>  100.000

const otherNumber=23.8966  
console.log(otherNumber.toPrecision(3));
const hundreds=1000000 ;  
console.log(hundreds.toLocaleString('en-IN'));  // indian ke hisab se commas lga dega ye 



//******************maths************************************* */

/*
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.pow(2,3));
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

*/
// console.log(Math.random());
//console.log((Math.random()*10) +1)  // random function ke duara random value hi aati h 0 or 1 ke beech me agar hm usne 10 se multi kar de to bo ek element leftshift ho jayega or ek case jaha valye 0.0234 h es case se bachne ke liye h +1 ka use karte h ab koi o digit aage nhi aaayega 

const min=10;
const max=20;

console.log(Math.floor(Math.random()* (max-min+1)) +min) 




