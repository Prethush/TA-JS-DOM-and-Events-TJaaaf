
let boxes = document.querySelectorAll(".boxes");

let firstBoxContainer = Array.from(boxes[0].children);
let secondBoxContainer = boxes[1];

function myFunction(box) {
    box.innerText = "";
}

function hideElements(box, event) {
   setTimeout(function(){
       myFunction(box);
   }, 5000);
}

firstBoxContainer.forEach((box) => {
    box.addEventListener("click", function(event) {
        hideElements(box, event);
    })
})


function hideElements(event) {
    event.target.innerText = "";
}
function handleEvent(event) {
    setTimeout(function() {
        hideElements(event);
    }, 5000)
}
secondBoxContainer.addEventListener("click", handleEvent);