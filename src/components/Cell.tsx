import React from 'react';

type Props = {
  value: string,
  handleClick: () => void
}

const Cell: React.FC<Props> = ({
  value = '',
  handleClick
}) => {
  return (
    <div className="cell" onClick={handleClick}>
      {value}
    </div>
  )
};

export default Cell;