import { Accordion, Blockquote, rem } from '@mantine/core';
import PageSection from '../layout/PageSection';
import HighlightSection from '../layout/HighlightSection';
import { Carousel } from '@mantine/carousel';
import { IconArrowDown, IconArrowUp } from '@tabler/icons-react';

const Q = 0;
const A = 1;
const qas = [
  ['ATK-YTP?', 'Automaattisen tietojenkäsittelyn yhteistoimintapäivät.'],
  [
    'Joensuu?',
    'Joensuu on Suomen kaupunki ja Pohjois-Karjalan maakuntakeskus, ' +
      'joka sijaitsee Saimaan Pyhäselän pohjoisrannalla Pielisjoen suulla Pohjois-Karjalan maakunnassa. ' +
      'Joensuu on asukasluvultaan Suomen 12. suurin kaupunki.',
  ],
  ['Ravintola?', 'Mikko. Ensiluokkaista asiakaskohtelua kaupungin suurimman olutvalikoiman kera.'],
  ['Kolmio?', 'Ukko.'],
  ['Rastikierros?', 'Illalla. Day 1 ainejärjestöt, Day 2 TKT-laitos / firmat'],
  ['Majoitus?', 'Kouluilla.'],
  ['Use-case?', 'Jyys keissi.'],
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
    text: 'write once, run anywhere',
    person: 'Java',
  },
  /*
  {
    text: 'Kunnon kusipaskakännit ja vetoja',
    person: 'Random Guy',
  },*/
  {
    text: 'Wine is fine, but whiskey is quicker.',
    person: 'Hank Moody',
  },
];
const FAQ = () => {
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
          orientation='vertical'
          nextControlIcon={
            <IconArrowDown style={{ width: rem(16), height: rem(16) }} aria-label='next slide' />
          }
          previousControlIcon={
            <IconArrowUp style={{ width: rem(16), height: rem(16) }} aria-label='previous slide' />
          }
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
