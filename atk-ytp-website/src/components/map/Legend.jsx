import { useState } from 'react';
import { IconInfoCircleFilled } from '@tabler/icons-react';
import { Divider } from '@mantine/core';
import { nanoid } from 'nanoid';
import IconMarker from '../../../assets/icons/Icon_3.gif';
import IconDiner from '../../../assets/icons/Icon_17.gif';
import IconSave from '../../../assets/icons/Icon_35.gif';
import IconSchool from '../../../assets/icons/Icon_36.gif';
import IconQuestionmark from '../../../assets/icons/Icon_37.gif';
import IconBar from '../../../assets/icons/Icon_49.gif';
import IconEtkot from '../../../assets/icons/Icon_31.gif';
import IconJatkot from '../../../assets/icons/Icon_48.gif';
import IconKyyti from '../../../assets/icons/Icon_55.gif';

const Legend = () => {
  const [showLegend, setShowLegend] = useState(false);

  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  const legendStyle = {
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
    textAlign: 'left',
    borderRadius: '4px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
    zIndex: 1000,
    width: '2rem',
    opacity: 1,
    height: '2rem',
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
      iconUrl: IconSave,
    },
    {
      type: 'Baari',
      iconUrl: IconBar,
    },
    {
      type: 'Ravintola',
      iconUrl: IconDiner,
    },
    {
      type: 'Luentosali',
      iconUrl: IconSchool,
    },
    {
      type: 'Etkopaikka',
      iconUrl: IconEtkot,
    },
    {
      type: 'Jatkopaikka',
      iconUrl: IconJatkot,
    },
    {
      type: 'Etkobussi',
      iconUrl: IconKyyti,
    },
    {
      type: 'Side-Quest',
      iconUrl: IconQuestionmark,
    },
  ];

  return (
    <div className='leaflet-top leaflet-right mt-12'>
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
            {types.map((type) => {
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
