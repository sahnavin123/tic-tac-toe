let turn = "X";
let isGameOver = false;
const boxes = document.getElementsByClassName("box");
const resetBtn = document.getElementById("reset");
const boxText = document.getElementsByClassName("text");
let player = "Player 1";
let isDraw = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const changePlayer = () => {
  return turn === "X" ? "Player 1" : "Plyer 2";
};

const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText === boxText[e[2]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      boxText[e[0]].innerText === "X"
        ? (player = "Player 1")
        : (player = "Player 2");
      document.querySelector(".info").innerText = player + " won the game!!";
      isGameOver = true;
    }
  });
};

const checkDraw = () => {
  isDraw = Array.from(boxText).every((element) => element.innerText !== "");

  isDraw
    ? ((document.querySelector(".info").innerText =
        "The game is a draw! play again"),
      (isGameOver = true))
    : null;
};

Array.from(boxes).forEach((element) => {
  let boxTextElement = element.querySelector(".box > .text");
  element.addEventListener("click", (e) => {
    if (boxTextElement.innerText === "" && !isGameOver) {
      boxTextElement.innerText = turn;
      turn = changeTurn();
      player = changePlayer();
      checkWin();
      !isGameOver ? checkDraw() : null;

      !isGameOver && !isDraw
        ? (document.getElementsByClassName("info")[0].innerText =
            "Turn for " + player)
        : null;
    }
  });
});

resetBtn.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".box > .text");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  player = "Player 1";
  isGameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + player;
});
