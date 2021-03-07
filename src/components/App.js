import React from 'react';
import '../Style.css';
import SoundDetail from './SoundDetail';
import SoundList from './SoundList';

function App() {
  return (
    <div className='App' id='drum-machine'>
      <SoundList />
      <SoundDetail />
    </div>
  );
}

export default App;
