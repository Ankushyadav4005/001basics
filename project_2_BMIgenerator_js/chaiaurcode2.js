const form =document.querySelector('form')
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    const message =document.querySelector('#message');

    if(height==='' || height<0 || isNaN(height))
    {
        results.innerHTML=`please Enter a valid number ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight))
        {
            results.innerHTML=`please Enter a valid number ${weight}`;
        }
        else
        {
          const BMI=  (weight/((height*height)/10000)).toFixed(2);
          // show the result
          results.innerHTML=`<span>${BMI}</span>`;
          if(BMI<18.6)
          {
            message.innerHTML='you are under weight';

          }
          else if(BMI>18.6 && BMI<=24.9)
          {
            message.innerHTML='you are fit';
          }
          else
          {
            message.innerHTML='you are over weight';
          }
        }
})