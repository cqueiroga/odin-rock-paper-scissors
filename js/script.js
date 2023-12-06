// Declare variables and assign button elements
// to player selection options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let output = document.getElementById("output");
let playerScoreOutput = document.getElementById("playerScoreOutput");
let compScoreOutput = document.getElementById("compScoreOutput");
let playerScore = 0;
let computerScore = 0;

// Add event listners to each of the player options
rock.addEventListener("click", function () {
	const playerSelection = rock.value;
	const computerSelection = getComputerChoice();
	output.innerHTML = playRound(playerSelection, computerSelection);
	playerScoreOutput.innerHTML = playerScore;
	compScoreOutput.innerHTML = computerScore;
	checkScore();
});

paper.addEventListener("click", function () {
	const playerSelection = paper.value;
	const computerSelection = getComputerChoice();
	output.innerHTML = playRound(playerSelection, computerSelection);
	playerScoreOutput.innerHTML = playerScore;
	compScoreOutput.innerHTML = computerScore;
	checkScore();
});

scissors.addEventListener("click", function () {
	const playerSelection = scissors.value;
	const computerSelection = getComputerChoice();
	output.innerHTML = playRound(playerSelection, computerSelection);
	playerScoreOutput.innerHTML = playerScore;
	compScoreOutput.innerHTML = computerScore;
	checkScore();
});

function getComputerChoice() {
	let options = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * 3);

	return options[random];
}

// Function to check player selection vs computer
// selection and return game results
function playRound(playerSelection, computerSelection) {
	if (playerSelection == "rock" && computerSelection == "paper") {
		computerScore++;
		return "You Lose! Paper beats Rock";
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		playerScore++;
		return "You Win! Rock beats Scissors";
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		computerScore++;
		return "You Lose! Rock beats Scissors";
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		playerScore++;
		return "You Win! Scissors beats Paper";
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		playerScore++;
		return "You Win! Paper beats Rock";
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		computerScore++;
		return "You Lose! Scissors beats Paper";
	} else {
		return "It's a tie!";
	}
}

function checkScore() {
	if (playerScore == 5) {
		output.innerHTML = "Player score: " + playerScore + " <br /> You Win!";
		document.getElementById("rock").disabled = true;
		document.getElementById("paper").disabled = true;
		document.getElementById("scissors").disabled = true;
	} else if (computerScore == 5) {
		output.innerHTML =
			"Computer score: " + computerScore + " <br /> Computer Wins!";
		document.getElementById("rock").disabled = true;
		document.getElementById("paper").disabled = true;
		document.getElementById("scissors").disabled = true;
	}
}
