import React from 'react';

const TimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='text-md font-sans font-extrabold'>{value}</p>
      <span className='font-body text-sm'>{type}</span>
    </div>
  );
};

export default TimeDisplay;
