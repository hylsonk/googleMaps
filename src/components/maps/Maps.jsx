import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '600px'
}

const center = {
    lat: -3.745,
    lng: -38.523
}

class Map extends Component {
    

    render() {
        return (
            <LoadScript
                googleMapsApiKey=""
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}æ
                    onload={
                        map => {
                            map.getBounds()
                        }
                    }
                >

                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map;