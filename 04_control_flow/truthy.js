// const Email="ankushyadav4005@gamil.com"
// if(Email)
// {
//     console.log("got uesr email")
// }
// else{
//     console.log("Don't user email")
// }


// Remark
// truth value ==> false,0,-0,BigInt 0n,"", null,unefined,NaN
// eske alaba jo bhi h bo truth value hoti h 
//truthy value==> "0",'false',[]," ",{},function(){}->empty funtion bolte h 






//  const Email=""
//  if(Email.length===0)
//  {
//     console.log("Array is empty");
//  }


// for object

// const emptyobj={}
// if(Object.keys(emptyobj).length===0)
// {
// console.log("Object is empty")
// }




//  Nullish Coalescing Operator (??) : null undefined

let val1;
//val1=5??10
//val1=null ??10
//val1= undefined ?? 15
val1=null ?? 10 ?? 20
console.log(val1)


// ternary operator
//condition ? true : false

const iceCream=800;
iceCream <100 ? console.log("less than 100") : console.log("more than 100")
