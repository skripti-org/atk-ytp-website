import PageSection from '../layout/PageSection';
import { Anchor, Alert, List } from '@mantine/core';
import Paragraph from '../layout/Paragraph';
import { IconAlertCircle } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export default function Info() {
  const { t } = useTranslation();

  return (
    <div id='info'>
      <PageSection title='Info'>
        <Alert
          radius={0}
          icon={<IconAlertCircle />}
          title={t('info.importantNotice')}
          variant='filled'
        >
          {t('info.siteInformation')}
        </Alert>

        <Paragraph title={t('info.whatToBring')}>
          <List type='ordered' withPadding size='lg'>
            <List.Item>{t('info.listItems.item1')}</List.Item>
            <List.Item>{t('info.listItems.item2')}</List.Item>
            <List.Item>{t('info.listItems.item3')}</List.Item>
            <List.Item>{t('info.listItems.item4')}</List.Item>
            <List.Item>{t('info.listItems.item5')}</List.Item>
            <List.Item>{t('info.listItems.item6')}</List.Item>
          </List>
        </Paragraph>

        <Paragraph title={t('info.accommodation')}>
          {t('info.accommodationDetails')}
          <br />
          <br />
          <b>{t('info.rememberToKeep')}</b>
        </Paragraph>

        <Paragraph title={t('info.food')}>
          {t('info.hungerRelief')}
          <br />
          <br />
          {t('info.studentRestaurants')}
          <br />
          <br />
          {t('info.restaurantHint')}{' '}
          <Anchor href=' https://www.uef.fi/fi/kampusravintolat' target='_blank'>
            {t('info.restaurants')}
          </Anchor>
          <br />
          <br />
          {t('info.lateNightGroceryStores')}
        </Paragraph>

        <Paragraph title={t('info.gettingAround')}>
          {t('info.easyMovement')}&nbsp;
          <Anchor href='https://jojo.joensuu.fi/liput-ja-hinnat' target='_blank'>
            {t('info.bus')}
          </Anchor>{' '}
          {t('info.or')}&nbsp;
          <Anchor href='https://www.taksiitasuomi.fi/' target='_blank'>
            {t('info.taxi')}
          </Anchor>{' '}
          {t('info.or')} {t('info.tier')}.
          <Alert
            radius={0}
            icon={<IconAlertCircle />}
            title={t('info.hint')}
            variant='filled'
            className='mt-2'
          >
            {t('info.avoidCrowds')}
          </Alert>
        </Paragraph>

        <Paragraph title={t('info.challengeStations')}>
          {t('info.tradition')}
          <br />
          <br />
          {t('info.localGuilds')}
        </Paragraph>

        <Paragraph title={t('info.preParties')}>
          {t('info.bothEvenings')}
          <br />
          <br />
          {t('info.firstEvening')}
          <Alert
            radius={0}
            icon={<IconAlertCircle />}
            title={t('info.hint')}
            variant='filled'
            className='mt-2'
          >
            {t('info.rememberShop')}
          </Alert>
        </Paragraph>
        <Paragraph title={t('info.afterParties')}>
          {t('info.bothYtpDays')}
          <br />
          <br />
          {t('info.wednesdayAfterParty')}
          <br />
          <br />
          {t('info.thursdayAfterParty')}
        </Paragraph>

        <Paragraph title={t('info.safeSpace')}>
          {t('info.safeSpace1')}
          <br />
          <br />
          {t('info.safeSpace2')}
          <br />
          <br />
          {t('info.moreInformationSafety')}
          <Anchor href='https://www.skripti.org/turvallinentila' target='_blank'>
            {' '}
            {t('info.moreInformationSafety2')}
          </Anchor>
        </Paragraph>

        <Paragraph title='Yhteystiedot'>
          {t('info.generalInquiries')}:&nbsp;
          <Anchor href='https://t.me/san_teri' target='_blank'>
            Santeri M
          </Anchor>
          <br />
          {t('info.websiteContacts')}:&nbsp;
          <Anchor href='https://t.me/paakkis' target='_blank'>
            Juuso P
          </Anchor>
          ,&nbsp;
          <Anchor href='https://t.me/nykanen' target='_blank'>
            Juho N
          </Anchor>
          ,&nbsp;
          <Anchor href='https://t.me/eetukarttunen' target='_blank'>
            Eetu K
          </Anchor>
          <br />
          {t('info.accommodationContact')}:&nbsp;
          <Anchor href='https://t.me/toukojjouko' target='_blank'>
            Touko P
          </Anchor>
          <br />
          {t('info.challengeStationsContacts')}t:&nbsp;
          <Anchor href='https://t.me/EmBBuu' target='_blank'>
            Emilia U
          </Anchor>
          ,&nbsp;
          <Anchor href='https://t.me/sanniedita' target='_blank'>
            Sanni O
          </Anchor>
          <br />
          {t('info.busTransportContacts')}:&nbsp;
          <Anchor href='https://t.me/sanniedita' target='_blank'>
            Sanni O
          </Anchor>
          <br />
          {t('info.morningSaunaContact')}:&nbsp;
          <Anchor href='https://t.me/Jertsa' target='_blank'>
            Jermu R
          </Anchor>
          <br />
          {t('info.prePartyAfterPartyContacts')}:&nbsp;
          <Anchor href='https://t.me/san_teri' target='_blank'>
            Santeri M
          </Anchor>
          <br />
          {t('info.harassmentContacts')}:&nbsp;
          <Anchor href='https://t.me/dalcane' target='_blank'>
            Antti H
          </Anchor>
          ,&nbsp;
          <Anchor href='https://t.me/juliajunt' target='_blank'>
            Julia J
          </Anchor>
          <br />
        </Paragraph>

        <Paragraph title={t('info.links')}>
          <Anchor href='https://jojo.joensuu.fi/liput-ja-hinnat' target='_blank'>
            {t('info.publicTransportJoJo')}
          </Anchor>
          <br />
          <Anchor href='https://t.me/+EOI-Do9oS6Q0YzJk' target='_blank'>
            ATK-YTP Telegram
          </Anchor>
          <br />
          <Anchor href='https://t.me/atkytp23tiedotus' target='_blank'>
            {t('info.atkYtpAnnouncements')}
          </Anchor>
          <br />
          <Anchor href='https://www.skripti.org' target='_blank'>
            Skripti ry
          </Anchor>
          <br />
          <Anchor href='https://www.skripti.org/turvallinentila' target='_blank'>
            {t('info.skriptiRySafeSpace')}
          </Anchor>
        </Paragraph>
      </PageSection>
    </div>
  );
}
