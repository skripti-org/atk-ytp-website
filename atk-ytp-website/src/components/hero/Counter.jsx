import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import './Counter.scss';
import TimeDisplay from './TimeDisplay';
import { Paper } from '@mantine/core';

const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='show-counter'>
      <TimeDisplay value={days} type={'Päivää'} isDanger={days <= 3} />
      <TimeDisplay value={hours} type={'Tuntia'} isDanger={false} />
      <TimeDisplay value={minutes} type={'Minuuttia'} isDanger={false} />
      <TimeDisplay value={seconds} type={'Sekuntia'} isDanger={false} />
    </div>
  );
};

const Counter = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds > 0) {
    return (
      <Paper shadow='md' p='md' radius={'xl'}>
        <div className='flex'>
          <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
        </div>
      </Paper>
    );
  }
};

export default Counter;
