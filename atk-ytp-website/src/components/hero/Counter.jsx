import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import './Counter.scss'
import TimeDisplay from './TimeDisplay';
import Card from './Card'

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>atk ytp is here :D</span>
    </div>
  );
};

const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
        <TimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <TimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <TimeDisplay value={minutes} type={'Minutes'} isDanger={false} />
        <TimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const Counter = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <Card>
        <div className='pb-4'>
            <h2 className='font-sans border-b-2 font-light'>YTP STARTS IN</h2>
          </div>
        <div className='flex'>
          
            <Timer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
        
      </Card>

    );
  }
};

export default Counter;