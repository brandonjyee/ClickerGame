import React from 'react';
import StatsPanel from './StatsPanel';
import LevelPanel from './LevelPanel';
import GameControlPanel from './GameControlPanel';

class Game extends React.Component {
  render() {
    return (
      <div>
        <StatsPanel />
        <LevelPanel />
        <GameControlPanel />
      </div>
    );
  }
}

export default Game;
