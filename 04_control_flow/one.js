// conditional operator
// < ,>,<=,>=,==,!=,===,!==

// const temperature=60;
// if(temperature==50)
// {
//     console.log("temperature is less than 50")
// }
// else{


// console.log("temperature is greaterthan 50")
// }





// const score=200;
// if(score>100)
// {
//     var power="fly"; // var keyword ko hm scope ke bahar bhi likh sakte h es liye const ya var ka use karte h 
//       console.log( `user power: ${power}`)
// }

// console.log( `girls power is: ${ power}`) ;


// implicite scope 
// const balance=1000;
// if(balance>500)  console.log("test")


   
// const balance1= 1000;
// if(balance1<500)
// {
//     console.log(" less than 500");
// }
// else if(balance1<750)
// {
//     console.log("less than 750")
// }
//     else if(balance1 < 900)
//     {
//         console.log("less than 900")
//     }
//     else{
//         console.log("less than 1200")
//     }


const userLLOgedIn=true;
const debitCart=true;
if(userLLOgedIn  && debitCart)
{
    console.log("Allow to buy course")
}
 


const loggedInEmail=false;
const  loggedInGoogal=true;
if(loggedInEmail  || loggedInGoogal)
{
    console.log("Allow for shoaping")
}

