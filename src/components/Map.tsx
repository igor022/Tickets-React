import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

interface Props {
  position: [number, number];
  asset: any;
}

const Map = (props: Props) => {
  const { asset } = props;
  const [position, setPosition] = useState<[number, number]>(props.position);

  useEffect(() => {
    setPosition(props.position);
  }, [props.position]);

  return (
    <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView center={position} />
      <Marker position={props.position}>
        <Popup>{`Geocode: ${asset.geoCode} | Asset: ${asset.name}`}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
