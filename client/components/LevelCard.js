import React from 'react';

const LevelCard = (props) => {
    return (
      <div className='level-card flex'>
        <div className='level-bignumber'>{props.bigNumber}</div>
        <div className='level-smallnumber'>{props.smallNumber}</div>
      </div>
    );
}

export default LevelCard;
