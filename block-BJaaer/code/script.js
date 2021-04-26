let div = document.createElement("div");
div.className = "small-container";
let nameElement = document.createElement("h2");
let emailElement = document.createElement("p");
let moviesElement = document.createElement("p");
let colorElement = document.createElement("p");
let ratingElement = document.createElement("p");
let bookElement = document.createElement("p");
let terms = document.createElement("p");

let form = document.querySelector(".container");
let close = document.createElement("a");
close.className = "close";
close.innerText = "Close";
div.append(close);


console.log(close);
function handleSubmit(event) {
    event.preventDefault();
    nameElement.innerText = `Hello ${form.elements.name.value}`;
    emailElement.innerText = `Email: ${form.elements.email[0].value}`;
    moviesElement.innerText = `You Love: ${form.elements.gender.value}`;
    colorElement.innerText = `Color: ${form.elements.color.value}`;
    ratingElement.innerText = `Rating ${form.elements.range.value}`;
     bookElement.innerText = `Book Genre: ${form.elements.drone.value}`;
     terms.innerText = `You ${form.elements.terms.checked ? "Agree" : "Disagree"} to Terms and Conditions`;
     div.append(nameElement, emailElement, moviesElement, colorElement, ratingElement, bookElement, terms);
     document.body.append(div);
     document.querySelector(".close").addEventListener("click", (event) => {
         event.preventDefault();
        div.style.display = "none";
    
    }); 
    
    console.log(nameElement, emailElement, moviesElement, colorElement, ratingElement, bookElement, terms);
}


form.addEventListener("submit", handleSubmit);

