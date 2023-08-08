import React from 'react';
import PageSection from '../layout/PageSection';
import { Anchor, Alert } from '@mantine/core';
import Paragraph from '../layout/Paragraph';
import { IconAlertCircle } from '@tabler/icons-react';

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
          <Alert radius={0} icon={<IconAlertCircle size='1rem' />} title='Vinkki!' variant='filled'>
            Vältä ruuhkat ja saavu Joensuuhun jo 500 päivää ennen tapahtumaa!
          </Alert>
        </Paragraph>

        {/*Juholle terkkuja, päräytin tähän tämmösen karttapalvelu-upotuksen testiin millanen oli serverilläkin.
         En muotoillu ennen kun lyödään lukkoon napataanko tää vai Leaflet
        */}

        <Paragraph title='Kartta'>
        <iframe
        class="map"
        width="100%"
        height="500vh" // Aika raju bro :D
        frameborder="0"
        allowfullscreen
        src="https://framacarte.org/m/162105/" />


        </Paragraph>

        <Paragraph title='Linkkivinkkejä'></Paragraph>
      </PageSection>
    </>
  );
}
