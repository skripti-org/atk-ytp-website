import React from 'react';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero';
import FAQ from './components/faq/Faq';
import Footer from './components/footer/Footer';
import SponsorGrid from './components/sponsors/Sponsors';
import { Helmet } from 'react-helmet';
import Info from './components/info/Info';
import Schedule from './components/schedule/Schedule';
import Map from './components/map/Map';

function App() {

  {/*Nää ei ite asiassa toimi vielä D:*/}
  const footerLinks = [
    {
      link: '#info',
      label: 'Info',
    },
    {
      link: '#aikataulu',
      label: 'Aikataulu',
    },
    {
      link: '#kartta',
      label: 'Kartta',
    },
    {
      link: '#yhteistyokumppanit',
      label: 'Yhteistyökumppanit',
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

      <main>
        <Info />

        <Schedule />
        
        <Map />

        <FAQ />

        <SponsorGrid />
      </main>

      <Footer links={footerLinks} />
    </div>
  );
}

export default App;
