import React, { Component } from "react";
import QrReader from "react-qr-reader";
import {geolocated} from 'react-geolocated';

class MyReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No QR result yet...",
      qrStyle : {
        width: '250px',
        display:'inline-block'

      }
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <React.Fragment>
              <div className='qrWrapper'>
                <QrReader
                  delay={this.state.delay}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={this.state.qrStyle}
                />
              </div>
              <div className="locationStats">
                <p>{this.state.result}</p>
                <p>latitude: {this.props.coords.latitude}</p>
                <p>longitude: {this.props.coords.longitude}</p>
              </div>
            </React.Fragment>
          : <div>Getting the location data&hellip; </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(MyReader);