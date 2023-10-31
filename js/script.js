function getComputerChoice() {
	let options = ["rock", "paper", "scissors"];
	let random = Math.floor(Math.random() * 3);

	return options[random];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
		return "You Lose! Paper beats Rock";
	} else if (
		playerSelection.toLowerCase() == "rock" &&
		computerSelection == "scissors"
	) {
		return "You Win! Rock beats Scissors";
	} else if (
		playerSelection.toLowerCase() == "scissors" &&
		computerSelection == "rock"
	) {
		return "You Lose! Rock beats Scissors";
	} else if (
		playerSelection.toLowerCase() == "scissors" &&
		computerSelection == "paper"
	) {
		return "You Win! Scissors beats Paper";
	} else if (
		playerSelection.toLowerCase() == "paper" &&
		computerSelection == "rock"
	) {
		return "You Win! Paper beats Rock";
	} else if (
		playerSelection.toLowerCase() == "paper" &&
		computerSelection == "scissors"
	) {
		return "You Lose! Scissors beats Paper";
	} else if (
		playerSelection.toLowerCase() != "rock" ||
		playerSelection.toLowerCase() != "paper" ||
		playerSelection.toLowerCase != "scissors"
	) {
		return "Please select from one of the options above";
	} else {
		return "It's a tie!";
	}
}

function game() {
	let rounds = 5;

	while (rounds > 0) {
		const playerSelection = prompt(
			"Type your choice - Rock, Paper or Scissors:"
		);
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
		rounds--;
	}
}

game();
