
// primitive dataype
// 7 types : String,number ,BigInt, null, undefined,Symbol, Boolean

const isLoggedIn=false;
const outsideTemp=null;
let useEmail;

const id = Symbol('123')
const AnotherId =Symbol('123')//  ans==>  id !=AnotherId
console.log(id==AnotherId);

const bigNumber=1255624562456245243145n  // agar tum n ka use kar lete ho to ye automatic BigInt me convert ho jata h 


// reference typeof(non primitive datatype)
// Array ,Object,functions


// Array declare
const heros=["Ankush" ,"Rahul ","vipin"]

// object declare

let myObj1=
{
    name:"Ankush",
    age :22,
}
console.log(myObj1);

// declare function
const myFunction=function()
{
    console.log("hello word")
}


// typeof
/* 
//  https://neutrondev.com/mystery-history-typeof-null-javascript/
Undefuned ==> undefined
Null==> Object
Boolean ==> Boolean
Number ==>Number
String==> String
function==> return funtion karta h but esko object function bola jata h
*/
