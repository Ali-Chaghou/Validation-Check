let pswrd = document.querySelector('#pswrd');
let toggleBtn = document.querySelector('#toggleBtn');

let lowerCase = document.querySelector('#lower');
let upperCase = document.querySelector('#upper');
let digit = document.querySelector('#number');
let specialChar = document.querySelector('#special');
let minLength = document.querySelector('#length');

// show hide password

toggleBtn.onclick = () => {
    if(pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    } else {
        pswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }  
}


let checkPassword = (data) => {
    // jacascript regular expression pattern
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    // lower case validation check
    if(lower.test(data)){
        lowerCase.classList.add('valid');
    }else{
        lowerCase.classList.remove('valid');
    };

    // upper case validation check
    if(upper.test(data)){
        upperCase.classList.add('valid');
    }else{
        upperCase.classList.remove('valid');
    };

    // number case validation check
    if(number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    };

    // special charater case validation check
    if(special.test(data)){
        specialChar.classList.add('valid');
    }else{
        specialChar.classList.remove('valid');
    };
        
    // minlength 8 case validation check
    if(length.test(data)){
        minLength.classList.add('valid');
    }else{
        minLength.classList.remove('valid');
    };
}