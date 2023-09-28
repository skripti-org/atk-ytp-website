import React, { Suspense } from 'react';
import Spinner from '../assets/logos/prompt.svg';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/navigation/Navbar';
import Main from './components/hero/Main';
import Schedule from './components/schedule/Schedule';
import FAQ from './components/faq/Faq';
import Credits from './components/credits/Credits';
import Footer from './components/footer/Footer';

const Hero = React.lazy(() => import('./components/hero/Hero'));
const Info = React.lazy(() => import('./components/info/Info'));
const MapComponent = React.lazy(() => import('./components/map/Map'));
const SponsorGrid = React.lazy(() => import('./components/sponsors/Sponsors'));

function App() {
  const links = [
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
      <Suspense
        fallback={
          <div
            style={{
              width: '100vw',
              height: '100vh',
              background: '#070707',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={Spinner} className='tremble' />
          </div>
        }
      >
        <Navbar links={links} />

        <Hero />

        <main>
          <Main />

          <Info />

          <Schedule />

          <MapComponent />

          <FAQ />

          <SponsorGrid />

          <Credits />
        </main>

        <Footer links={links} />
        <Analytics />
      </Suspense>
    </div>
  );
}

export default App;
