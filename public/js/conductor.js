//Accessing elements from HTML/PUG
const regform = document.getElementById('form');
const uname = document.getElementById('name');
const ubd = document.getElementById('bd');
const unin = document.getElementById('nin');
const uha = document.getElementById('ha');

//Accessing errors
const nameError = document.getElementById('nameErr');
const bdError = document.getElementById('bdErr');
const ninError = document.getElementById('ninErr');
const haError = document.getElementById('haErr');


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

    if(ubd.value==''){
        bdError.innerHTML='Field Required';
        bdError.style.color='red';
        ubd.style.border='1px solid red';
        return false
    }
    else if (!ubd.value==''){
        bdError.innerHTML='';
        bdError.style.color='';
        ubd.style.border='1px solid green';
    
    };

    let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if(unin.value==''){
        ninError.innerHTML='Field Required';
        ninError.style.color='red';
        unin.style.border='1px solid red';
        return false
    }
    else if(!unin.value.match(alphanumeric)){
        ninError.innerHTML='NIN  should be a mixture of numbers & letters';
        ninError.style.color='red';
        unin.style.border='1px solid red';
        return false
        
    }
    else if (unin.value.match(alphanumeric)){
        unin.style.border='1px solid green';
    
    };

    // let nameRegex = /^[A-Za-z]+$/;
    if(uha.value==''){
        haError.innerHTML='Field Required';
        haError.style.color='red';
        uha.style.border='1px solid red';
        return false
    }
    else if (!uha.value==''){
        haError.innerHTML='';
        haError.style.color='';
        uha.style.border='1px solid green';
    
    };





    
}
