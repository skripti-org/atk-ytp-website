import React from 'react';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero';
import FAQ from './components/faq/Faq';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <FAQ />
    </div>
  );
}

export default App;
