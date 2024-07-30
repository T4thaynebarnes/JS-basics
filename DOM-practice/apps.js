// targeting HTML elements to manipulate on the DOM
const voteUp = document.getElementById("voteUp");
const voteUpScore = document.getElementById("voteUpScore");
const voteDown = document.getElementById("voteDown");
const voteDownScore = document.getElementById("voteDownScore");

voteUpClick = { voteUp: 0 };
voteUp.onclick = () => handleVoteUp();
const handleVoteUp = () => {
  voteUpClick.voteUp += 1;
  //   putting this in square brackets produces an object on the console
  console.log([voteUpClick.voteUp]);
  voteUpScore.innerHTML = voteUpClick.voteUp;
};

let voteDownClick = { voteDown: 0 };
voteDown.onclick = () => handleVoteDown();
const handleVoteDown = () => {
  voteDownClick.voteDown += 1;
  console.log([voteDownClick.voteDown]);
  voteDownScore.innerHTML = voteDownClick.voteDown;
};
