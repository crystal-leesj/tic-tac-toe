import React, { useState, useEffect } from 'react';
import Table from './Table';

const Game: React.FC = () => {
  const [cells, setCells] = useState<string[]>(new Array(9).fill(''));
  const [isO, setIsO] = useState<boolean>(true);
  const [winner, setWinner] = useState<string>('');

  const checkWinner = () => {
    const winningLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    // console.log(cells);
    for (let i = 0; i < winningLines.length; i++) {
      const [a,b,c] = winningLines[i];
      if (cells[a] !== '' && cells[a] === cells[b] && cells[b] === cells[c]) {
        // console.log('Winner found! Winner is ', cells[a]);
        setWinner(cells[a]);
        return cells[a];
      }
    }
    return null;
  }

  useEffect(() => {
    checkWinner();
  }, cells)

  const handleClick = (cellIndex: number) => {
    if (winner) {
      return;
    }
    if (cells[cellIndex] !== '') {
      return;
    }
    let newCells = [...cells];
    newCells[cellIndex] = isO ? 'O' : 'X';
    setCells(newCells);
    setIsO(!isO);
  }

  const handleRestart = () => {
    setCells(new Array(9).fill(''));
    setIsO(true);
    setWinner('');
  }

  return (
    <div>
      <div className='title'>Tic Tac Toe</div>
      <Table handleClick={handleClick} cells={cells} />
      {winner &&
        <div className='player'>Winner is {winner}</div>
      }
      {!winner &&
        <div className='player'>{isO ? 'O' : 'X'} turn</div>
      }
      <div><button onClick={handleRestart}>Restart</button></div>
    </div>
  )
};

export default Game;