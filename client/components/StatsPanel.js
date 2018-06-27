import React from 'react';

class StatsPanel extends React.Component {
  render() {
    return (
      <div id='stats-panel' className="flex">
        <div id='stats-gold'>Gold 2.541e176</div>
        <div id='stats-clickdmg'>Click Damage 1.498e158</div>
        <div id='stats-herosouls'>
          <div>Hero Souls 1.246e6</div>
          <div>Next Ascension (+2.528e10)</div>
        </div>
        <div id='stats-dps'>DPS 5.255e162</div>
        <div>mode (idle)</div>
      </div>
    );
  }
}

export default StatsPanel;
