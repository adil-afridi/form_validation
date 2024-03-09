let nameError = document.querySelector(".name_error")
let phoneError = document.querySelector(".phone_error")
let emailError = document.querySelector(".email_error")
let messageError = document.querySelector(".message_error")
let submitError = document.querySelector(".submit_error")

function validateName(){
    let name = document.querySelector(".uname").value

    if(name.length == 0){
        nameError.innerHTML = 'name is required'
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name'
        return false
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"> </i>'
    return true
}

function validatePhone(){
    let phone = document.querySelector(".phone_no").value

    if(phone.length == 0){
        phoneError.innerHTML = 'phone is required'
        return false
    }
    if(phone.length != 11){
        phoneErrorError.innerHTML = 'phone no should be 11 digits'
        return false
    }

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'only digit please'
        return false
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"> </i>'
    return true
}

function validateEmail(){
    let email = document.querySelector('.email').value 

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false 
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Invalid Email'
        return false
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"> </i>'
    return true
}


function validateMessage(){
    let message = document.querySelector(".message").value

    let required = 30
    let left = required - message.length

    if(left > 0){
        messageError.innerHTML = left + ' more char is required'
        return false 
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"> </i>'
    return true 
}




function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'flex'
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(() => {
            submitError.style.display = 'none'
        }, 3000);
        return false
    }else{
        alert("Form has been submited!")
    }
}