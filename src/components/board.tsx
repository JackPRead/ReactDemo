import React from "react";
import Square from "./square";

interface BoardProps {
  boardState: string[];
  status: string;
  onClickSquare: (index: number) => void;
}

export default function Board(props: BoardProps) {
  function renderSquare(s: string, i: number) {
    return <Square value={s} onClickSquare={props.onClickSquare} index={i} />;
  }

  return (
    <>
      <div>
        <div className="status">{props.status}</div>
        <div className="board-row">
          {renderSquare(props.boardState[0], 0)}
          {renderSquare(props.boardState[1], 1)}
          {renderSquare(props.boardState[2], 2)}
        </div>
        <div className="board-row">
          {renderSquare(props.boardState[3], 3)}
          {renderSquare(props.boardState[4], 4)}
          {renderSquare(props.boardState[5], 5)}
        </div>
        <div className="board-row">
          {renderSquare(props.boardState[6], 6)}
          {renderSquare(props.boardState[7], 7)}
          {renderSquare(props.boardState[8], 8)}
        </div>
      </div>
    </>
  );
}
