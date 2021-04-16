// Accessing elements in the HTML form
const regform = document.getElementById('form');
const uname=document.getElementById('username');
const upast=document.getElementById('pi');
const uemail=document.getElementById('email');
//Acessing errors
const nameError= document.getElementById ('nameErr')
const pastError= document.getElementById ('piErr')
const emailError= document.getElementById ('emailErr')
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


//     let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
//     if(upass.value==''){
//         passError.innerHTML='Field Required';
//         passError.style.color='red';
//         upass.style.border='1px solid red';
//         return false
//     }
//     else if(!upass.value.match(alphanumeric)){
//         passError.innerHTML='Username  should be a mixture of numbers & letters';
//         passError.style.color='red';
//         upass.style.border='1px solid red';
//         return false
        
//     }
//     else if (upass.value.match(alphanumeric)){
//         upass.style.border='1px solid green';
    
//     };
//     // let text = /^[A-Za-z]+$/
//     let Regex5=/^\d{1}$/;
//     if(uemail.value==''){
//        emailError.innerHTML='Field Required';
//        emailError.style.color='red';
//        uemail.style.border='1px solid red';
//        return false
//    }
//    else if(!uemail.value.match(Regex5)){
//        emailError.innerHTML='Ward No should be one digit ';
//        emailError.style.color='red';
//        uemail.style.border='1px solid red';
//        return false
//    }
//    else if (uemail.value.match(Regex5)){
//     uemail.style.border='1px solid green';

// };





}


      

   


