let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const compchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const ranInx = Math.floor(Math.random() * 3);
    return options[ranInx];
}
const drawGame = () =>{
    // console.log("It's a draw!");
    msg.innerHTML = "It's a draw. Try again!";
    msg.style.backgroundColor = "#3E3F5B";
}

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin === true){
        userScore++;
        userScorePara.innerHTML = userScore;
        // console.log("You Win 🥳");
        msg.innerHTML = "You Win 🥳"; //Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        // console.log("You Lose ☹️");
        msg.innerHTML = "You Lost ☹️"; //${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    const computerChoice = compchoice();
    console.log("computer choice = ",computerChoice);
    
    if (userChoice === computerChoice){
        drawGame();
    }else{
      let userWin = true;
      if (userChoice === "rock"){
        userWin = computerChoice === "paper" ? false : true;
      } else if (userChoice === "paper"){
        userWin = computerChoice === "scissors" ? false : true;
      } else{
        userWin = computerChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, computerChoice);   
    }
};
choices.forEach((choice) =>{
    // console.log(choice)
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
