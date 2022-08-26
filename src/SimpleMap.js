import React from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
    const defaultProps = {
      center: {
        lat: 31.5657,
        lng: 74.3142
      },
      zoom: 12
    };
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC-TxZTNhMzp7Q-1j_s5XMN3ndl1rUGzfg" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }