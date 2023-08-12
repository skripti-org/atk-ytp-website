import React from 'react';
import PageSection from '../layout/PageSection';
import { Anchor, Alert } from '@mantine/core';
import Paragraph from '../layout/Paragraph';
import { IconAlertCircle } from '@tabler/icons-react';

export default function Info() {
  return (
    <div id='info'>
      <PageSection title='Info'>
        <Paragraph title='Majoitus'>
          Tapahtuman majoitus tapahtuu kouluilla x ja y. Majoitukset avautuvat tapahtumapäivinä klo
          x ja sulkeutuvat klo x. Muistathan pitää majoituspaikan siistinä ja siivota omat jälkesi!
        </Paragraph>

        <Paragraph title='Ruoka'>
          Näläkäinen nikotteleksen, kyllin syönyt röyhteleksen.
          <br />
          <br />
          Joensuun kampukselta löytyy useita opiskelijaravintoloita tapahtumapaikan läheltä, kuten
          Carelia, Kampus Bistro ja Wicked Rabbit (kasvisruoka). Opiskelijaravintoloiden lisäksi
          Joensuun keskusta on pullollaan erilaisia ruokapaikkoja. Näiden lisäksi Foodora ja Wolt
          kuljettavat sapuskaa.
          <br />
          <br />
          Kurkkaappa joutessas:{' '}
          <Anchor href=' https://www.uef.fi/fi/kampusravintolat' target='_blank'>
            Joensuun kampusravintolat ja -kahvilat.
          </Anchor>
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

        <Paragraph title='Turvallinen tila'>
          Tapahtumassa noudatetaan turvallisen tilan periaatteita. Yhdenvertaisuuslain mukaan ketään
          ei saa syrjiä iän, alkuperän, kansalaisuuden, kielen, uskonnon, vakaumuksen, mielipiteen,
          poliittisen toiminnan, ammattiyhdistystoiminnan, perhesuhteiden, terveydentilan,
          vammaisuuden, seksuaalisen suuntautumisen, tai muun henkilöön liittyvän syyn perusteella.
          <br />
          <br />
          Turvallisemmilla tiloilla viitataan yhteisölliseen pyrkimykseen luoda turvallisuutta
          lisääviä käytäntöjä. Käytännössä turvallisemmissa tiloissa ainejärjestö ja sen jäsenet
          pyrkivät ottamaan vastuuta hankalista tilanteista. Ristiriitoja käsitellään sen sijaan,
          että niitä vain siedetään.
          <br />
          <br />
          Lisätietoja tapahtumassa voimassa olevista turvallisen tilan periaatteissa löydät
          <Anchor href='https://www.skripti.org/turvallinentila' target='_blank'>
            {' '}
            Skripti ry:n weppisivuilta.
          </Anchor>
        </Paragraph>

        <Paragraph title='Linkkejä'>
          <Anchor href='https://jojo.joensuu.fi/liput-ja-hinnat' target='_blank'>
            Joukkoliikenne JoJo
          </Anchor>
          <br />
          <Anchor href='' target='_blank'>
            ATK-YTP Telegram
          </Anchor>
          <br />
          <Anchor href='https://www.skripti.org' target='_blank'>
            Skripti ry
          </Anchor>
          <br />
          <Anchor href='https://www.skripti.org/turvallinentila' target='_blank'>
            Skripti ry:n turvallisen tilan periaatteet
          </Anchor>
        </Paragraph>
      </PageSection>
    </div>
  );
}
