import { MapContainer, TileLayer, Marker, useMap, Popup, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useRef } from 'react';
import PageSection from '../layout/PageSection';
import Legend from './Legend';
import CustomIcon from './CustomIcon';
import CustomPopup from './CustomPopup';
import 'react-leaflet-fullscreen/styles.css';
import { FullscreenControl } from 'react-leaflet-fullscreen';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import CampusGeo from './kampus.json';
import IconBar from '../../../assets/icons/Icon_49.gif';
import IconSave from '../../../assets/icons/Icon_35.gif';
import IconFire from '../../../assets/icons/Icon_20.gif';
import IconSchool from '../../../assets/icons/Icon_36.gif';
import IconDiner from '../../../assets/icons/Icon_17.gif';

function Markers() {
  const map = useMap();

  //TODO nämä rajapinnasta????
  const markers = [
    {
      coordinates: [62.6020939, 29.7623925],
      label: 'Marks',
      iconUrl: IconBar,
      info: 'Tää baari on myynnissä. Ei oo kallis osta pois.',
    },
    {
      coordinates: [62.5959455, 29.7487638],
      label: 'Joensuun yhteiskoulun lukio',
      iconUrl: IconSave,
      info: 'Täällähän majoittuu mukavasti. Nukkuakin saa mutta ei ole pakko!',
    },
    {
      coordinates: [62.6026422, 29.7745023],
      label: 'Pielisjoen koulu',
      iconUrl: IconSave,
      info: 'Täällähän majoittuu mukavasti. Nukkuakin saa mutta ei ole pakko!',
    },
    {
      coordinates: [62.6036733, 29.7446238, 21],
      label: 'Carelia-sali',
      iconUrl: IconSchool,
      info: 'Ai että. Keskiviikon ja torstain seminaarit fasilitoi mahtava Carelia-sali!',
    },
    {
      coordinates: [62.5674612, 29.8303404],
      label: 'Etkopaikka',
      iconUrl: IconSchool,
      info: 'Täällä sitten etkoillaan oikein kunnolla molempina iltoina. Bussit kulkee ees taas vrumvrum.',
    },
    {
      coordinates: [62.59936371611705, 29.771264912952883],
      label: 'Torstain jatkopaikka, Ravintola Kerubi',
      iconUrl: IconBar,
      info: '',
    },
    {
      coordinates: [62.601077101642865, 29.77397667532403],
      label: 'Keskiviikon jatkopaikka, Las Palmas Kimmel',
      iconUrl: IconBar,
      info: '',
    },
    {
      coordinates: [62.60682699348919, 29.76630793978979],
      label: 'Aamusauna on täällä',
      iconUrl: IconFire,
      info: '',
    },
    {
      coordinates: [62.60395088796654, 29.744121624489953],
      label: 'Ravintola Carelia',
      iconUrl: IconDiner,
      info: '',
    },
    {
      coordinates: [62.60544812111559, 29.746798721909375],
      label: 'Kampus bistro',
      iconUrl: IconDiner,
      info: '',
    },
    {
      coordinates: [62.60461125112615, 29.7409188699068],
      label: 'Wicked Rabbit Metria',
      iconUrl: IconDiner,
      info: '',
    },
    {
      coordinates: [62.60379956594281, 29.740046474806675],
      label: 'Ravintola Natura',
      iconUrl: IconDiner,
      info: '',
    },
    {
      coordinates: [62.604547938022144, 29.737829524172902],
      label: 'Ravintola Natura',
      iconUrl: IconDiner,
      info: '',
    },
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
  if (position == null) {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
    });
  }

  return position === null ? null : (
    <Marker
      position={position}
      icon={CustomIcon({ iconUrl: 'https://sampwiki.blast.hk/wroot/images2/3/3e/Icon_3.gif' })}
    >
      <Popup>
        <div>
          <img width={100} src='https://i.ytimg.com/vi/so_7WcDkjxs/mqdefault.jpg'></img>
        </div>
        <div className='font-sans text-xs'>Olet tässä :D</div>
      </Popup>
    </Marker>
  );
}

export default function MapComponent() {
  const map = useRef(null);
  const isMapVisible = useIntersectionObserver(map);

  return (
    <div id='kartta' ref={map}>
      <PageSection title='Kartta'>
        <section className='map-component'>
          <div className='map'>
            <MapContainer
              center={[62.602079226, 29.759679275]}
              zoom={13}
              fadeAnimation={true}
              scrollWheelZoom={true}
              zoomControl={true}
              style={{ flex: 1, width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
              />
              {isMapVisible && <LocationMarker />}

              <GeoJSON data={CampusGeo}>
                <Tooltip sticky>Kampusalue</Tooltip>
              </GeoJSON>

              <Markers />
              <Legend />
              <FullscreenControl forceSeparateButton={true} position='topright' />
            </MapContainer>
          </div>
        </section>
      </PageSection>
    </div>
  );
}
