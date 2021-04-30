let game = document.querySelector(".game");
let grid = document.createElement("section");
let info = document.querySelector(".tracker");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
console.log(info);

grid.classList.add("grid");
game.append(grid);

let cardsArray = [
    {
        name: "character01",
        img: "assets/media/character01.png"
    },

    {
        name: "character02",
        img: "assets/media/character02.png"
    }
    ,
    
    {
        name: "character03",
        img: "assets/media/character03.jpeg"
    }
    ,
    
    {
        name: "character04",
        img: "assets/media/character04.png"
    }
    ,
    
    {
        name: "character05",
        img: "assets/media/character05.jpeg"
    }
    ,
    
    {
        name: "character06",
        img: "assets/media/character06.jpeg"
    }
    ,
    
    {
        name: "character07",
        img: "assets/media/character07.png"
    }
    ,
    
    {
        name: "character08",
        img: "assets/media/character08.jpg"
    }
    ,
    
    {
        name: "character09",
        img: "assets/media/charcter09.jpeg"
    }
    ,
    
    {
        name: "character10",
        img: "assets/media/character10.png"
    }
    ,
    
    {
        name: "character11",
        img: "assets/media/character11.png"
    }

    ,
    
    {
        name: "character12",
        img: "assets/media/character12.png"
    }


];



let count = 0;
let firstGuess = "";
let secondGuess = "";
let delay = 1200;
let previousTarget = null;
var counter = 0;

const match = () => {
   
    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
        card.classList.add("matched");
        console.log(card);
    });
}

const resetGuesses = () => {
    
    firstGuess = "";
    secondGuess = "";
    count = 0;
    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
         card.classList.remove("selected");
    })
}

function handleClick(event) {
   
    let clicked = event.target;
    console.log(previousTarget);
    console.log(clicked.parentNode.dataset.name);
    if(clicked === previousTarget || clicked.nodeName === "SECTION" || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("matched")) {
        return;
    }
    if(count <  2) {
        count++;
       
    if(count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add("selected");
    } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add("selected");
    }
    if(firstGuess !== "" && secondGuess !== "") {
        if(firstGuess === secondGuess) {
            console.log("matched");
            setTimeout(match, delay);
             setTimeout(resetGuesses, delay);
        } else {
           setTimeout(resetGuesses, delay);
        }
    }   
     
    }
    previousTarget = clicked;
    counter += 1;
    if(counter === 1) {
        setInterval(setTime, 1000);
    }
    updateAttempts(counter);
}

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

gameGrid.forEach((card) => {
    let div = document.createElement("div");
    div.classList.add("card");
   

    // Create front of card

    let front = document.createElement("div");
    front.classList.add("front");

    // Create back of card

    let back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${card.img})`;
    back.style.backgroundPosition = `center center`;

    div.dataset.name = card.name;
    div.append(front);
    div.append(back);

    grid.append(div);
});



grid.addEventListener("click", handleClick);

function updateAttempts(data) {
    info.innerText = data;
}

info.innerText = counter;

let totalSeconds = 0;

let allCards = document.querySelectorAll(".grid .card");


function setTime() {
    if(Array.from(allCards).some((card) => !card.classList.contains("matched"))) {
    ++totalSeconds;
    seconds.innerHTML = pad(totalSeconds % 60);
    minutes.innerHTML = pad(parseInt(totalSeconds / 60));
    
}
}
function pad(val) {
    let valString = val + "";
    if(valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}


    
   


   
