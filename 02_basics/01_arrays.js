
// ***********Array****************
const myArr=[1,2,3,4,5,6,7]
const arr1=["saktiman", "naagraj","ankush"]
const arr2= new Array(1,2,3,4,5)
console.log(myArr[0]);
console.log(myArr.length);
myArr.push(8)
console.log(myArr)

console.log(myArr.length);
myArr.pop()
console.log(myArr.length);
console.log(myArr)
myArr.unshift(0)
myArr.unshift(0)
console.log(myArr);
console.log(myArr.includes(9))  // if element is present than they give true and not present than they give ans false
console.log(myArr.indexOf(9))  
const newArr= myArr.join()

console.log(myArr)
console.log(newArr)

console.log(typeof newArr)

const Arr3=[1,2,3,4,5,6,7];  
console.log(Arr3)
console.log(Arr3.slice(1,3))   //   [ 2, 3, 4 ]
console.log( Arr3)
console.log(Arr3.splice(1,3))  //   [ 1, 5, 6, 7 ]
console.log( Arr3)



