import React from 'react';
import GameControlPanelItem from './GameControlPanelItem';

const GameControlPanel = () => {
  return (
    <div id='GameControlPanel' className='flex'>
      <GameControlPanelItem name='Heroes' />
      <GameControlPanelItem name='Powers' />
      <GameControlPanelItem name='Rubies' />
      <GameControlPanelItem name='Ancients' />
      <GameControlPanelItem name='Mercs' />
      <GameControlPanelItem name='Mystics' />
    </div>
  );
}

export default GameControlPanel;
