let myDate= new Date();  // current ki date print ho jayegi
console.log(myDate)  //==> Thu Feb 27 2025 19:13:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString());//  ans ==>Thu Feb 27 2025 19:13:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  // ans==>Thu Feb 27 2025
console.log(myDate.toLocaleString());    // ans==>  2/27/2025, 7:13:53 PM
console.log(typeof myDate);  //ans => object


let myCreatedDate= new Date(2023,0,23);
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023
let myCreatedDate1= new Date(2023,0,23,5,3);
console.log(myCreatedDate1.toLocaleString()); //1/23/2023, 5:03:00 AM
let myCreatedDate2= new Date("2023-01-24");
