//Accessing elements from HTML/PUG
const regform = document.getElementById('form');
const uname = document.getElementById('name');
const uln = document.getElementById('ln');
const usn = document.getElementById('username');
const upass = document.getElementById('pass');

//Accessing error
const nameError = document.getElementById('nameErr');
const ulnError = document.getElementById('lnErr');
const usnError = document.getElementById('unameErr');
const passError = document.getElementById('passErr');

regform.addEventListener('submit', (event)=>{
    // event.preventDefault();
    validate();
});

const validate = ()=>{
    // let nameRegex = /^[A-Za-z]+$/;
    if(uname.value==''){
        nameError.innerHTML='Field Required';
        nameError.style.color='red';
        uname.style.border='1px solid red';
        return false
    }
    // else if (!uname.value.match(nameRegex)){
    //     nameError.innerHTML='Names should be written in letter format only';
    //     nameError.style.color='red';
    //     uname.style.border='1px solid red';
    //     return false
    // }
    else if (!uname.value===''){
        nameError.innerHTML='';
        nameError.style.color='';
        uname.style.border='1px solid green';
    
    };

    if(uln.value==''){
        ulnError.innerHTML='Field Required';
        ulnError.style.color='red';
        uln.style.border='1px solid red';
        return false
    }
    else if (!uln.value==''){
        ulnError.innerHTML='';
        ulnError.style.color='';
        uln.style.border='1px solid green';
    
    };

    let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if(usn.value==''){
       usnError.innerHTML='Field Required';
       usnError.style.color='red';
        usn.style.border='1px solid red';
        return false
    }
    else if(!usn.value.match(alphanumeric)){
       usnError.innerHTML='Username should be a mixture of numbers & letters';
       usnError.style.color='red';
        usn.style.border='1px solid red';
        return false
        
    }
    else if (usn.value.match(alphanumeric)){
        usn.style.border='1px solid green';
    
    };

    let Regex2=/^\d{10}$/;
    if(upass.value==''){
         passError.innerHTML='Field Required';
         passError.style.color='red';
         upass.style.border='1px solid red';
         return false
     }
     else if(!upass.value.match(Regex2)){
         passError.innerHTML='Password  should be 10 digits long';
         passError.style.color='red';
         upass.style.border='1px solid red';
         return false
     }
     else if (upass.value.match(Regex2)){
        upass.style.border='1px solid green';
    
    };
    


}

