import React, { useState } from "react";
import Board from "./board";
import History from "./history";
import CalculateWinner from "./gameLogic";

export interface TurnInformation {
  boardState: string[];
  turn: number;
}

export default function Game() {
  const turnZeroArray: string[] = Array(9).fill(null);
  const initBoardState: TurnInformation = {
    boardState: turnZeroArray,
    turn: 0,
  };
  const [history, setHistory] = useState([initBoardState]);
  const current = history[history.length - 1];

  const winner = CalculateWinner(current.boardState);

  function GetCurrentPlayer() {
    return current.turn % 2 > 0 ? "X" : "O";
  }

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

  function OnClickSquare(i: number) {
    if (!winner && current.boardState[i] === null) {
      const newBoardState = current.boardState.slice();
      newBoardState[i] = GetCurrentPlayer();
      const latestTurn: TurnInformation = {
        boardState: newBoardState,
        turn: current.turn + 1,
      };
      setHistory([...history, latestTurn]);
    }
  }

  function Undo() {
    if (current.turn > 0) {
      setBoardStateUpTo(current.turn);
    }
  }

  function Reset() {
    setHistory([initBoardState]);
  }

  function setBoardStateUpTo(i: number) {
    const newState = history.slice(0, i);
    setHistory(newState);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          boardState={current.boardState}
          onClickSquare={OnClickSquare}
          status={GetStatus()}
        />
        <button onClick={() => Reset()}>Reset</button>
        <button onClick={() => Undo()} disabled={current.turn < 1}>
          Undo
        </button>
      </div>
      <div className="game-info">
        <History history={history} />
      </div>
    </div>
  );
}
