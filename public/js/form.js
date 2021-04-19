// Accessing elements in the HTML form
const regform = document.getElementById('form');
const uname=document.getElementById('username');
const upast=document.getElementById('pi');
const unin=document.getElementById('nin');
const uha=document.getElementById('ha');
const udln=document.getElementById('dln');
const ugender=document.getElementById('gender');
//Acessing errors
const nameError= document.getElementById ('nameErr')
const pastError= document.getElementById ('piErr')
const ninError= document.getElementById ('ninErr')
const haError= document.getElementById ('haErr')
const dlnError= document.getElementById ('dlnErr')
const genderError= document.getElementById ('genderErr')
 // Add eventlistener to the form
 regform.addEventListener('submit', (event)=>{
    // event.preventDefault();
    validate();
});
const validate = ()=>{
    let nameRegex = /^[A-Za-z]+$/;
    if(uname.value==''){
        nameError.innerHTML='Field Required';
        nameError.style.color='red';
        uname.style.border='1px solid red';
        return false
    }
    else if (!uname.value.match(nameRegex)){
        nameError.innerHTML='Names should be written in letter format only';
        nameError.style.color='red';
        uname.style.border='1px solid red';
        return false
    }
    else if (uname.value.match(nameRegex)){
        uname.style.border='1px solid green';
    
    };
    let text = /^[A-Za-z]+$/;
    // let Regex5=/^\d{1}$/;
    if(upast.value==''){
       pastError.innerHTML='Field Required';
       pastError.style.color='red';
       upast.style.border='1px solid red';
       return false
   }
   else if(!upast.value.match(text)){
       pastError.innerHTML='Ward No should be one digit ';
       pastError.style.color='red';
       upast.style.border='1px solid red';
       return false
   }
   else if (upast.value.match(text)){
    upast.style.border='1px solid green';

};

    let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-13])[A-Za-z0-9]+$/;
    if(unin.value==''){
       ninError.innerHTML='Field Required';
       ninError.style.color='red';
        unin.style.border='1px solid red';
        return false
    }
    else if(!unin.value.match(alphanumeric)){
       ninError.innerHTML='Username  should be a mixture of numbers & letters';
       ninError.style.color='red';
        unin.style.border='1px solid red';
        return false
        
    }
    else if (unin.value.match(alphanumeric)){
        unin.style.border='1px solid green';
    
    };
//     let text = /^[A-Za-z]+$/;
//     // let Regex5=/^\d{1}$/;
//     if(upast.value==''){
//        pastError.innerHTML='Field Required';
//        pastError.style.color='red';
//        upast.style.border='1px solid red';
//        return false
//    }
//    else if(!upast.value.match(text)){
//        pastError.innerHTML='Ward No should be one digit ';
//        pastError.style.color='red';
//        upast.style.border='1px solid red';
//        return false
//    }
//    else if (upast.value.match(text)){
//     upast.style.border='1px solid green';

// };

}


      

   


