import React from 'react';
import LevelCard from './LevelCard';

class LevelPanel extends React.Component {
  render() {
    return (
      <div id='level-panel' className='flex'>
        <LevelCard bigNumber={'2K'} smallNumber={'387'} />
        <LevelCard bigNumber={'2K'} smallNumber={'388'} />
      </div>
    );
  }
}

export default LevelPanel;
