import React, { Suspense } from 'react';
import Spinner from '../assets/logos/prompt.svg';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/navigation/Navbar';
import Main from './components/hero/Main';
import Schedule from './components/schedule/Schedule';
import FAQ from './components/faq/Faq';
import Credits from './components/credits/Credits';
import Footer from './components/footer/Footer';
import Team from './components/team/Team';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';

const Hero = React.lazy(() => import('./components/hero/Hero'));
const Info = React.lazy(() => import('./components/info/Info'));
const MapComponent = React.lazy(() => import('./components/map/Map'));
const SponsorGrid = React.lazy(() => import('./components/sponsors/Sponsors'));

function App() {
  const { t } = useTranslation();

  const links = [
    {
      link: '#info',
      label: 'Info',
    },
    {
      link: '#aikataulu',
      label: t('common.schedule'),
    },
    {
      link: '#kartta',
      label: t('common.map'),
    },
    {
      link: '#yhteistyokumppanit',
      label: t('common.partners'),
    },
  ];

  return (
    <I18nextProvider i18n={i18n}>
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

            {/*<Team />*/}
          </main>

          <Footer links={links} />
          <Analytics />
        </Suspense>
      </div>
    </I18nextProvider>
  );
}

export default App;
