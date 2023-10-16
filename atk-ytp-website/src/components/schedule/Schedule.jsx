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
      main: true,
    },
    {
      time: 10,
      activity: t('schedule.closing'),
      main: true,
    },
    {
      time: 10.5,
      activity: 'Skripti ry & TKT laitos + Titol',
      main: true,
    },
    {
      time: 12,
      activity: 'Siili',
      main: true,
    },
    {
      time: 13,
      activity: 'Milja Köpsi',
      main: true,
    },
    {
      time: 14,
      activity: 'Nordea',
      main: true,
    },
    {
      time: 15,
      activity: 'Solita',
      main: true,
    },
    {
      time: 16,
      activity: t('schedule.crawl'),
      main: true,
    },
    {
      time: 19,
      activity: t('schedule.preparty1'),
      main: false,
    },
    {
      time: 21,
      activity: t('schedule.opening'),
      main: false,
    },
    {
      time: 22,
      activity: t('schedule.afterparty1'),
      main: false,
    },
    {
      time: 24,
      activity: 'Ursus Factory',
      main: false,
    },
  ];

  const thu = [
    {
      time: 7.5,
      activity: t('schedule.saunaleave'),
      main: true,
    },
    {
      time: 8,
      activity: t('schedule.sauna'),
      main: true,
    },
    {
      time: 11,
      activity: t('schedule.closing'),
      main: true,
    },
    {
      time: 11,
      activity: 'TEK',
      main: true,
    },
    {
      time: 12,
      activity: 'Sensire',
      main: true,
    },
    {
      time: 13,
      activity: 'Koeda Consulting',
      main: true,
    },
    {
      time: 14,
      activity: 'Sitowise',
      main: true,
    },
    {
      time: 15,
      activity: 'TBD',
      main: true,
    },
    {
      time: 16,
      activity: t('schedule.crawl'),
      main: true,
    },
    {
      time: 19,
      activity: t('schedule.preparty2'),
      main: true,
    },
    {
      time: 21,
      activity: t('schedule.opening'),
      main: true,
    },
    {
      time: 22,
      activity: t('schedule.afterparty2'),
      main: true,
    },
  ];

  const fri = [
    {
      time: 11,
      activity: t('schedule.closing'),
      main: true,
    },
    {
      time: 21,
      activity: t('schedule.asteriski'),
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
