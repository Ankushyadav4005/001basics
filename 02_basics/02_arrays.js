 
 const marbal_Heros=["Ankush","Rahul","Shivam"]
 const new_Heros=["Anshu","Janvi","Anushka"]
 //marbal_Heros.push(new_Heros)
 //console.log(marbal_Heros)
 //console.log(marbal_Heros[3][1])

const newArr= marbal_Heros.concat(new_Heros)  // The .concat() method returns a new array instead of modifying marbal_Heros in place.
 console.log(newArr)

 const all_new_heros=[...marbal_Heros,...new_Heros]
 console.log(all_new_heros)


 const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const real_Array=another_Array.flat(Infinity);
 console.log(real_Array)
 console.log(Array.isArray("Hitesh"))
 console.log(Array.from("Hitesh"))  // strin convert into Array  ans==> [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name : "Hitesh"}))  // ye direct conver nhi kar paayega esme hmko batan padega ki ki ko convert karna h ya fir value ko 

const score1=100
const score2=200
const score3=300

const NewArray= Array.of(score1,score2,score3)
console.log(Array.of(score1,score2,score3))