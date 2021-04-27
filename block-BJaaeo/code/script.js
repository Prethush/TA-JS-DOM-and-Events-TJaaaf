
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");
let initialValue = 0;



function handleBtnClick(event) {
    
    if(event.target.classList.contains("equals")) {
        display.innerText = eval(display.innerText);
         return;
    } 
    if(event.target.classList.contains("clear")) {
        display.innerText = initialValue;
        return;
    } 
    if(display.innerText == initialValue) {
        display.innerText = event.target.innerText;
    } else {
         display.innerText += event.target.innerText
    }
    
}

buttons.forEach((button) => {
    button.addEventListener("click", handleBtnClick);
})

display.innerText = initialValue;



