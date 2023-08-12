import React from 'react';
import PageSection from '../layout/PageSection';
import { Anchor, Alert } from '@mantine/core';
import Paragraph from '../layout/Paragraph';
import { IconAlertCircle } from '@tabler/icons-react';
export default function Info() {
  return (
    <div id="info">
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

        <Paragraph title='Linkkejä'>
          <Anchor
              href='https://jojo.joensuu.fi/liput-ja-hinnat'
              target='_blank'
            >
            Joukkoliikenne JoJo
          </Anchor>
          <br />
          <Anchor
              href=''
              target='_blank'
            >
            ATK-YTP Telegram
          </Anchor>
          <br />
          <Anchor
              href=''
              target='_blank'
            >
            Skripti ry
          </Anchor>
        </Paragraph>
        
      </PageSection>
    </div>
  );
}
