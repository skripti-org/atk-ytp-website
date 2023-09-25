import React from 'react';
import PageSection from '../layout/PageSection';
import { Anchor, Alert } from '@mantine/core';
import Paragraph from '../layout/Paragraph';
import { IconAlertCircle } from '@tabler/icons-react';

export default function Info() {
  return (
    <div id='info'>
      <PageSection title='Info'>
        <Alert radius={0} icon={<IconAlertCircle />} title='Huom!' variant='filled'>
          Sivujen tiedot ovat paikoittain vielä puutteellisia sekä ne saattavat muuttua ennen
          tapatumaa.
        </Alert>
        <Paragraph title='Majoitus'>
          Tapahtuman majoitus tapahtuu Pielisjoen koulussa sekä Joensuun yhteiskoulun luokiolla. Koulujen sijainnit löydät kartalta.
          Majoitukset avautuvat tapahtumapäivinä seuraavasti:
          Keskiviikkona majoitus aukeaa klo 8.00 ja sulkeutuu klo 10.00 seminaariesitysten ajaksi.
          Torstaina majoitus sulkeutuu klo 11.00 ja aukeaa klo 21.00.
          Perjantaina majoitus sulkeutuu klo 11.00.
          Molemmilla kouluilla päivystävät yövahdit molempina öinä, jotta majoittujilla on turvallinen ja miellyttävä oleskelu tapahtuman aikana.

          <br />
          <br />
          <b>Muistathan pitää majoituspaikan siistinä ja siivota omat jälkesi!</b>
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
          Joensuussa on helppo liikkua, sillä kaupunki on tasainen ja vaakasuorassa. Illan etkoja lukuunottamatta kaikki
          tapahtumapaikat sijaitsevat kävelymatkan päässä keskustasta. Mikäli apostolikyyti ei ole vaihtoehto,
          voi siirtymiset hoitaa helposti myös esim. &nbsp;
          <Anchor href='https://jojo.joensuu.fi/liput-ja-hinnat' target='_blank'>
            bussilla
          </Anchor> tai &nbsp;
          <Anchor href='https://www.taksiitasuomi.fi/' target='_blank'>
            taksilla
          </Anchor>.
          <Alert radius={0} icon={<IconAlertCircle />} title='Vinkki!' variant='filled' className='mt-2'>
            Vältä ruuhkat ja saavu Joensuuhun jo 500 päivää ennen tapahtumaa!
          </Alert>
        </Paragraph>

        <Paragraph title='Etkot'>
          Molempina iltoina järjestetään yhteiset etkot Karhunmäellä. Bussikyydit kulkevat paikalle
          ja sieltä pois molempina päivinä klo 19-23. Etkoille on mahdollista tuoda mukana omia
          virvokkeita sekä naposteltavia!
        </Paragraph>
        <Paragraph title='Jatkot'>
          Molempina YTP-päivinä järjestetään yhteiset jatkot illan huipennukseksi.
          <br />
          <br />
          Keskiviikon jatkot tarjoaa Las Palmas, joka toimii Sokos Hotel Kimmelin tiloissa.
          Illan artistina toimittaa Jussi Pelkosen ja Aleksi Ripatin muodostama garagerock-duo Ursus
          Factory! Keikka alkaa noin klo 24.00.
          <br />
          <br />
          Torstain jatkot järjestetään Ravintola Kerubissa, jossa pääsemme nauttimaan
          konemusiikista Affirmed:n, Digital Mindz:n ja Bionator Project:n tähdittämänä!
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

        <Paragraph title='Yhteystiedot'>
            Verkkosivut:&nbsp;
            <Anchor href='https://t.me/paakkis' target='_blank'>
              Juuso P
            </Anchor>,&nbsp;
            <Anchor href='https://t.me/nykanen' target='_blank'>
              Juho N
            </Anchor>,&nbsp;
            <Anchor href='https://t.me/eetukarttunen' target='_blank'>
              Eetu K
            </Anchor>
            <br />
            Majoitus:&nbsp;
            <Anchor href='https://t.me/toukojjouko' target='_blank'>
              Touko P
            </Anchor>
            <br />
            Rastikierrokset:&nbsp;
            <Anchor href='https://t.me/EmBBuu' target='_blank'>
              Emilia U
            </Anchor>,&nbsp;
            <Anchor href='https://t.me/sanniedita' target='_blank'>
              Sanni O
            </Anchor>
            <br />
            Bussikuljetukset:&nbsp;
            <Anchor href='https://t.me/sanniedita' target='_blank'>
              Sanni O
            </Anchor>
            <br />
            Aamusauna:&nbsp;
            <Anchor href='https://t.me/Jertsa' target='_blank'>
              Jermu R
            </Anchor>
            <br />
            Etkot & Jatkot:&nbsp;
            <Anchor href='https://t.me/san_teri' target='_blank'>
              Santeri M
            </Anchor>
            <br />
            Häirintäyhdyshenkilöt:&nbsp;
            <Anchor href='https://t.me/dalcane' target='_blank'>
              Antti H
            </Anchor>,&nbsp;
            <Anchor href='https://t.me/juliajunt' target='_blank'>
              Julia J
            </Anchor>
          <br />
        </Paragraph>

        <Paragraph title='Linkkejä'>
          <Anchor href='https://jojo.joensuu.fi/liput-ja-hinnat' target='_blank'>
            Joukkoliikenne JoJo
          </Anchor>
          <br />
          <Anchor href='https://t.me/+EOI-Do9oS6Q0YzJk' target='_blank'>
            ATK-YTP Telegram
          </Anchor>
          <br />
          <Anchor href='https://t.me/atkytp23tiedotus' target='_blank'>
            ATK-YTP Tiedotuskanava
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
