let form = document.querySelector("form");

let userInfo = {};
let errorMessages = {};


function displayError(name) {
    let elm = form.elements[name]
    elm.nextElementSibling.innerText = errorMessages[name];  
    elm.parentElement.classList.add("error");
    return false;

}

function displaySuccess(name) {
    let elm = form.elements[name]
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.parentElement.classList.remove("error");        
    elm.parentElement.classList.add("success");
   return true;

}

function handleSubmit(event) {
    event.preventDefault();
    
    let elements = event.target.elements;
    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const tel = elements.tel.value;
    const passwordOne = elements.passwordOne.value;
    const passwordTwo = elements.passwordTwo.value;
    let val1, val2, val3, val4, val5;
      
    // console.log({username, name, email, phone, password, passwordCheck});

    //Username
    if(username.length <= 4) {
        errorMessages.username = `Username can't be less than 4`;
       val1 =  displayError("username");
    } else {
        val1 = displaySuccess("username"); 
    }

    //name 
    if(name.split("").some(e => Number(e))) {
        errorMessages.name = `Name can't be numbers`;
       val2 =  displayError("name");
    }else {
       val2 =  displaySuccess("name");
    }

    //Email

    if(!email.includes("@")) {
        errorMessages.email = `Email must contain @`;
       val3 =  displayError("email");
    } else if(email.length < 6) {
        errorMessages.email = `Email must be atleast 6 characters`;
        val3 = displayError("email");
    } else {
        val3 = displaySuccess("email");
    }

    //Phone

    if(!tel.split("").every(e => Number(e))) {
        errorMessages.tel = `Phone numbers can only be a number`;
       val4 =  displayError("tel");
    } else if(tel.length < 7) {
        errorMessages.tel = `Length of the phone number can't be less than 7`;
        val4 = displayError("tel");
    } else {
        val4 = displaySuccess("tel");
    }

    //Password 

    if(passwordOne !== passwordTwo) {
        errorMessages.passwordTwo = `Password and Confirm password must be same`;
        errorMessages.passwordOne = `Password and Confirm password must be same`;
        val5 = displayError("passwordOne");
        val5 = displayError("passwordTwo");
    } else {
        val5 = displaySuccess("passwordOne");
        val5 = displaySuccess("passwordTwo");
    }
    if(val1 && val2 && val3 && val4 && val5) {
        alert("User Added Successfully!");
    }
}






form.addEventListener("submit", handleSubmit);