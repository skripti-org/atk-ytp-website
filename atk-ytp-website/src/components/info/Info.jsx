import React from 'react';
import PageSection from '../layout/PageSection';
import { Button, Container, Title } from '@mantine/core';

export default function Info() {
  return (
    <>
      <PageSection title='Info'></PageSection>
      {/* Raaka sommitelma taustavärjätylle titlelle */}
      <Container sx={{ margin: 0, "max-width": "100%" }} bg='triangle-yellow'>
        <Title color="dark" order={2} pt={20} pb={20}>Tietoa</Title>
      </Container>
      <PageSection>
        <Title order={3}>Majoitus</Title>
        <Title order={3}>Liikkuminen</Title>
        <Title order={3}>Kartta</Title>
      </PageSection>
    </>
  );
}
