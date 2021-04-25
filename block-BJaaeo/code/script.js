
let display = document.querySelector(".display");




let calclation = document.querySelector(".calculation");

calclation.addEventListener("click", (e) => {
    switch(e.target.innerText) {
        case "c": 
            display.innerText = "";
            break;
        case "=":
            display.innerText = eval(display.innerText);
            break;
        default: 
            display.innerText += e.target.innerText;
    }
})