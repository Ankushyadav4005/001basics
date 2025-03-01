// singleton ==> jab bhi koi object constructor ke through banega to bo singleton object hoga 

// object literals ki tarha declare karte h to singleton nhi banrega 

Object.create  // declare as constructor
const obj1={}   // declare as object literal

// object ke ander hm ker or value dono ko define karte h 

// object leteral

// create a symbol
const mySym=Symbol("key1")

const obj2 = {
    name :" Ankush",
    "full_Name": "Ankush Yadav",
    age: 22,
    mySym:"mykey1",
    location:"Saifai",
    Email: "ankush4005@gamil.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday" ,"Saturday"]   // declare as arrays
}

console.log(obj2.name)
// console.log(obj2["full_Name"])
// console.log(obj2["name"])
// console.log(obj2.mySym)
//console.log(obj2.lastLoginDays[1])
//console.log()
console.log(obj2.mySym)
console.log(typeof(mySym))

 // shi se padna h ki symbal ka use object me kaise  karte h 

 obj2.Email= "elu@gamil.com"
 //Object.freeze(obj2)
 obj2.Email="vimleshyadav@gmail.com"
console.log(obj2.Email)
console.log(obj2)
 
obj2.greeting1=function()
{
    console.log("hello js user");
}

obj2.greeting2=function()
{
    console.log(`hello js users, ${this.full_Name} and my age is${this.age}`);
}
console.log(obj2.greeting1())

console.log(obj2.greeting2());