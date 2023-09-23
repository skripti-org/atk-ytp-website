import { Icon } from 'leaflet';

export default function CustomIcon({ iconUrl }) {
    return new Icon({
      iconUrl: iconUrl,
      iconSize: [30, 30],
    });
  }

