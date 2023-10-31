function getComputerChoice() {
	let options = ["Rock", "Paper", "Scissors"];
	let random = Math.floor(Math.random() * 3);

	return options[random];
}

const compChoice = getComputerChoice();
