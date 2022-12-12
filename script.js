/*const Player=document.querySelector("#playerTxt");
const computer=document.querySelector("#computerTxt")
const result=document.querySelector("#resultTxt")*/
const selectionBtns = document.querySelectorAll("[data-selection]");
const finalScore = document.querySelector("[data-final-column]");
const userScore = document.querySelector("[data-your-score]");
const computerScore = document.querySelector("[data-computer-score]");
const SELECTIONS = [
  {
    name: "Rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "Paper",
    emoji: "✋",
    beats: "Rock",
  },

  {
    name: "scissors",
    emoji: "✌️",
    beats: "Paper",
  },
];

selectionBtns.forEach((selectionbtn) => {
  selectionbtn.addEventListener("click", (e) => {
    const selectionName = selectionbtn.dataset.selection; //Rock
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    //  {
    //     name: "Rock",
    //     emoji: "✊",
    //     beats: "scissors",
    //   }
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection(); // sci
  const userWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  /*console.log(computerSelection)*/

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, userWinner);

  userWinner && incrementScore(userScore);
  computerWinner && incrementScore(computerScore);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalScore.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length); //2
  return SELECTIONS[randomIndex]; //2
  //   /{
  //     name: "scissors",
  //     emoji: "✌️",
  //     beats: "Paper",
  //   }
}
