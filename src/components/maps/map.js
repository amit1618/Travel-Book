import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div class="mapMarker">
    {text}
  </div>
);


export default class Maps extends React.Component {
    static defaultProps = {
    center: {lat: 14.5479, lng: 74.3188},
    zoom: 11
  };
 render () {
         return (
          
         <div class="panel panel-default">
            <div class="panel-heading">Locate</div>
              <div class="panel-body">
               <div id="mapPanel">
                 <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                  >
                    <AnyReactComponent
                      lat={14.5479}
                      lng={74.3188}
                      text={''}
                    />
                  </GoogleMapReact>
            
          </div>
              </div>
            
          </div>
         
         )
      }
}