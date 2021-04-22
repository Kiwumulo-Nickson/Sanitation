//Accessing elements from HTML/PUG
const regform = document.getElementById('form');
const uname = document.getElementById('username');
const uha = document.getElementById('ha');

//Accessing errors
const nameError = document.getElementById('nameErr');
const haError = document.getElementById('haErr');

regform.addEventListener('submit', (event)=>{
    // event.preventDefault();
    validate();
});


const validate = ()=>{
    if(uname.value==''){
        nameError.innerHTML='Field Required';
        nameError.style.color='red';
        uname.style.border='1px solid red';
        return false
    }
    else if (!uname.value==''){
        nameError.innerHTML='';
        nameError.style.color='';
        uname.style.border='1px solid green';
    
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
}
