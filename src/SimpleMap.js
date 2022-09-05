import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap(props) {
    
    console.log(props);
    const defaultProps = {
   
        center: {
            lat: props.lat,
            lng: props.lon
        },
        zoom: 12
    
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '50vh'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC-TxZTNhMzp7Q-1j_s5XMN3ndl1rUGzfg" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}