
let parentBox = document.querySelector(".boxes");
for(let i = 0; i < 500; i++) {
    var div = document.createElement("div");
    div.classList.add("box");
    var h3 = document.createElement("h3");
    div.classList.add("flex", "jcc", "aic");
    div.style.width = "4rem";
    div.style.height = "4rem";
    div.style.border = "1px solid black";
    h3.innerText = randomNumber();
    div.append(h3);
    parentBox.append(div);
}

let boxes = document.querySelectorAll(".box");

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
    boxes.forEach((box) => {
        box.style.backgroundColor = randomColor();
       box.querySelector("h3").innerText = randomNumber();
    })
}

parentBox.addEventListener("mousemove", handler);
