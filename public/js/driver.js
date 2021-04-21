//Accessing elements from HTML/PUG
const regform = document.getElementById('form');
const uname = document.getElementById('username');
const unin = document.getElementById('nin');
const uha = document.getElementById('ha');
const ubd = document.getElementById('bd');
const udln = document.getElementById('dln');
const upi = document.getElementById('pi');
const ugender = document.getElementById('gender');

//Accessing errors
const nameError = document.getElementById('nameErr');
const ninError = document.getElementById('ninErr');
const haError = document.getElementById('haErr');
const bdError = document.getElementById('bdErr');
const dlnError = document.getElementById('dlnErr');
const piError = document.getElementById('piErr');
const genderError = document.getElementById('genderErr');


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
    //  let alphanumeric = /^((?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{13})+$/;
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

    if(udln.value==''){
        dlnError.innerHTML='Field Required';
        dlnError.style.color='red';
        udln.style.border='1px solid red';
        return false
    }
    else if (!udln.value==''){
        dlnError.innerHTML='';
        dlnError.style.color='';
        udln.style.border='1px solid green';
    
    };

    if(upi.value==''){
        piError.innerHTML='Field Required';
        piError.style.color='red';
        upi.style.border='1px solid red';
        return false
    }
    else if (!upi.value==''){
        piError.innerHTML='';
        piError.style.color='';
        upi.style.border='1px solid green';
    
    };

    // if(ugender.value==''){
    //     genderError.innerHTML='Field Required';
    //     genderError.style.color='red';
    //     ugender.style.border='1px solid red';
    //     return false
    // }
    // else if (!ugender.value==''){
    //     genderError.innerHTML='';
    //     genderError.style.color='';
    //     ugender.style.border='1px solid green';
    
    // };

    
}
