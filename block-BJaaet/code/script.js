
let form = document.querySelector("form");
let movieList = document.querySelector(".list");

function handleClick(event) {
    let newText =  event.target.previousElementSibling.innerHTML.strike();
     event.target.previousElementSibling.innerHTML= newText;
}

function handleSubmit(event) {
    event.preventDefault();
    let elem = event.target.elements;
    let div = document.createElement("div");
    div.classList.add("flex","jcb", "aic", "movieDetails");
    let h2 = document.createElement("h2");
    h2.innerText = elem.movie.value;
    let button = document.createElement("button");
    button.classList.add("cross");
    button.innerText  = "X";
    div.append(h2, button);
    movieList.append(div);
    button.addEventListener("click", handleClick);
}

form.addEventListener("submit", handleSubmit);
