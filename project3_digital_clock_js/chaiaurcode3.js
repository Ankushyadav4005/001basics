const clock=document.getElementById('clock');
const date=new Date()
console.log(date.toLocaleString());
setInterval(function(){
    const date=new Date()
    //console.log(date.toLocaleString());
    //clock.innerHTML=date.toLocaleString();
    clock.innerHTML=date.toLocaleTimeString();
},1000)