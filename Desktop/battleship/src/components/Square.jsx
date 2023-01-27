import React, { useState } from "react";

const Square = ({ ship, coords }) => {
  const [color, setColor] = useState('sky')
  const isShip = (e) => {
    console.log(e.target.id)
    if (e.target.id === 'ship') setColor('red')
    else {setColor('slate')}
  }


  return (
    <div
      onClick={(e) => isShip(e)}
      id={ship}
      className={
        `bg-${color}-300 border-2 border-sky-800 w-6 h-6 grid place-content-center`
      }
    />
  );
};

export default Square;
