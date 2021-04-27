


let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let reset = document.querySelector(".refresh");
let userSpan = document.querySelector(".user-selected");
let computerSpan = document.querySelector(".computer-selected");
let userScore = document.querySelector(".user-score");
let computerScore = document.querySelector(".computer-score");

let userCount = 0;
let computerCount = 0;



let userSelected = {}, computerSelected = {};

function getWinner(user, computer) {
    userSpan.innerText = user.name;
    computerSpan.innerText = computer.name;
    if(user.name === computer.name) {
        result.innerText = "It's a Tie";
    } else if(user.beats === computer.name) {
        userCount += 1;
        userScore.innerText = userCount;
        result.innerText = "User Won";
       
    } else {
        computerCount += 1;
        computerScore.innerText = computerCount;
        result.innerText = "Computer Wins";
    }
}


function getRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}

let dataSet = [
    {
        name: "rock",
        beats: "scissors"

    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "paper",
        beats: "rock"
    }
] ;

function createUserLayout() {
    userRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `fa fa-hand-${icon.name}-o`;
         console.log(icon);   
        if(userSelected.name === icon.name) {
            li.classList.add("selected");
        }
        li.addEventListener("click", () => {
            userSelected = icon;
            computerSelected = dataSet[getRandomNumber()];
            console.log(userSelected, computerSelected);
            createComputerLayout();
            createUserLayout();
            getWinner(userSelected, computerSelected);
           
        });
        li.append(i);
        userRoot.append(li);
        
    });
    
}

createUserLayout();

function createComputerLayout() {
    computerRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = `fa fa-hand-${icon.name}-o`;
        if(computerSelected.name === icon.name) {
            li.classList.add("selected");
        }
        li.append(i);
        computerRoot.append(li);
    });
    
}

createComputerLayout();

reset.addEventListener("click", () => {
    userSelected = {};
    computerSelected = {};
    createUserLayout();
    createComputerLayout();
    result.innerText = "";
    userCount = 0;
    userScore.innerText = userCount;
    computerCount = 0;
    computerScore.innerText = computerCount;
    userSpan.innerText = "";
    computerSpan.innerText = "";
})

userScore.innerText = userCount;
computerScore.innerText = computerCount;