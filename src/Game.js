import React, { useState } from "react";

//import components
import { ScoreBoard } from "./components/scoreBoard";
import { Board } from "./components/board";
import { ResetBtn } from "./components/reset-btn";

//import style
import "./sass/game.css";

function Game() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [xplaying, setXplaying] = useState(true);
  const [score, setScore] = useState({ Xscore: 0, Oscore: 0 });
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameover, setGameover] = useState(false);

  // check winner
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameover(true);
        return board[x];
      }
    }
  };

  //reset board
  const resetBoard = () => {
    setGameover(false);
    setBoard(Array(9).fill(null));
  };

  const hanldeBoxClick = (boxIndex) => {
    //step 1 update board
    const updateBoard = board.map((val, index) => {
      if (index === boxIndex) {
        return xplaying ? "x" : "o";
      } else return val;
    });
    setBoard(updateBoard);

    // step 2 check if there is winner
    const winner = checkWinner(updateBoard);
    if (winner) {
      let { Xscore, Oscore } = score;
      if (winner === "x") {
        Xscore += 1;
        setScore({ ...score, Xscore });
      } else {
        Oscore += 1;
        setScore({ ...score, Oscore });
      }
    }
    // step 3 change active player
    setXplaying(!xplaying);
  };

  return (
    <div className="game">
      <ScoreBoard score={score} xplayer={xplaying} />
      <Board board={board} onClick={gameover ? resetBoard : hanldeBoxClick} />
      <ResetBtn onClick={resetBoard} />
    </div>
  );
}

export default Game;
