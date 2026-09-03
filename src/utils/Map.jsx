import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function MapComponent() {
  const position = { lat: 30.2672, lng: -97.7431 };

  return (
    // The container MUST have an explicit height and width to render
    <div style={{ height: '500px', width: '100%' }}>
      <APIProvider apiKey={import.meta.env.Map_API_KEY}>
        <Map 
          defaultCenter={position} 
          defaultZoom={13} 
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          useLocation
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}
