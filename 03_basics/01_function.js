

function myfirst()
{
console.log("h")
console.log("I")
console.log("T")
console.log("E")
console.log("s")
console.log("h")
}
 //myfirsty ==> this is only reference type 
 //myfirst()  ==> print the function value


/*


 function addTwoNumber(number1,number2)
 {
    console.log(number1+number2);
 }

 const result=addTwoNumber(5,6);
 console.log(result)


 */

 function addTwoNumber2(number1,number2)
 {
   // let result=number1,number2
    //return result;
    return number1,number2
 }
 const result=addTwoNumber2(5,8)
// console.log("Result:",result)

 function loginUserMessage(username)
 {
   if(username===undefined)
   {
      console.log("Please Enter your argumnet ")
      return
   }
        return `${username} locked in`
 }
 
 const res=loginUserMessage("Ankush") // jab value pass nhi ki jayegi to undefined aayega
 console.log(res)


 /*
function calculateCartPrice(val1,val2,...num1)  //rest operator
{
   return num1;
}
 console.log(calculateCartPrice(200,400,500,2000))

 */

/*
 function calculateCartPrice(...num1)  //rest operator
{
   return num1;
}
 console.log(calculateCartPrice(200,400,500,2000))

 */


 // how to use object in function
  
 const user={
   username:"Ankush",
   age:22
 }

 function handleObject(anyobject)
 {
   console.log(`username is ${anyobject.username} and age is${anyobject.age}`)
 }

 //   handleObject(user)
  // hm direct bhi object pass kar sakte h function me 
 handleObject(        
   {
      username:"sam",       
      agr:55
   }
 )


 const mynewArray=[100,200,300,400]
 function returnseconValue(values)
 {
       return values[1];
 }

 console.log(returnseconValue(mynewArray))
