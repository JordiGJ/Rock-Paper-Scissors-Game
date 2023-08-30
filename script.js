// get elements
const displayResult = document.querySelector("#displayResult");
const userAmountSpan = document.querySelector("#userAmount");
const comAmountSpan = document.querySelector("#comAmount");
const buttons = document.querySelectorAll("button");

// variables
const options = ["rock", "paper", "scissors"];
let userAmount = 0;
let comAmount = 0;

// functions
const generateRandomNum = () => {
  return Math.floor(Math.random() * 3);
};

const handleClick = (e) => {
  const target = e.target.id;
  const comPlay = options[generateRandomNum()];
  displayResult.classList.remove("display");
  if (target === comPlay) {
    displayResult.textContent = "It's a tie!";
    return;
  }
  if (target === "rock") {
    if (comPlay === "paper") {
      displayResult.textContent = "You lose! paper beats rock";
      comAmount++;
      comAmountSpan.textContent = comAmount;
      return;
    } else {
      displayResult.textContent = "You win! rock beats scissors";
      userAmount++;
      userAmountSpan.textContent = userAmount;
    }
  }
  if (target === "paper") {
    if (comPlay === "scissors") {
      displayResult.textContent = "You lose! scissors beats paper";
      comAmount++;
      comAmountSpan.textContent = comAmount;
      return;
    } else {
      displayResult.textContent = "You win! paper beats rock";
      userAmount++;
      userAmountSpan.textContent = userAmount;
    }
  }
  if (target === "scissors") {
    if (comPlay === "rock") {
      displayResult.textContent = "You lose! rock beats scissors";
      comAmount++;
      comAmountSpan.textContent = comAmount;
      return;
    } else {
      displayResult.textContent = "You win! scissors beats paper";
      userAmount++;
      userAmountSpan.textContent = userAmount;
    }
  }
};

buttons.forEach((btn) => btn.addEventListener("click", handleClick));
