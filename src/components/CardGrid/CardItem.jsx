import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const CardItem = ({ latitude, longitude, name, country, admin1, admin2, admin3, countryCode }) => {
  return (
    <div>
      <div className="map">
        <MapContainer
          style={{ width: '50%', height: '50vh' }}
          zoom={13}
          center={[latitude, longitude]}
          scrollWheelZoom={false}
          fadeAnimation={true}
          markerZoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              <p>{country}</p>
              <p>latitude: {latitude}</p>
              <p>longitude: {longitude}</p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div>
        <h2>{name}</h2>
        <p>latitude: {latitude}</p>
        <p>longitude: {longitude}</p>
        <p>HIERARCHICAL ADMINISTRATIVE AREAS: {admin1} {admin2} {admin3}</p>
        <p>country: { countryCode } {country}</p>
      </div>
    </div>
  );
};
