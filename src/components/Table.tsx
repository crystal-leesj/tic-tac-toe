import React from 'react';
import Cell from './Cell';

type Props = {
  handleClick:(cellIndex: number) => void,
  cells:string[]
}

const Table: React.FC<Props> = ({
  handleClick,
  cells
}) => {
  return (
    <div className='wrapper'>
      <div className='row'>
        <Cell handleClick={() => handleClick(0)} value={cells[0]} />
        <Cell handleClick={() => handleClick(1)} value={cells[1]} />
        <Cell handleClick={() => handleClick(2)} value={cells[2]} />
      </div>
      <div className='row'>
        <Cell handleClick={() => handleClick(3)} value={cells[3]} />
        <Cell handleClick={() => handleClick(4)} value={cells[4]} />
        <Cell handleClick={() => handleClick(5)} value={cells[5]} />
      </div>
      <div className='row'>
        <Cell handleClick={() => handleClick(6)} value={cells[6]} />
        <Cell handleClick={() => handleClick(7)} value={cells[7]} />
        <Cell handleClick={() => handleClick(8)} value={cells[8]} />
      </div>
    </div>
  )
};

export default Table;