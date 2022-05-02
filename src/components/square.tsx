import React from "react";

interface SquareProps {
  value: string;
  index: number;
  onClickSquare: (index: number) => void;
}

export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={() => props.onClickSquare(props.index)}>
      {props.value}
    </button>
  );
}
