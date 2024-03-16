window.addEventListener("mouseover",play);
window.addEventListener("click",play);
function play() {
  document.getElementById("a").play();
}

var player = {
  name: "",
  nickname: ""
};

// Function to save player information from form input
function savePlayer() {
  var nameInput = document.getElementById("name").value;
  var nicknameInput = document.getElementById("nickname").value;

  // Update player object with form input
  player.name = nameInput;
  player.nickname = nicknameInput;
}

function showInstructions() {
  var button = document.getElementById("instructionButton");
  var instructions = document.getElementById("instructionText");

  // Toggle the display of the button and instructions
  if (instructions.style.display === "none") {
    instructions.style.display = "block";
    button.style.display = "none";
  } else {
    instructions.style.display = "none";
    button.style.display = "block";
  }
}

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      //scissors, paper
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      //rock, scissors
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
