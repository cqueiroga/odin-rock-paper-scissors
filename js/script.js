// Declare variables and assign button elements
// to player selection options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let output = document.getElementById("output");

// Add event listners to each of the player options
rock.addEventListener("click", function () {
	const playerSelection = rock.value;
	const computerSelection = getComputerChoice();
	output.innerHTML = playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", function () {
	const playerSelection = paper.value;
	const computerSelection = getComputerChoice();
	output.innerHTML = playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", function () {
	const playerSelection = scissors.value;
	const computerSelection = getComputerChoice();
	output.innerHTML = playRound(playerSelection, computerSelection);
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
		return "You Lose! Paper beats Rock";
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		return "You Win! Rock beats Scissors";
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		return "You Lose! Rock beats Scissors";
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		return "You Win! Scissors beats Paper";
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		return "You Win! Paper beats Rock";
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		return "You Lose! Scissors beats Paper";
	} else {
		return "It's a tie!";
	}
}

// function game() {
// 	let rounds = 5;

// 	while (rounds > 0) {
// 	const playerSelection = prompt("Type your choice - Rock, Paper or Scissors:");
// 	const computerSelection = getComputerChoice();
// 	console.log(playRound(playerSelection, computerSelection));
// 	rounds--;
// 	}
// }

//game();
