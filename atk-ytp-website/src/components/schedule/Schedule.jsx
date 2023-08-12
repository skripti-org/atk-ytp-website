import React from 'react';
import PageSection from '../layout/PageSection';
import { Divider, Flex, Paper, Table, Text } from '@mantine/core';

export default function Schedule() {
  function getProgram(day) {
    return (
      <Table highlightOnHover withColumnBorders withBorder>
        <thead>
          <tr>
            <th>klo</th>
            <th>ohjelma</th>
          </tr>
        </thead>
        <tbody>
          {day.map((event) => (
            <tr key={event.activity} className={event.main ? 'event-main' : null}>
              <td>{timeToString(event.time)}</td>
              <td>{event.activity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  function timeToString(time) {
    const hours = Math.floor(time).toString().padStart(2, '0');
    const minutes = ((time % 1) * 60).toFixed(0).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  const wed = [
    {
      time: 10,
      activity: 'Sample',
      main: true,
    },
    {
      time: 11,
      activity: 'Sample',
      main: true,
    },
    {
      time: 12,
      activity: 'Sample',
      main: true,
    },
    {
      time: 13,
      activity: 'Sample',
      main: true,
    },
    {
      time: 14,
      activity: 'Sample',
      main: true,
    },
    {
      time: 15,
      activity: 'Sample',
      main: true,
    },
    {
      time: 16,
      activity: 'Sample',
      main: false,
    },
    {
      time: 17,
      activity: 'Sample',
      main: false,
    },
  ];

  const thu = [
    {
      time: 10,
      activity: 'Sample',
      main: true,
    },
    {
      time: 11,
      activity: 'Sample',
      main: true,
    },
    {
      time: 12,
      activity: 'Sample',
      main: true,
    },
    {
      time: 13,
      activity: 'Sample',
      main: true,
    },
    {
      time: 14,
      activity: 'Sample',
      main: true,
    },
    {
      time: 15,
      activity: 'Sample',
      main: true,
    },
  ];

  return (
    <div id='aikataulu'>
      <PageSection title='Aikataulu'>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
        >
          <Paper shadow='xl' radius='0' p='xl' withBorder>
            <Text
              variant='gradient'
              gradient={{ from: '#FFEC99', to: '#e7ff50', deg: 45 }}
              sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
              ta='center'
              fz='xl'
              fw={800}
            >
              Ke 18.10.
            </Text>
            <Divider my='sm' color={'gray.8'} />
            {getProgram(wed)}
          </Paper>

          <Paper shadow='xl' radius='0' p='xl' withBorder>
            <Text
              variant='gradient'
              gradient={{ from: '#FFEC99', to: '#e7ff50', deg: 45 }}
              sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
              ta='center'
              fz='xl'
              fw={800}
            >
              To 19.10.
            </Text>
            <Divider my='sm' color={'gray.8'} />

            {getProgram(thu)}
          </Paper>
        </Flex>
      </PageSection>
    </div>
  );
}
