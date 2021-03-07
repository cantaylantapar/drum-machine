import React from 'react';
import { connect } from 'react-redux';
import '../Style.css';

const SoundDetail = ({ sound }) => {
  if (!sound) {
    return <div id='display'>Select a button</div>;
  }
  return <div id='display'>{sound.id}</div>;
};

const mapStateToProps = (state) => {
  return { sound: state.selectedSound };
};

export default connect(mapStateToProps)(SoundDetail);
