
let boxOne = document.querySelector(".first");
let boxTwo = document.querySelector(".second");

let colors = ["blue", "green", "red", "cyan"];


function randomColor() {
    let symbols, color;
    symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    color = "#";
    for(let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}

boxOne.addEventListener("click", () => {
        boxOne.style.backgroundColor = randomColor();
});

boxTwo.addEventListener("mousemove", () => {
        boxTwo.style.backgroundColor = randomColor();
});