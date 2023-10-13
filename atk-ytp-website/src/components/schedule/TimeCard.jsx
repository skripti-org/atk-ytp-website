import { Divider, Paper, Text, Table } from '@mantine/core';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

export default function TimeCard({ dayString, scheduleDay }) {
  const { t } = useTranslation();

  function timeToString(time) {
    const hours = Math.floor(time).toString().padStart(2, '0');
    const minutes = ((time % 1) * 60).toFixed(0).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  
  const [currentEventIndex, setCurrentEventIndex] = useState(-1);

  /* Otetaan käyttöön tapahtuman alkaessa
  
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  useEffect(() => {
    const currentIndex = scheduleDay.findIndex((event) => {
      const eventHour = Math.floor(event.time);
      const eventMinutes = (event.time % 1) * 60;
      return (eventHour === currentHour && eventMinutes <= currentMinutes );
    });
    setCurrentEventIndex(currentIndex);
  }, [scheduleDay, currentHour, currentMinutes]);
  */
  
  function getProgram(day) {
    return (
      <Table highlightOnHover withColumnBorders withBorder>
        <thead>
          <tr>
            <th>{t('schedule.time')}</th>
            <th>{t('schedule.programme')}</th>
          </tr>
        </thead>
        <tbody>
          {day.map((event, index) => (
            <tr key={nanoid()} className={currentEventIndex === index ? 'glowing-outline' : ''}>
              <td>{timeToString(event.time)}</td>
              <td>{event.activity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return (
    <Paper shadow='xl' radius='0' h='100%' p='xl' withBorder>
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
