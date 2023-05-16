import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className='App'>
      {' <YtpHelmet /> '}
      <Navbar />
      <Hero />

      <canvas id='webgl-canvas'></canvas>
    </div>
  );
}

export default App;
