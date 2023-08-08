import React from 'react';
import PageSection from '../layout/PageSection';
import { Anchor } from '@mantine/core';
import Paragraph from '../layout/Paragraph';

export default function Info() {
  return (
    <>
      {/* Eetulle terkkuja et siirsin sen keltasen taustan tuonne pagesectioniin :D jos ihmettelet minne hävis */}
      <PageSection title='Info'>
        <Paragraph title='Majoitus'>
          Nukutaan jos nukutaan.
          <br />
          termos!
        </Paragraph>

        <Paragraph title='Liikkuminen'>
          Jalan{' '}
          <Anchor
            href='https://www.karjalainen.fi/maakunta/joensuun-metro-pikatukku-suljetaan-kevaan-aikana-wihuri-metro-tukku-karsii-verkostostaan-alkuvuoden-aikana-kaksi-muutakin-pikatukkua-syyna-koronapandemia'
            target='_blank'
          >
            tai metrolla.
          </Anchor>
        </Paragraph>

        <Paragraph title='Kartta'></Paragraph>

        <Paragraph title='Linkkivinkkejä'></Paragraph>
      </PageSection>
    </>
  );
}
