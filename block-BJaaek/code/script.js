
let boxes = document.querySelectorAll(".box");

let colors = ["blue", "green", "red", "cyan"];


function randomColor() {
    let symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for(let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}

boxes[0].addEventListener("click", () => {
    colors.forEach((color) => {
        boxes[0].style.backgroundColor = randomColor();
    })
});

boxes[1].addEventListener("mousemove", () => {
    colors.forEach((color) => {
        boxes[1].style.backgroundColor = randomColor();
    })
});