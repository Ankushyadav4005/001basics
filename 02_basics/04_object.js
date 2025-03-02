const tinderUser=new Object()  // this is a sinleton object
const tinder={}  // this is non singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"ankushyadav4005@gmail.com",
    fullName:{
        userfullName:{
            firstname:"Ankush",
            lastname:"yadav"
        }
    }

}

const obj1={1:"a" ,2:"b",3:"c"};
const obj2={4:"d",5:"e"};
const obj3={obj1,obj2}
//const obj4=Object.assign({},obj1,obj2)
//console.log(obj1==obj4)
//console.log(obj3)
//console.log(obj4)
const obj5={...obj1,...obj2}
console.log(obj5)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//console.log(regularUser.email)
//console.log(regularUser.fullname)
//console.log(regularUser.fullName.userfullName.firstname)

const course={
    coursename:"js in hindi",
    price:"999",
    age:56,
    courseInstructor:"Hitesh"
}
const {courseInstructor:instructor}=course
//console.log(courseInstructor)
console.log(instructor)