import React from "react";
import { TurnInformation } from "./game";

interface HistoryProps {
  history: TurnInformation[];
}

function renderTurnRow(turn: TurnInformation) {
  return turn.turn > 0 && <li key={turn.turn}>State for turn {turn.turn}</li>;
}

export default function History(props: HistoryProps) {
  return (
    <>
      <div>{/* status */}</div>
      <ol>{props.history.map((x) => renderTurnRow(x))}</ol>
    </>
  );
}
