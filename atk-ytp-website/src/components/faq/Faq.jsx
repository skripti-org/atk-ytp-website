import React from 'react';
import { Accordion } from '@mantine/core';
import PageSection from '../layout/PageSection';

const Q = 0;
const A = 1;
const qas = [
  ['ATK-YTP?', 'Automaattisen tietojenkäsittelyn yhteistoimintapäivät'],
  ['Joensuu?', 'Idässä.'],
];

const FAQ = () => {
  return (
    <PageSection title='FAQ'>
      <Accordion variant='separated' radius='xs' defaultValue='customization'>
        {qas.map((qa) => {
          return (
            <Accordion.Item key={qa[Q]} value={qa[Q]}>
              <Accordion.Control>{qa[Q]}</Accordion.Control>
              <Accordion.Panel>{qa[A]}</Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </PageSection>
  );
};

export default FAQ;
