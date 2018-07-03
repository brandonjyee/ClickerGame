import React from 'react';
import StatsPanel from './StatsPanel';
import LevelPanel from './LevelPanel';
import SidePanel from './SidePanel';
import GameControlPanel from './GameControlPanel';
import HeroMenu from './HeroMenu';

class Game extends React.Component {
  render() {
    return (
      <div>
        <div className='ui-layer'>
          <StatsPanel />
          <LevelPanel />
          <SidePanel />
          <GameControlPanel />
        </div>
        <div className='game-layer'>
          <div className='monster flex'>
            <div style={{ verticalAlign: 'middle', width: '100px', height: '100px' }}>monster</div>
          </div>
          <HeroMenu />
        </div>
      </div>
    );
  }
}

export default Game;
