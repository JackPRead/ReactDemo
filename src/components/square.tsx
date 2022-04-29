import React from "react";

interface SquareProps {
  value: string;
  index: number;
  update: (index: number) => void;
}

export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={() => props.update(props.index)}>
      {props.value}
    </button>
  );
}
