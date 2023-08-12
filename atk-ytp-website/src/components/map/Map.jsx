import { MapContainer, TileLayer, WMSTileLayer, Marker, useMap, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import './Legend.css'
import PageSection from '../layout/PageSection';

export default function Map() {

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

  function Legend() {
    const map = useMap();
  
    const legend = L.control({ position: "bottomright" });
    const div = L.DomUtil.create("div", "info legend");

    legend.onAdd = () => {
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
      ];
      const labels = [];
      types.map(type => {
        labels.push(
          `<img src="${type.iconUrl}" alt="${type.type}" width="20" className="legend-img"/> 
          <span className="legend-text">${type.type}</span>`
          
        );
      });
      div.innerHTML = labels.join("<br>");
      return div;
    };
  
    legend.addTo(map);
  
    return null; // No need to render anything for the Legend component
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
        label: 'Marks',
        iconUrl: 'https://sampwiki.blast.hk/wroot/images2/a/a4/Icon_49.gif',
      },
      {
        coordinates: [62.6026422, 29.7745023],
        label: 'Pielisjoen koulu',
        iconUrl: 'https://sampwiki.blast.hk/wroot/images2/4/41/Icon_35.gif',
      },
      {
        coordinates: [62.6036733,29.7446238,21],
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

  return (
    <div id="kartta">
    <PageSection title='Kartta'>
      <section className='map-component'>
        <div className='map'>
          <MapContainer
            center={[62.602079226, 29.759679275]}
            zoom={15}
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
