import React, { useRef } from 'react';
import { Accordion, Blockquote } from '@mantine/core';
import PageSection from '../layout/PageSection';
import HighlightSection from '../layout/HighlightSection';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Q = 0;
const A = 1;
const qas = [
  ['ATK-YTP?', 'Automaattisen tietojenkäsittelyn yhteistoimintapäivät.'],
  ['Joensuu?', 'Joensuu on Suomen kaupunki ja Pohjois-Karjalan maakuntakeskus' +
    'joka sijaitsee Saimaan Pyhäselän pohjoisrannalla Pielisjoen suulla Pohjois-Karjalan maakunnassa. ' +
    'Joensuu on asukasluvultaan Suomen 12. suurin kaupunki.'],
  ['Ravintola?', 'Mikko. Ensiluokkaista asiakaskohtelua kaupungin suurimman olutvalikoiman kera.'],
  ['Kolmio?', 'Ukko.'],
  ['Rastikierros?', 'Illalla. Day 1 ainejärjestöt, Day 2 TKT-laitos / firmat'],
  ['Majoitus?', 'Kouluilla.'],
];
const quotes = [
  {
    text: 'Ah shit, here we go again',
    person: 'CJ',
  },
  {
    text: 'Nautin Joensuusta',
    person: 'Idän susi',
  },
  {
    text: 'Kunnon kusipaskakännit ja vetoja',
    person: 'Random Guy',
  },
  {
    text: 'Wine is fine, but whiskey is quicker.',
    person: 'Hank Moody',
  },
];
const FAQ = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <PageSection title='FAQ'>
      <Accordion variant='separated' radius='0'>
        {qas.map((qa) => {
          return (
            <Accordion.Item key={qa[Q]} value={qa[Q]}>
              <Accordion.Control>{qa[Q]}</Accordion.Control>
              <Accordion.Panel>{qa[A]}</Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>

      <HighlightSection>
        <Carousel
          mx='auto'
          withIndicators
          loop
          height={200}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          orientation='vertical'
        >
          {quotes.map((quote) => {
            return (
              <Carousel.Slide
                key={quote.text}
                className='flex items-center justify-center text-center'
              >
                <Blockquote cite={'- ' + quote.person}>{quote.text}</Blockquote>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </HighlightSection>
    </PageSection>
  );
};

export default FAQ;
