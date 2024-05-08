import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Location = () => {
  const position = [28.40275590267111, 77.06487699394386];
  return (
    <div className="container main_container">
      <div className="text-center">
        <h2 className="main_title d-inline-block">
          m3m golf estate <span>Location</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}@2x.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              subdomains="abcd"
              maxZoom={19}
            />
            <Marker position={position}>
              <Popup>M3M Golf Estate</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Location;
