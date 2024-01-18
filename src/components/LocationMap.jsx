"use client"
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const LocationMap = () => {
  return (
    <div className='overflow-hidden container mx-auto mb-5 px-5'>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 90.399452,
          latitude: 23.777176,
          zoom: 8
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=6wNGxRfvTtOMfvtAEjPz"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={90.399452} latitude={23.777176} color='#61dbfb' />
      </Map>
    </div>
  );
};

export default LocationMap;