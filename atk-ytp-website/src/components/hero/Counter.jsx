import { useCountdown } from '../../hooks/useCountdown';
import './Counter.scss';
import TimeDisplay from './TimeDisplay';
import { Paper } from '@mantine/core';

const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='show-counter'>
      <TimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
      <TimeDisplay value={hours} type={'Hours'} isDanger={false} />
      <TimeDisplay value={minutes} type={'Minutes'} isDanger={false} />
      <TimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const Counter = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds > 0) {
    return (
      <Paper shadow='md' p='md' radius='3rem' className='glow relative' withBorder>
        <div className='flex'>
          <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
        </div>
      </Paper>
    );
  }
};

export default Counter;
