import React, { useState } from 'react';
import { IconInfoCircleFilled } from '@tabler/icons-react';
import { Divider } from '@mantine/core';
import { nanoid } from 'nanoid';

const Legend = () => {
  const [showLegend, setShowLegend] = useState(false);

  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  const legendStyle = {
    display: showLegend ? 'none' : 'flex',
    backgroundColor: 'white',
    textAlign: 'left',
    borderRadius: '4px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
    minWidth: '15%',
    minHeight: '25%',
    height: 'auto',
    opacity: 1,
    color: '#070707',
    fontSize: '.9rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease, height 1s ease',
  };

  const infoContainer = {
    display: showLegend ? 'none' : 'flex',
    textAlign: 'left',
    borderRadius: '4px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
    zIndex: 1000,
    width: '2.5rem',
    opacity: 1,
    height: '2.5rem',
    color: '#070707',
    backgroundColor: 'white',
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 0.3s ease, height 1s ease',
  };

  const types = [
    {
      type: 'Majoitus',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/4/41/Icon_35.gif',
    },
    {
      type: 'Baari',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/a/a4/Icon_49.gif',
    },
    {
      type: 'Ravintola',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/3/3a/Icon_50.gif',
    },
    {
      type: 'Luentosali',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/7/7b/Icon_36.gif',
    },
  ];

  return (
    <div className='leaflet-top leaflet-right'>
      {showLegend ? (
        <div
          className='legend leaflet-control-zoom leaflet-control-container leaflet-control px-4'
          style={legendStyle}
          onClick={toggleLegend}
        >
          <div className='py-2 text-center font-sans'>
            <strong className=''>Info</strong>
          </div>
          <Divider color={'gray.6'} />
          <div className='flex flex-1 flex-col justify-center py-2'>
            {types.map((type, index) => {
              return (
                <div key={nanoid()} className='flex items-center'>
                  <div>
                    <img
                      src={type.iconUrl}
                      alt={type.type}
                      width={20}
                      style={{ marginRight: '5px' }}
                    />
                  </div>
                  <div className='font-sans'>{type.type}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className='leaflet-control-zoom leaflet-control-container leaflet-control'
          style={infoContainer}
          onClick={toggleLegend}
        >
          <IconInfoCircleFilled />
        </div>
      )}
    </div>
  );
};

export default Legend;
