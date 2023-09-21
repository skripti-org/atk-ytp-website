import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  Marker,
  useMap,
  Popup,
  useMapEvent,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import PageSection from '../layout/PageSection';
import { useRef } from 'react';
import Legend from './Legend';
import CustomIcon from './CustomIcon';
import CustomPopup from './CustomPopup';

function Markers() {
  const map = useMap();
  const markers = [
    {
      coordinates: [62.6020939, 29.7623925],
      label: 'Marks',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/a/a4/Icon_49.gif',
      info: 'Tää baari on myynnissä. Ei oo kallis osta pois.'
    },
    {
      coordinates: [62.5959455,29.7487638],
      label: 'Joensuun yhteiskoulun lukio',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/4/41/Icon_35.gif',
      info: 'Täällähän majoittuu mukavasti. Nukkuakin saa mutta ei ole pakko!'
    },
    {
      coordinates: [62.6026422, 29.7745023],
      label: 'Pielisjoen koulu',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/4/41/Icon_35.gif',
      info: 'Täällähän majoittuu mukavasti. Nukkuakin saa mutta ei ole pakko!'
    },
    {
      coordinates: [62.6036733, 29.7446238, 21],
      label: 'Carelia-sali',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/7/7b/Icon_36.gif',
      info: 'Ai että. Keskiviikon ja torstain seminaarit fasilitoi mahtava Carelia-sali!'
    },
    {
      coordinates: [62.5674612,29.8303404],
      label: 'Etkopaikka',
      iconUrl: 'https://sampwiki.blast.hk/wroot/images2/7/7b/Icon_36.gif',
      info: 'Täällä sitten etkoillaan oikein kunnolla molempina iltoina. Bussit kulkee ees taas vrumvrum.'
    }
  ];
  return (
    markers.length > 0 &&
    markers.map((marker) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              map.setView(marker.coordinates, 20);
            },
          }}
          key={marker.coordinates}
          position={marker.coordinates}
          icon={CustomIcon({ iconUrl: marker.iconUrl })}
        >
          <Popup>
            <CustomPopup label={marker.label} info={marker.info} coordinates={marker.coordinates} />
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
    <Marker
      position={position}
      icon={CustomIcon({ iconUrl: 'https://sampwiki.blast.hk/wroot/images2/3/3e/Icon_3.gif' })}
    >
      <Popup>
        <div>
          <img width={100} src='https://i.ytimg.com/vi/so_7WcDkjxs/mqdefault.jpg'></img>
        </div>
        <div className='text-xs font-sans'>Olet tässä :D</div>
      </Popup>
    </Marker>
  );
}

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
            </MapContainer>
          </div>
        </section>
      </PageSection>
    </div>
  );
}
