// Immediately invoked function Expression (IIfe) 
// use of iifi -> global space ke pollution se bachne ke liye hm if ka use karte h 
//  (function chai()
//  {
//     console.log("db connected");
//  })();  // esme semi collon lagate h eame iffi funtion ko ye nhi pta hota h ki kha rukna h es liye hm semi collon ka use karte h 


// iffi conver into arrow function (named iffi )
((name)=>{
    console.log(`BD connected two ${name}`);
})(" yadav g");
