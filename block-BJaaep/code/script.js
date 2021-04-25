
let firstBoxes = document.querySelectorAll(".first li");
let secondBox = document.querySelector(".second");



firstBoxes.forEach((box, index) => {
    box.addEventListener("click", (event) => {
        event.target.innerText = index + 1;
    setTimeout(()=> {
        event.target.innerText = ""
    }, 5000);
})
})


secondBox.addEventListener("click", (event) => {
   event.target.innerText = event.target.dataset.text;
   setTimeout(() => {
       event.target.innerText = "";
   }, 5000);
})