import React from 'react';
import { Accordion, Blockquote } from '@mantine/core';
import PageSection from '../layout/PageSection';
import HighlightSection from '../layout/HighlightSection';

const Q = 0;
const A = 1;
const qas = [
  ['ATK-YTP?', 'Automaattisen tietojenkäsittelyn yhteistoimintapäivät'],
  ['Joensuu?', 'Idässä.'],
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
        <Blockquote cite='- Juuso Paakkunainen'>
          Life is like an npm install - you never know what you are going to get.
        </Blockquote>
      </HighlightSection>
    </PageSection>
  );
};

export default FAQ;
