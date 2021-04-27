
let form = document.querySelector("form");
let movieList = document.querySelector(".list");

function handleDelete(event) {
    console.dir(event.target);
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createmovieUI();
}

let allMovies = [
    {
        name: "Inception",
        watched: false
    },

    {
        name: "Forest Gump",
        watched: true
    }
];

function handleSubmit(event) {
    event.preventDefault();
    allMovies.push({
        name: event.target.movie.value,
        watched: false
    });
    event.target.movie.value = "";
    createmovieUI();
    
}

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
}

function createmovieUI() {
    movieList.innerHTML = "";
    allMovies.forEach((movie, i) => {
        let div = document.createElement("div");
        div.classList.add("flex", "aic", "movieDetails");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = i;
        input.classList.add("checkbox");
        input.checked = movie.watched;
        let h2 = document.createElement("h2");
        h2.innerText = movie.name;
        let button = document.createElement("button");
        button.classList.add("cross");
        button.innerText  = "X";
        button.setAttribute("data-id", i);
        div.append(input, h2, button);
        movieList.append(div);
        button.addEventListener("click", handleDelete);
        input.addEventListener("change", handleChange);
    })
}
form.addEventListener("submit", handleSubmit);

createmovieUI();