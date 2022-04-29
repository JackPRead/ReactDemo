import React from "react";
import "./index.css";

interface SquareProps {
  value: number;
}

export default function Square(props: SquareProps) {
  return <button className="square">{props.value}</button>;
}
