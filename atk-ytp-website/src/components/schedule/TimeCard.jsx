import React from 'react';
import { Divider, Paper, Text, Table } from '@mantine/core';
import { nanoid } from 'nanoid';

export default function TimeCard({dayString, scheduleDay}) {

    function timeToString(time) {
        const hours = Math.floor(time).toString().padStart(2, '0');
        const minutes = ((time % 1) * 60).toFixed(0).padStart(2, '0');
    
        return `${hours}:${minutes}`;
    }

    function getProgram(day) {
        return (
          <Table highlightOnHover withColumnBorders withBorder>
            <thead>
              <tr>
                <th>Klo</th>
                <th>Ohjelma</th>
              </tr>
            </thead>
            <tbody>
              {day.map((event) => (
                <tr key={nanoid()} className={/*event.main ? 'event-main' : null*/ ''}>
                  <td>{timeToString(event.time)}</td>
                  <td>{event.activity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        );
    }

  return (
    <Paper shadow='xl' radius='0' p='xl' withBorder className='flex-1'>
        <Text
            variant='gradient'
            gradient={{ from: '#FFEC99', to: '#e7ff50', deg: 45 }}
            sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
            ta='center'
            fz='xl'
            fw={800}
        >
            {dayString}
        </Text>
    <Divider my='sm' color={'gray.8'} />
        {getProgram(scheduleDay)}
    </Paper>
  );
}