const form =document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value);    
    const height = parseInt(document.querySelector('#height').value);
    const result =document.querySelector('#results');
    const conclution = document.querySelector('#conclution');
    if( height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight ${weight}`
    }
    else{
      
        const bmi =(weight /((height* height)/10000)).toFixed(2);
          result.innerHTML =`<span>${bmi} </span> `;
          if(bmi < 18.6 && bmi > 0){
            conclution.innerHTML = "you are under Weight catagories";
          } else if(bmi > 18.6 && bmi < 24.9){
            conclution.innerHTML = "you are under Normal catagories";
          }else if(bmi > 24.9){
            conclution.innerHTML = "you are under Over Weight catagories";
          }
          else{
            conclution.innerHTML = "give a valid range";
          }
    }
    
})