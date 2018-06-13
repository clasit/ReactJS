import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react'
import { map } from 'leaflet';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {

  static defaultProps = {
    center: {lat: 41.65167, lng: -0.9650211},
    zoom: 13
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact        
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }

  /* Se hace en 'componentDidMount' para asegurar que el mapa esta previamente renderizado
  */
  componentDidMount(){
    console.log( map );
    // var latLong = new window.google.maps.LatLng(-47.888723, 444.675360);
  }
};

export default Map;
