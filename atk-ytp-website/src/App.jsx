import React from 'react';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero';
import FAQ from './components/faq/Faq';
import Footer from './components/footer/Footer';

function App() {
  const footerLinks = [
    {
      link: '#',
      label: 'Info',
    },
    {
      link: '#',
      label: 'Majoitus',
    },
    {
      link: '#',
      label: 'Ohjelma',
    },
    {
      link: '#',
      label: 'Jotain',
    },
  ];

  return (
    <div className='App'>
      <Navbar />

      <Hero />

      <FAQ />

      <Footer links={footerLinks} />
    </div>
  );
}

export default App;
