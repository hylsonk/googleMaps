import React from 'react'
import { GoogleMap, useJsApiLoader,DrawingManager } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "",
    libraries:['drawing']
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
    console.log(map.getBounds());
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onBoundsChanged = () => {
    if (map) { 
      console.log(map.getBounds());
    }
  };

  const onLoadDraw = drawingManager => {
    console.log(drawingManager)
  }
  
  const onPolygonComplete = polygon => {
    console.log(`POLYGON`,polygon)
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onBoundsChanged={onBoundsChanged}
      >
        <DrawingManager
            onLoad={onLoadDraw}
            onPolygonComplete={onPolygonComplete}
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)