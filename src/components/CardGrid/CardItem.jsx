import { FaMapMarkerAlt, FaRegBuilding } from "react-icons/fa";
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CardItem.css';
import PRK from '../../assets/PRK.svg';
import AIRF from '../../assets/AIRF.svg';
import AIRH from '../../assets/AIRH.svg';
import CAPE from '../../assets/CAPE.svg';
import DAM from '../../assets/DAM.svg';
import ISL from '../../assets/ISL.svg';
import MT_MTS from '../../assets/MT_MTS.svg';
import PPL from '../../assets/PPL.svg';
import PPLA2 from '../../assets/PPLA2.svg';
import PPLX from '../../assets/PPLX.svg';

export const CardItem = ({
  latitude,
  longitude,
  name,
  country,
  admin1,
  admin2,
  admin3,
  countryCode,
  featureCode,
}) => {
  const icons = {
    PRK: PRK,
    AIRF: AIRF,
    AIRH: AIRH,
    CAPE: CAPE,
    DAM: DAM,
    ISL: ISL,
    MT: MT_MTS,
    MTS: MT_MTS,
    PPL: PPL,
    PPLA2: PPLA2,
    PPLX: PPLX,
  };

  const getSvg = (featureCode) => {
    return icons[featureCode] || null;
  };

  return (
    <div className="card-item-container">
      <div className="card-item-map">
      
        <MapContainer
          className="map-container"
          style={{ width: '90%', height: '300px' }}
          zoom={13}
          center={[latitude, longitude]}
          scrollWheelZoom={false}
          fadeAnimation={true}
          dragging={false}
          markerZoomAnimation={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              <p>{country}</p>
              <p> latitude: {latitude}</p>
              <p>longitude: {longitude}</p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="card-item-ico">
        <img src={getSvg(featureCode)} alt="img" />
      </div>
      <div className="card-item-info">
        <h2>{name}</h2>
        <div className="card-item-pin">
          <p><FaMapMarkerAlt /><b>latitude:</b> {latitude}</p>
          <p><FaMapMarkerAlt /><b>longitude:</b> {longitude}</p>
        </div>
        <p className="text-small"> <FaRegBuilding />
        <b><span>HIERARCHICAL ADMINISTRATIVE AREAS:</span></b><br/>{admin1} {admin2} {admin3}</p>
        <p><b>Country:</b> <span className="countryCode">{countryCode}</span> {country}</p>
        <p><b>Feature Code:</b> {featureCode}</p>
      </div>
    </div>
  );
};
