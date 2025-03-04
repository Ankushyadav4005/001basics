  const user={
    username:"Ankush",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username}  welcome to my website`)
        console.log(this)

      }
  }
    user.welcomeMessage()
    user.username="Elu"
    user.welcomeMessage() 

   // console.log(this)

     // remark ==> brower ke ander jo object hota h bo window object hota h 


    //  function chai()
    //  {
    //   let username="Ankush"
    //   console.log(this.username);
      
    //   console.log(this);
    // }
    //  chai();





    //     const chai=function ()
    //  {
    //   let username="Ankush"
    //   console.log(this.username);
    //  }
    //  chai();



           const chai= ()=> {
      let username="Ankush"
      console.log(this);
     }
     chai();



     //basic arrow function

    //  const addtwo=(num1,num2)=>{
    //   return num1+num2;

    //  }
    //  console.log(addtwo(4,9))


    //implicite return arrow function

    const addtwo=(num1,num2)=> num1+num2
    const addtwo=(num1,num2)=> (num1+num2)

     
     console.log(addtwo(5,5));


     // object return karna hota to 
     const addtwo1=(num1,num2)=> ({username:"hitesh"})
     console.log(addtwo1(3,4));