import React, { useState } from "react";
import Square from "./Square";

export const Table = ({ player, cpuBoard, setCpuBoard, gameWon, cpuShips }) => {
  const [board, setBoard] = useState(grid());
  const [ships, setShips] = useState(createRandomShips());


  function grid() {
    // Crea un tablero vacío de 10x10
    const board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board[i].push(0);
      }
    }
    return board;
  }
  function createRandomShips() {
    // Crea naves aleatorias en el tablero
    const ships = [];
    for (let i = 0; i < 5; i++) {
      // Genera posición aleatoria para la nave
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      // Dirección aleatoria (horizontal o vertical)
      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      ships.push({ x, y, direction });

      // Pone la nave en el tablero
      if (direction === 'horizontal') {
        for (let j = 0; j < i + 1; j++) {
          board[x][y + j] = 1;
        }
      } else {
        for (let j = 0; j < i + 1; j++) {
          board[x + j][y] = 1;
        }
      }
    }
    return ships;
  }
  return (
    <>
      <div className="bg-slate-300 m-1 rounded">
        <div className="grid grid-cols-3 place-content-center">
          <button className="border border-cyan-800 m-2" id="start">
            Start Game
          </button>
          <button className="border border-cyan-800 m-2" id="randomize">
            Randomize Ships
          </button>
          <button className="border border-cyan-800 m-2" id="reset">
            Reset Game
          </button>
        </div>
        <h3 className="text-center text-xl">Your turn</h3>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="grid grid-cols-10 ">

          {board.map((row, i) => (
            <tr key={i}>
              {
                row.map((cell, j) => (
                  <Square key={i + j} coords={i + j} ship={cell === 0 ? 'empty' : 'ship'} />
                ))
              }
            </tr>
          ))}

        </div>
      </div>

    </>
  );
};

export default Table;
