import PageSection from '../layout/PageSection';
import { Grid } from '@mantine/core';
import TimeCard from './TimeCard';
import { nanoid } from 'nanoid';

export default function Schedule() {
  // TODO: rajapintaan?

  const wed = [
    {
      time: 8,
      activity: 'Majoitus aukeaa',
      main: true,
    },
    {
      time: 10,
      activity: 'Majoitus sulkeutuu',
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
      activity: 'Rastikierros alkaa',
      main: true,
    },
    {
      time: 19,
      activity: 'Etkot by Siili',
      main: false,
    },
    {
      time: 21,
      activity: 'Majoitus aukeaa',
      main: false,
    },
    {
      time: 22,
      activity: 'Jatkot Kimmelissä',
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
      activity: 'Lähtö aamusaunalle',
      main: true,
    },
    {
      time: 8,
      activity: 'Aamusauna by Nordea',
      main: true,
    },
    {
      time: 11,
      activity: 'Majoitus sulkeutuu',
      main: true,
    },
    {
      time: 11,
      activity: 'TEK',
      main: true,
    },
    {
      time: 12,
      activity: 'TBD',
      main: true,
    },
    {
      time: 13,
      activity: 'Koeda Consulting',
      main: true,
    },
    {
      time: 14,
      activity: 'TBD',
      main: true,
    },
    {
      time: 15,
      activity: 'TBD',
      main: true,
    },
    {
      time: 16,
      activity: 'Rastikierros alkaa',
      main: true,
    },
    {
      time: 19,
      activity: 'Etkot',
      main: true,
    },
    {
      time: 21,
      activity: 'Majoitus aukeaa',
      main: true,
    },
    {
      time: 22,
      activity: 'Reivit Kerubissa: Affirmed, Digital Mindz, Bionator Project',
      main: true,
    },
  ];

  const fri = [
    {
      time: 11,
      activity: 'Majoitus sulkeutuu',
      main: true,
    },
    {
      time: 21,
      activity: 'Asteriski kotona',
      main: true,
    },
  ];

  return (
    <div id='aikataulu'>
      <PageSection title='Aikataulu'>
        <Grid justify='center'>
          <Grid.Col span='auto' key={nanoid()}>
            <TimeCard dayString={'Ke 18.10.'} scheduleDay={wed} />
          </Grid.Col>
          <Grid.Col span='auto' key={nanoid()}>
            <TimeCard dayString={'To 19.10.'} scheduleDay={thu} />
          </Grid.Col>
          <Grid.Col span='auto' key={nanoid()}>
            <TimeCard dayString={'Pe 20.10.'} scheduleDay={fri} />
          </Grid.Col>
        </Grid>
      </PageSection>
    </div>
  );
}
