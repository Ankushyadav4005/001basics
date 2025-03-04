
if(true)
{
    let a=10;
    const b=20;
    var c=30   // agar esko scope ke bahar se excess karna chaho to ho jaye so dont use var keyword
}
//
// console.log(a)
//console.log(b)
//console.log(c)

// nested scope
    
function one()
{
    const username="hitesh"
     
    function two()
    {
        const website= "youtube"
        console.log(username);
   
         console.log(website);
    }
     two()
}
one()

if(true)
{
    const username="yadav g"
    if(username=="yadav g")
    {
        const website="hitesh"
        console.log(username + website)
    }
}
//console.log(addone(5))
function addone(num)
{
    return num+1
}

//console.log(addone(5))


const addtwo=function (num)
{
    return num+2;
}
console.log(addtwo(8));
