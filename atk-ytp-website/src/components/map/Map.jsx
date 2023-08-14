import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  Marker,
  useMap,
  Popup,
  useMapEvent,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import './Legend.css';
import PageSection from '../layout/PageSection';
import { useRef } from 'react';

const playerIcon = new Icon({
  iconUrl: 'https://sampwiki.blast.hk/wroot/images2/3/3e/Icon_3.gif',
  iconSize: [30, 30],
});

function CustomIcon({ iconUrl }) {
  return new Icon({
    iconUrl: iconUrl,
    iconSize: [30, 30],
  });
}

function Markers() {
  const map = useMap();
  const markers = [
    {
      coordinates: [62.6020939, 29.7623925],
      label: 'Marks',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/a/a4/Icon_49.gif',
    },
    {
      coordinates: [62.6026422, 29.7745023],
      label: 'Pielisjoen koulu',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/4/41/Icon_35.gif',
    },
    {
      coordinates: [62.6036733, 29.7446238, 21],
      label: 'Carelia sali',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/7/7b/Icon_36.gif',
    },
    {
      coordinates: [62.60358808111174, 29.747125070027504],
      label: 'Aurora sali',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/7/7b/Icon_36.gif',
    },
  ];
  return (
    markers.length > 0 &&
    markers.map((marker, index) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              map.setView(marker.coordinates, 20);
            },
          }}
          key={index}
          position={marker.coordinates}
          icon={CustomIcon({ iconUrl: marker.iconUrl })}
        >
          <Popup>
            <span>{marker.label}</span>
          </Popup>
        </Marker>
      );
    })
  );
}

function LocationMarker() {
  const [position, setPosition] = React.useState(null);

  const map = useMap();

  React.useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={playerIcon}>
      <Popup>Olet tässä :D</Popup>
    </Marker>
  );
}
const Legend = () => {
  const legendStyle = {
    backgroundColor: '#1A1B1E',
    textAlign: 'left',
    borderRadius: '5px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    zIndex: 900,
    minWidth: '15%',
    minHeight: '25%',
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '1rem',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    <div className='legend px-4' style={legendStyle}>
      <div className='py-2 text-center font-sans'>
        <strong>Info</strong>
      </div>
      <div className='flex flex-1 flex-col justify-center py-2'>
        {types.map((type, index) => {
          return (
            <div className='flex items-center'>
              <div>
                <img src={type.iconUrl} alt={type.type} width={20} style={{ marginRight: '5px' }} />
              </div>
              <div className='font-sans'>{type.type}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent('click', (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  });

  return null;
}

export default function Map() {
  const animateRef = useRef(true);

  return (
    <div id='kartta'>
      <PageSection title='Kartta'>
        <section className='map-component'>
          <div className='map'>
            <MapContainer
              center={[62.602079226, 29.759679275]}
              zoom={15}
              fadeAnimation={true}
              scrollWheelZoom={true}
              zoomControl={true}
              style={{ flex: 1, width: '100%', zIndex: 0 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
              />
              <LocationMarker />
              <Markers />
              <Legend />
              <SetViewOnClick animateRef={animateRef} />
            </MapContainer>
          </div>
        </section>
      </PageSection>
    </div>
  );
}
