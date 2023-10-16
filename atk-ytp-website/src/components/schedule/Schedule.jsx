import PageSection from '../layout/PageSection';
import { Grid } from '@mantine/core';
import TimeCard from './TimeCard';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

export default function Schedule() {
  // TODO: rajapintaan?
  const { t } = useTranslation();
  const wed = [
    {
      time: 8,
      activity: t('schedule.opening'),
      description: '',
      main: true,
    },
    {
      time: 10,
      activity: t('schedule.closing'),
      description: '',
      main: true,
    },
    {
      time: 10.5,
      activity: 'Skripti ry & TKT laitos + Titol',
      description: '',
      main: true,
    },
    {
      time: 12,
      activity: 'Siili',
      description: '"Siili in Brief"',
      main: true,
    },
    {
      time: 13,
      activity: 'Milja Köpsi',
      description: 'Verkostoituminen ja työelämän taidot IT-alalla',
      main: true,
    },
    {
      time: 14,
      activity: 'Nordea',
      description: '',
      main: true,
    },
    {
      time: 15,
      activity: 'Solita',
      description: '',
      main: true,
    },
    {
      time: 16,
      activity: t('schedule.crawl'),
      description: '',
      main: true,
    },
    {
      time: 19,
      activity: t('schedule.preparty1'),
      description: '',
      main: false,
    },
    {
      time: 21,
      activity: t('schedule.opening'),
      description: '',
      main: false,
    },
    {
      time: 22,
      activity: t('schedule.afterparty1'),
      description: '',
      main: false,
    },
    {
      time: 24,
      activity: 'Ursus Factory',
      description: '',
      main: false,
    },
  ];

  const thu = [
    {
      time: 7.5,
      activity: t('schedule.saunaleave'),
      description: '',
      main: true,
    },
    {
      time: 8,
      activity: t('schedule.sauna'),
      description: '',
      main: true,
    },
    {
      time: 11,
      activity: t('schedule.closing'),
      description: '',
      main: true,
    },
    {
      time: 11,
      activity: 'TEK',
      description: '',
      main: true,
    },
    {
      time: 12,
      activity: 'Sensire',
      description: '',
      main: true,
    },
    {
      time: 13,
      activity: 'Koeda Consulting',
      description: 'Kuinka kannattaa lähteä rakentamaan omaa yritystä? Mitä Koeda tekee? Mitä kannattaa opiskella jos haluaa tulevaisuudessa datan pariin töihin? Näihin ja useisiin muihin kysymyksiin lähdetaan hakemaan vastauksia kun Koedan co-founder ja entinen järjestöaktiivi Paavo Koivistoinen palaa opiskelijoiden keskuuteen Skripti ry:n järjestämillä ATK-yhteistoimintapäivillä.',
      main: true,
    },
    {
      time: 14,
      activity: 'Sitowise',
      description: '',
      main: true,
    },
    {
      time: 15,
      activity: 'TBD',
      description: '',
      main: true,
    },
    {
      time: 16,
      activity: t('schedule.crawl'),
      description: '',
      main: true,
    },
    {
      time: 19,
      activity: t('schedule.preparty2'),
      description: '',
      main: true,
    },
    {
      time: 21,
      activity: t('schedule.opening'),
      description: '',
      main: true,
    },
    {
      time: 22,
      activity: t('schedule.afterparty2'),
      description: '',
      main: true,
    },
  ];

  const fri = [
    {
      time: 11,
      activity: t('schedule.closing'),
      description: '',
      main: true,
    },
    {
      time: 21,
      activity: t('schedule.asteriski'),
      description: '',
      main: true,
    },
  ];

  return (
    <div id='aikataulu'>
      <PageSection title={t('common.schedule')}>
        <Grid justify='center'>
          <Grid.Col span='auto' key={nanoid()}>
            <TimeCard dayString={t('schedule.wed') + ' 18.10.'} scheduleDay={wed} />
          </Grid.Col>
          <Grid.Col span='auto' key={nanoid()}>
            <TimeCard dayString={t('schedule.thu') + ' 19.10.'} scheduleDay={thu} />
          </Grid.Col>
          <Grid.Col span='auto' key={nanoid()}>
            <TimeCard dayString={t('schedule.fri') + ' 20.10.'} scheduleDay={fri} />
          </Grid.Col>
        </Grid>
      </PageSection>
    </div>
  );
}
