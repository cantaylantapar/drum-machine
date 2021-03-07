import React from 'react';

function Drumpad() {
  return (
    <div className='drum-pad' id={this.props.clipId} onClick={this.playSound} style={this.state.padStyle}>
      <audio className='clip' id={this.props.keyTrigger} src={this.props.clip} />
      {this.props.keyTrigger}
    </div>
  );
}

export default Drumpad;
