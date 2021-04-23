
let container = document.querySelector(".container");
for(let i = 0; i < 500; i++) {
    var div = document.createElement("div");
    div.classList.add("flex", "jcc", "aic");
    div.style.width = "4rem";
    div.style.height = "4rem";
    div.style.border = "1px solid black";
    container.append(div);
}

function randomColor() {
    let color;
    let symbol = ["0", "1", "2", "3","4","5","6","7","8","9","A","B","C","D", "E","F"];
    color = "#";
    for(let i = 0; i < 6; i++) {
        color = color + symbol[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomNumber() {
    let number = Math.floor(Math.random() * 501);
    return number;
}
function handler() {
    for(let i = 0; i < 500; i++) {
        container.children[i].style.backgroundColor = randomColor();
        container.children[i].innerText = randomNumber();
    }
}

container.addEventListener("mousemove", handler);
