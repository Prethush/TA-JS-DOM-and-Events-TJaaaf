let form = document.querySelector("form");

function userName(userElem) {

    let userValue = userElem.value;
    let userError = userElem.nextElementSibling;
    console.log(userError);
    if(userValue.length < 4) {
        userError.innerText = `UserName can't be less than 4 characters`;
        userElem.parentElement.classList.add("error");
        return false;
    } else {
        userError.innerText = "";
        userElem.parentElement.classList.add("success");
        userElem.parentElement.classList.remove("error");
        return true;
    }
}

function fullName(nameElem){
    let userError = nameElem.nextElementSibling;
    if(nameElem.value.split("").some(e => Number(e))) {
        userError.innerText = `Name can't be numbers`;
        nameElem.parentElement.classList.add("error");
        return false;
    } 
      else {
         userError.innerText = "";
         nameElem.parentElement.classList.add("success");
         nameElem.parentElement.classList.remove("error");
         return true;
    }
}

function email(userEmail) {
    let userError = userEmail.nextElementSibling;
    if(!userEmail.value.includes("@") || userEmail.value.length < 6) {
        userError.innerText = `Not a Valid Email`;
        userEmail.parentElement.classList.add("error");
        return false;
        
    } else {
        userError.innerText = "";
        userEmail.parentElement.classList.add("success");
        userEmail.parentElement.classList.remove("error");
        return true;
   }
    
}

function passwordValidatiion(password, confirmPassword){
    let userError = confirmPassword.nextElementSibling;

    if(password.value !== confirmPassword.value) {
        userError.innerText = `Enter the correct password`;
        console.log(userError);
        confirmPassword.parentElement.classList.add("error");
        password.parentElement.classList.add("error");
        return false;
    } else {
        userError.innerText = "";
        confirmPassword.parentElement.classList.add("success");
        confirmPassword.parentElement.classList.remove("error")
        password.parentElement.classList.add("success");
        password.parentElement.classList.remove("error");
        return true;
   }

}

function phone(userPhone) {
    let userError = userPhone.nextElementSibling;
    if(!userPhone.value.split("").every(e => Number(e))) {
        userError.innerText = `Phone numbers can only be a number`;
        userPhone.parentElement.classList.add("error");
        return false;
    } else if(userPhone.value.length < 7) {
        userError.innerText = `Length of phone number can't be less than 7`;
        userPhone.parentElement.classList.add("error");
        return false;
    }  else {
        userError.innerText = "";
        userPhone.parentElement.classList.add("success");
        return true;
   }
}
function handleSubmit(event) {
    event.preventDefault();

    let userElem = event.target.elements.username;
    let nameElem = event.target.elements.name;
    let userEmail = event.target.elements.email;
    let userPhone = event.target.elements.tel;
    let password = event.target.elements.passwordOne;
    let confirmPassword =  event.target.elements.passwordTwo;
    
   let value1 =  userName(userElem);
   let value2 = fullName(nameElem);
    let value3 = email(userEmail);
    let value4 = phone(userPhone);
    let value5 = passwordValidatiion(password, confirmPassword);

    if(value1 && value2 && value3 && value4 && value5) {
        alert(`User Added Successfully!`);
    }
        

}






form.addEventListener("submit", handleSubmit);