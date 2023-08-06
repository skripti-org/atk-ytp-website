import React from 'react';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero';
import FAQ from './components/faq/Faq';
import Footer from './components/footer/Footer';
import SponsorGrid from './components/sponsors/Sponsors';
import { Helmet } from 'react-helmet';
import Info from './components/info/Info';
import Schedule from './components/schedule/Schedule';

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
      <Helmet>
        <title>ATK-YTP &apos;23</title>
        <meta name='description' content='ATK-YTP 23 Joensuussa!' />
      </Helmet>

      <Navbar />

      <Hero />

      <Info />

      <Schedule />

      <FAQ />

      <SponsorGrid />

      <Footer links={footerLinks} />
    </div>
  );
}

export default App;
