import React from 'react';
import { Accordion, Blockquote } from '@mantine/core';
import PageSection from '../layout/PageSection';
import HighlightSection from '../layout/HighlightSection';
import { Carousel } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
const Q = 0;
const A = 1;
const qas = [
  ['ATK-YTP?', 'Automaattisen tietojenkäsittelyn yhteistoimintapäivät'],
  ['Joensuu?', 'Idässä.'],
];
const quotes = [
  {
    text: 'Life is like an npm install - you never know what you are going to get.',
    person: 'Juuso Paakkunainen',
  },
  {
    text: 'Kunnon kusipaskakännit ja vetoja',
    person: 'Random Guy',
  },
  {
    text: 'Wine if fine, but whiskey is quicker.',
    person: 'Hank Moody',
  },
  {
    text: 'Nautin Joensuusta',
    person: 'Idän susi',
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
        <Carousel mx="auto" withIndicators height={200}>
          {quotes.map((quote) => {
              return (
                <Carousel.Slide className='flex items-center text-center justify-center'>
                  <Blockquote cite={'- ' + quote.person}>
                    {quote.text}
                  </Blockquote>
                </Carousel.Slide>
              );
            })}
        </Carousel>
      </HighlightSection>
    </PageSection>
  );
};

export default FAQ;
