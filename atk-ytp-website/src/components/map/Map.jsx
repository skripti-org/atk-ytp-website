import { MapContainer, TileLayer, WMSTileLayer, Marker, useMap, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PageSection from '../layout/PageSection';
import React from 'react';

export default function Map() {
  const playerIcon = new Icon({
    iconUrl: 'https://sampwiki.blast.hk/wroot/images2/a/ad/Icon_2.gif',
    iconSize: [40, 40],
  });

  function CustomIcon({ iconUrl }) {
    return new Icon({
      iconUrl: iconUrl,
      iconSize: [40, 40],
    });
  }

  function LocationMarker() {
    const [position, setPosition] = React.useState(null);

    const map = useMap();

    React.useEffect(() => {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 15);
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={playerIcon}>
        <Popup>Olet tässä :D</Popup>
      </Marker>
    );
  }

  function Markers() {
    const map = useMap();
    const markers = [
      {
        coordinates: [62.6020939, 29.7623925],
        label: 'Joku baari vissii :D',
        iconUrl: 'https://sampwiki.blast.hk/wroot/images2/a/a4/Icon_49.gif',
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

  return (

      <section className='map-component'>
        <div className='map'>
          <MapContainer
            center={[62.602079226, 29.759679275]}
            zoom={15}
            scrollWheelZoom={true}
            zoomControl={true}
            style={{ flex: 1, width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            />
            <LocationMarker />
            <Markers />
          </MapContainer>
        </div>
      </section>

  );
}
