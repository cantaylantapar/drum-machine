import React from 'react';
import { connect } from 'react-redux';
import { selectSound } from '../actions';
import '../Style.css';

class SoundList extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress = (e) => {
    let x = this.props.sounds.find((sound) => sound.keyCode === e.keyCode);
    this.props.selectSound(x);
  };

  renderList() {
    return this.props.sounds.map((sound) => {
      return (
        <div className='drum-pad' id={sound.id} key={sound.id} onClick={() => this.props.selectSound(sound)}>
          <audio className='clip' id={sound.keyTrigger} src={sound.url} /> {sound.keyTrigger}
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className='board'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { sounds: state.sounds };
};

export default connect(mapStateToProps, { selectSound: selectSound })(SoundList);
