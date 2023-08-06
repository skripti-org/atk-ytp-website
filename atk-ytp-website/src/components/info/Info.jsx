import React from 'react';
import PageSection from '../layout/PageSection';
import { Title } from '@mantine/core';

export default function Info() {
  return (
    <PageSection title='Info'>
      <Title order={3}>Majoitus</Title>
      <Title order={3}>Liikkuminen</Title>
      <Title order={3}>Kartta</Title>
    </PageSection>
  );
}
