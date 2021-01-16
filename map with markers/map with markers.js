import React, { Component } from 'react';
import {  View,
  Image,
  Button,
  StyleSheet,
  Text,
  Dimensions } from 'react-native';

import { Constants, MapView,LocalTile, Marker } from 'expo';
//dimension of the device loading the app
const winsize = Dimensions.get('window');

export default class app extends Component {
  
  //starting coordinates of the map
  state = {
    focusedLocation: {
      latitude: 34.04632018,
      longitude: -117.84371171,
      latitudeDelta: 0.0122,
      longitudeDelta: winsize.width/winsize.height * 0.0122},
 
      locationChosen: false,
  };

//moves the place from one to another and represented by the coordinates
  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
  };
  
  //remove marker
  reset = () => {
    this.setState({locationChosen: false})
    }

//if the locationChosen is true, shows 1 marker and a pin with color purple
  render() {
    let marker = [];
    if (this.state.locationChosen) {
      marker = <MapView.Marker 
      key = {marker.key}
      coordinate={this.state.focusedLocation} 
      pinColor = "purple" />;
    }
	//returns the new area with a marker
return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          region={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          
         
        >
          {marker}
        </MapView>
        <View style={styles.button}>
           <Button title="Clear Marker" onPress = {this.reset}/>
        </View>
      </View>
    );
  }
}
//styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  map: {
    width: "100%",
    height: "90%"
  },
  button: {
    margin: 8
  }
});
