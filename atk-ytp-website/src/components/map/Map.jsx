import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  GeoJSON,
  Tooltip,
  Circle,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useRef } from 'react';
import PageSection from '../layout/PageSection';
import Legend from './Legend';
import CustomIcon from './CustomIcon';
import CustomPopup from './CustomPopup';
import 'react-leaflet-fullscreen/styles.css';
import { FullscreenControl } from 'react-leaflet-fullscreen';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { nanoid } from 'nanoid';

import CampusGeo from './kampus.json';
import IconMarker from '../../../assets/icons/Icon_3.gif';
import IconDiner from '../../../assets/icons/Icon_17.gif';
import IconSave from '../../../assets/icons/Icon_35.gif';
import IconSchool from '../../../assets/icons/Icon_36.gif';
import IconQuestionmark from '../../../assets/icons/Icon_37.gif';
import IconBar from '../../../assets/icons/Icon_49.gif';
import IconEtkot from '../../../assets/icons/Icon_31.gif';
import IconJatkot from '../../../assets/icons/Icon_48.gif';
import IconKyyti from '../../../assets/icons/Icon_55.gif';

import TriangleMan from '../../../assets/img/triangle.jpg';
import { useTranslation } from 'react-i18next';

function Markers() {
  const map = useMap();

  //TODO nämä rajapinnasta????
  //TODO aj-tila, storm circle jne.
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
      iconUrl: IconEtkot,
      info: 'Täällä sitten etkoillaan oikein kunnolla molempina iltoina. Bussit kulkee ees taas vrumvrum.',
    },
    {
      coordinates: [62.601215324538146, 29.758909902956763],
      label: 'Etkojen bussikuljetus',
      iconUrl: IconKyyti,
      info: 'Etkojen bussit lähtevät Kirkkokadulta Taidekeskus Ahjon vierestä. Bussit kulkevat sitä mukaa kun kyydit ovat täynnä.',
    },
    {
      coordinates: [62.59936371611705, 29.771264912952883],
      label: 'Torstain jatkopaikka, Ravintola Kerubi',
      iconUrl: IconJatkot,
      info: '',
    },
    {
      coordinates: [62.601077101642865, 29.77397667532403],
      label: 'Keskiviikon jatkopaikka, Las Palmas Kimmel',
      iconUrl: IconJatkot,
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
      coordinates: [62.604547938022144, 29.737829524172902],
      label: 'Ravintola Futura',
      iconUrl: IconDiner,
      info: '',
    },
    {
      coordinates: [62.59920094198321, 29.758089726753642],
      label: 'Ravintola Mikko',
      iconUrl: IconQuestionmark,
      info: '',
    },
    {
      coordinates: [62.59831277510679, 29.743575861549743],
      label: 'Skriptin aj-tila',
      iconUrl: IconQuestionmark,
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
          key={nanoid()}
          position={marker.coordinates}
          icon={CustomIcon({ iconUrl: marker.iconUrl })}
        >
          <Popup maxWidth='100%' maxHeight='auto'>
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
    <Marker position={position} icon={CustomIcon({ iconUrl: IconMarker })}>
      <Popup>
        <div>
          <img width={100} src={TriangleMan}></img>
        </div>
        <div className='font-sans text-xs'>Olet tässä :D</div>
      </Popup>
    </Marker>
  );
}

export default function MapComponent() {
  const map = useRef(null);
  const isMapVisible = useIntersectionObserver(map);
  const tile = "https://{s}.tile-cyclosm.openstreetmap.fr/[cyclosm|cyclosm-lite]/{z}/{x}/{y}.png";
  const { t } = useTranslation();
  return (
    <div id='kartta' ref={map}>
      <PageSection title={t('common.map')}>
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
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
              {isMapVisible && <LocationMarker />}

              <GeoJSON data={CampusGeo}>
                <Tooltip sticky>Kampusalue</Tooltip>
              </GeoJSON>

              <Circle center={[62.614591714071615, 29.819584213298924]} radius={1000}>
                <Tooltip sticky>Storm circle (Battle Royale)</Tooltip>
              </Circle>

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
