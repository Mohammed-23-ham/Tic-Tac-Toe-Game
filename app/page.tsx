"use client";
import { useEffect, useState } from "react";
import Cell from "./componants/cell";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winning, setWinning] = useState("");

  useEffect(() => {
    if (winning) return;
    winningCombinations.forEach((combo) => {
      const circlewins = combo.every((cell) => cells[cell] === "circle");
      const crosswins = combo.every((cell) => cells[cell] === "cross");

      if (circlewins) {
        setWinning("Circle Wins!");
      } else if (crosswins) {
        setWinning("Cross Wins!");
      }
    });

    if (!winning && cells.every((cell) => cell !== "")) {
      setWinning("It's a Draw!");
    }
  }, [cells, winning]);

  const resetGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("circle");
    setWinning("");
  };

  return (
    <main className="container">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            go={go}
            setGo={setGo}
            key={index}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winning={winning}
          />
        ))}
      </div>
      <div>{winning || `It's Now ${go} Turn!`}</div>
      {winning && <button onClick={resetGame}>Restart Game</button>}
    </main>
  );
}