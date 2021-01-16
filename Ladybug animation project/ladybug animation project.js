import React, { Component } from 'react';
import { Animated, 
TouchableWithoutFeedback, 
Text, 
View, 
StyleSheet,
Image } from 'react-native';

import ladybug from './ladybug1.png'
import background from './leaves.jpg'


export default class App extends Component {
  constructor(props) {
    super(props)
//starts the ladybug at a random xy value in the container
    this.moveAnimation = new Animated.ValueXY({x: (Math.random()*300+10), y: (Math.random()*300+10)})
  }
//function to spring the ladybug away to a random value after a touch
  _moveBug = () => {
    Animated.spring(this.moveAnimation, {
      toValue: {x: (Math.random()*300+10), y: (Math.random()*350+10)},
    }).start()
  }
//displays the screen with a background image filling the whole screen
//add image styles width, length and absolute position because it doesn't follow flex
  render() {
    return (
      <View style={styles.container}> 
      <Image
        source = {background}
        resizeMode = "cover"
        style = {[StyleSheet.absoluteFill, {
          width: null,
          height: null}]}
        />

        <Text style = {styles.text}>Catch the ladybug. </Text>
        <Animated.View style={this.moveAnimation.getLayout()}>
        <Animated.Image source = {ladybug} 
        style = {[styles.image, styles.container ]}/>
        
          <TouchableWithoutFeedback style={styles.button} onPress={this._moveBug}>
            <Text style={styles.buttonText}>Press</Text>
          </TouchableWithoutFeedback>        
        </Animated.View>
      </View>
    );
  }
}
//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
 image: {
    position: 'absolute',
    width: 100,
    height: 150,
 
  },
  button: {
    paddingTop: 100,
    paddingBottom: 150,
  },
  buttonText: {
    fontSize: 24,
    
  },
  text:{
    fontSize: 24,
    alignItems: 'center',
    padding: 80

   
  }
});
