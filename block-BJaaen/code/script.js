
let user = document.querySelectorAll(".user i");
let arr = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let displayUser = document.querySelector(".display-text-user");
let displayComputer = document.querySelector(".display-text-computer");
let result = document.querySelector(".result");
let userSpan = document.querySelector(".user-span");
let computerSpan = document.querySelector(".computer-score span");
let reset = document.querySelector(".refresh");

let computerScore = 0;
let userScore = 0;

let initialValue = 0;

function randomNumber() {
    let number= arr[Math.floor(Math.random() * 5)];
    return number;
}
function handleClick(event) {
    displayUser.innerText = "--- " + event.target.dataset.text;
    // event.target.style.color = "black";
    displayComputer.innerText = "--- " + randomNumber();
    console.log(displayUser.innerText);
    console.log(displayComputer.innerText);
    
    if(displayUser.innerText === "--- Rock" && displayComputer.innerText === "--- Paper") {
        result.innerText = "You Lost!";
        computerScore += 1;
        computerSpan.innerText = computerScore;
        return;
    }
    if(displayUser.innerText === "--- Paper" && displayComputer.innerText === "--- Rock") {
        result.innerText = "You Won!";
        userScore += 1;
        userSpan.innerText = userScore;
        return;
    }
    if(displayUser.innerText === "--- Rock" && displayComputer.innerText === "--- Scissors") {
        result.innerText = "You Won!";
        userScore += 1;
        userSpan.innerText = userScore;
        return;
    }
    if(displayUser.innerText === "--- Paper" && displayComputer.innerText === "--- Scissors") {
        result.innerText = "You Lost!";
        computerScore += 1;
        computerSpan.innerText = computerScore;
        return;
    }
    if(displayUser.innerText === "--- Paper" && displayComputer.innerText === "--- Lizard") {
        result.innerText = "You Lost!";
        computerScore += 1;
        computerSpan.innerText = computerScore;
        return;
    }
    if(displayUser.innerText === "--- Paper" && displayComputer.innerText === "---Spock") {
        result.innerText = "You Won!";
        userScore += 1;
        userSpan.innerText = userScore;
        return;
    }
    if(displayUser.innerText === "--- Rock" && displayComputer.innerText === "--- Lizard") {
        result.innerText = "You Won!";
        userScore += 1;
        userSpan.innerText = userScore;
        return;
    }
    if(displayUser.innerText === "--- Rock" && displayComputer.innerText === "--- Spock") {
        result.innerText = "You Lost!";
        computerScore += 1;
        computerSpan.innerText = computerScore;
        return;
    }
    if(displayUser.innerText === "--- Scissors" && displayComputer.innerText === "--- Rock") {
        result.innerText = "You Lost!";
        computerScore += 1;
        computerSpan.innerText = computerScore;;
        return;
    }
    if(displayUser.innerText === "--- Scissors" && displayComputer.innerText === "--- Paper") {
        result.innerText = "You Won!";
        userScore += 1;
        userSpan.innerText = userScore;
        return;
    }
    if(displayUser.innerText === "--- Scissors" && displayComputer.innerText === "--- Spock") {
        result.innerText = "You Lost!";
        computerScore += 1;
        computerSpan.innerText = computerScore;
         return;
    }
    if(displayUser.innerText === "--- Scissors" && displayComputer.innerText === "--- Lizard") {
         result.innerText = "You Won!";
         computerScore += 1;
        computerSpan.innerText = computerScore;
        return;
    }
    if(displayUser.innerText === "--- Lizard" && displayComputer.innerText === "--- Paper") {
         result.innerText = "You Won!";
         userScore += 1;
        userSpan.innerText = userScore;
         return;
    }
    if(displayUser.innerText === "--- Lizard" && displayComputer.innerText === "--- Rock") {
        result.innerText = "You Lost!";
        computerScore += 1;
        computerSpan.innerText = computerScore;
        return;
    }
     if(displayUser.innerText === "--- Lizard" && displayComputer.innerText === "--- Scissors") {
        result.innerText = "You Lost!";
        computerScore += 1;
        computerSpan.innerText = computerSore;
        return;
     }
    if(displayUser.innerText === "--- Lizard" && displayComputer.innerText === "--- Spock") {
        result.innerText = "You Won!";
        userScore += 1;
        userSpan.innerText = userScore;
        return;
    }
    if(displayUser.innerText === "--- Spock" && displayComputer.innerText === "--- Paper") {
         result.innerText = "You Lost!";
         computerScore += 1;
         computerSpan.innerText = computerScore;
        return;
    }
    if(displayUser.innerText === "--- Spock" && displayComputer.innerText === "--- Rock") {
         result.innerText = "You Won!";
         userScore += 1;
        userSpan.innerText = userScore;
         return;
    }
    if(displayUser.innerText === "--- Spock" && displayComputer.innerText === "--- Scissors") {
        result.innerText = "You Won!";
        userScore += 1;
        userSpan.innerText = userScore;
        return;
    }
    if(displayUser.innerText === "--- Spock" && displayComputer.innerText === "--- Lizard") {
         result.innerText = "You Lost!";
         computerScore += 1;
         computerSpan.innerText = computerScore;
        return;
    }
    if(displayUser.innerText === "--- Spock" && displayComputer.innerText === "--- Spock") {
         result.innerText = "It's a tie!";
         return;
    }
     if(displayUser.innerText === "--- Rock" && displayComputer.innerText === "--- Rock") {
         result.innerText = "It's a tie!";
         return;
     }
    if(displayUser.innerText === "--- Paper" && displayComputer.innerText === "--- Paper") {
        result.innerText = "It's a tie!";
        return;
    }
    if(displayUser.innerText === "--- Scissors" && displayComputer.innerText === "--- Scissors") {
        result.innerText = "It's a tie!";
        return;
    }
    if(displayUser.innerText === "--- Lizard" && displayComputer.innerText === "--- Lizard") {
        result.innerText = "It's a tie!";
         return;
    }
                     
}

user.forEach((icon) => {
    icon.addEventListener("click", handleClick);
})

reset.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userSpan.innerText = userScore;
    computerSpan.innerText = computerScore;
    displayUser.innerHTML = "";
    displayComputer.innerHTML = "";

})
userSpan.innerText= userScore;
computerSpan.innerText = computerScore;