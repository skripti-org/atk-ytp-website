import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Spinner from '../assets/logos/prompt.svg';

import Navbar from './components/navigation/Navbar';
import MapComponent from './components/map/Map';
import Credits from './components/credits/Credits';
import Main from './components/hero/Main';

const Hero = React.lazy(() => import('./components/hero/Hero'));
const Info = React.lazy(() => import('./components/info/Info'));
const Schedule = React.lazy(() => import('./components/schedule/Schedule'));
const FAQ = React.lazy(() => import('./components/faq/Faq'));
const SponsorGrid = React.lazy(() => import('./components/sponsors/Sponsors'));
const Footer = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import('./components/footer/Footer'),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
  return moduleExports;
});

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
              background: '#E7FF50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={Spinner} className='tremble' />
          </div>
        }
      >
        <Helmet>
          <title>ATK-YTP &apos;23</title>
          <meta name='description' content='ATK-YTP 23 Joensuussa!' />
        </Helmet>

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
      </Suspense>
    </div>
  );
}

export default App;
