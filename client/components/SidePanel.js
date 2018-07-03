import React from 'react';

class SidePanel extends React.Component {
  render() {
    return (
      <div id='SidePanel' className='flex'>
        <div>Progression Toggle</div>
        <div>Settings</div>
        <div>Achievements</div>
        <div>Relics</div>
      </div>
    );
  }
}

export default SidePanel;
