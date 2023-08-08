import React from 'react';
import PageSection from '../layout/PageSection';
import { Title } from '@mantine/core';

export default function Info() {
  return (
    <>
      {/* Eetulle terkkuja et siirsin sen keltasen taustan tuonne pagesectioniin :D jos ihmettelet minne hävis */}
      <PageSection title='Info'>
        <Title order={3}>Majoitus</Title>
        <Title order={3}>Liikkuminen</Title>
        <Title order={3}>Kartta</Title>
      </PageSection>
    </>
  );
}
