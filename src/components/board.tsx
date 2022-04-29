import React, { useState } from "react";
import Square from "./square";
import CalculateWinner from "./gameLogic";

export default function Board() {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(0);

  const winner = CalculateWinner(boardState);

  function GetStatus() {
    if (winner) {
      if (winner === "Draw") {
        return "Draw";
      }
      return "The winner is " + winner;
    } else {
      return "Next player: " + GetCurrentPlayer();
    }
  }

  function renderSquare(s: string, i: number) {
    return <Square value={s} update={Update} index={i} />;
  }

  function GetCurrentPlayer() {
    return turn % 2 > 0 ? "X" : "O";
  }

  function Update(i: number) {
    if (!winner && boardState[i] === null) {
      const newBoardState = boardState.slice();
      newBoardState[i] = GetCurrentPlayer();
      setBoardState(newBoardState);
      setTurn(turn + 1);
    }
  }

  function Reset() {
    setTurn(0);
    setBoardState(Array(9).fill(null));
  }

  return (
    <>
      <div>
        <div className="status">{GetStatus()}</div>
        <div className="board-row">
          {renderSquare(boardState[0], 0)}
          {renderSquare(boardState[1], 1)}
          {renderSquare(boardState[2], 2)}
        </div>
        <div className="board-row">
          {renderSquare(boardState[3], 3)}
          {renderSquare(boardState[4], 4)}
          {renderSquare(boardState[5], 5)}
        </div>
        <div className="board-row">
          {renderSquare(boardState[6], 6)}
          {renderSquare(boardState[7], 7)}
          {renderSquare(boardState[8], 8)}
        </div>
      </div>
      <div>
        <button onClick={() => Reset()}>Reset</button>
      </div>
    </>
  );
}
